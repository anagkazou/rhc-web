"use client";

import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function PartnerModal({ isOpen, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      telegram_username: String(formData.get("telegram_username") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/partner-submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const { error: errMsg } = await res
          .json()
          .catch(() => ({ error: "Submission failed" }));
        throw new Error(errMsg ?? "Submission failed");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="partner-modal-title"
      className="modal-backdrop-enter fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-8 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="modal-content-enter relative w-full max-w-[560px] rounded-[20px] bg-card px-6 pb-6 pt-10 sm:rounded-[24px] sm:px-8 sm:pt-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2
            id="partner-modal-title"
            className="gold-italic-text font-display text-[44px] sm:text-[56px] md:text-[64px] italic leading-[0.9] tracking-[-0.04em]"
          >
            Partners
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-[8px] bg-pill text-text-soft transition-colors hover:bg-[#0e3a44]"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {submitted ? (
          <div className="mt-8 flex flex-col items-center gap-3 py-10 text-center">
            <p className="font-display text-[28px] italic gold-italic-text">
              Thank you.
            </p>
            <p className="max-w-[360px] text-[15px] leading-6 text-body">
              We&apos;ve received your details and will reach out shortly to
              discuss partnership options.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-4 sm:mt-10"
          >
            <input
              type="text"
              name="telegram_username"
              required
              placeholder="Telegram Username"
              className="h-16 w-full rounded-[12px] bg-card-deep px-4 text-[16px] font-medium tracking-[-0.04em] text-text-soft placeholder:text-[#b5b1ac] focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="h-16 w-full rounded-xl bg-card-deep px-4 text-[16px] font-medium tracking-[-0.04em] text-text-soft placeholder:text-[#b5b1ac] focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Message"
              className="min-h-28 w-full resize-y rounded-xl bg-card-deep px-4 py-4 text-[16px] font-medium tracking-[-0.04em] text-text-soft placeholder:text-[#b5b1ac] focus:outline-none focus:ring-1 focus:ring-accent"
            />
            {error && (
              <p className="text-[14px] text-red-400" role="alert">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="btn-chamfer mt-4 inline-flex h-12 w-full items-center justify-center whitespace-nowrap px-8 text-[16px] sm:text-[18px] font-medium uppercase tracking-[-0.04em] text-text-light transition-transform hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? "Submitting…" : "Partner with us"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
