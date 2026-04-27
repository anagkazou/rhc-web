import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

const supabase = createClient(SUPABASE_URL!, SUPABASE_KEY!);

const maskKey = (k: string | undefined) =>
  !k ? "<missing>" : `${k.slice(0, 8)}…${k.slice(-4)} (len=${k.length})`;

const projectRefFromUrl = (u: string | undefined) => {
  if (!u) return "<missing>";
  try {
    return new URL(u).hostname.split(".")[0];
  } catch {
    return "<invalid>";
  }
};

export async function POST(request: NextRequest) {
  const reqId = crypto.randomUUID();
  const startedAt = Date.now();

  console.log(`[submissions ${reqId}] received`, {
    runtime: process.env.NEXT_RUNTIME ?? "unknown",
    vercelEnv: process.env.VERCEL_ENV ?? null,
    nodeEnv: process.env.NODE_ENV ?? null,
    supabaseUrl: SUPABASE_URL ?? "<missing>",
    supabaseProjectRef: projectRefFromUrl(SUPABASE_URL),
    supabaseKey: maskKey(SUPABASE_KEY),
  });

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error(`[submissions ${reqId}] missing env vars`);
    return NextResponse.json(
      { error: "Server misconfigured: Supabase env vars missing" },
      { status: 500 }
    );
  }

  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch (parseErr) {
      console.error(`[submissions ${reqId}] invalid JSON body`, parseErr);
      return NextResponse.json(
        { error: "Invalid JSON body" },
        { status: 400 }
      );
    }

    const { telegram_username, email, message } = (body ?? {}) as Record<
      string,
      unknown
    >;

    console.log(`[submissions ${reqId}] payload`, {
      keys: Object.keys((body ?? {}) as object),
      telegram_username_len:
        typeof telegram_username === "string" ? telegram_username.length : null,
      email_len: typeof email === "string" ? email.length : null,
      message_len: typeof message === "string" ? message.length : null,
    });

    if (!telegram_username || !email || !message) {
      console.warn(`[submissions ${reqId}] missing required fields`);
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (
      typeof telegram_username !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      console.warn(`[submissions ${reqId}] non-string fields`);
      return NextResponse.json(
        { error: "Fields must be strings" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.warn(`[submissions ${reqId}] invalid email format`);
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const insertRow = {
      telegram_username: telegram_username.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      created_at: new Date().toISOString(),
    };

    console.log(`[submissions ${reqId}] inserting`, {
      telegram_username: insertRow.telegram_username,
      emailDomain: insertRow.email.split("@")[1] ?? null,
      messageLen: insertRow.message.length,
    });

    const { error, status, statusText } = await supabase
      .from("contact_submissions")
      .insert([insertRow]);

    if (error) {
      console.error(`[submissions ${reqId}] supabase error`, {
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint,
        status,
        statusText,
        durationMs: Date.now() - startedAt,
      });
      return NextResponse.json(
        {
          error: "Failed to save submission",
          code: error.code,
          message: error.message,
          requestId: reqId,
        },
        { status: 500 }
      );
    }

    console.log(`[submissions ${reqId}] success`, {
      durationMs: Date.now() - startedAt,
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error(`[submissions ${reqId}] unexpected error`, {
      name: error instanceof Error ? error.name : typeof error,
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      durationMs: Date.now() - startedAt,
    });
    return NextResponse.json(
      { error: "Internal server error", requestId: reqId },
      { status: 500 }
    );
  }
}
