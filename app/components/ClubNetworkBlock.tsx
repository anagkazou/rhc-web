import Image from "next/image";
import TwoSides from "./TwoSides";
import Network from "./Network";

/**
 * Wraps TwoSides + Network so the decorative bg-coin and light-ray
 * can span across both sections seamlessly.
 */
export default function ClubNetworkBlock() {
  return (
    <div className="relative">
      {/* ── Background light-ray glow ── */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[1000px] w-[1600px] -translate-x-1/2 -translate-y-[5%] opacity-80"
        aria-hidden
      >
        <Image
          src="/light-ray-.svg"
          alt=""
          fill
          className="object-contain object-top"
        />
      </div>

      {/* ── Decorative bg-coin (poker chip) ── */}
      {/*<div*/}
      {/*  className="pointer-events-none absolute right-[4%] top-[38%] z-10 w-[320px] sm:w-[420px] md:w-[520px] lg:w-[603px] opacity-90"*/}
      {/*  aria-hidden*/}
      {/*>*/}
      {/*  <Image*/}
      {/*    src="/bg-coin.svg"*/}
      {/*    alt=""*/}
      {/*    width={603}*/}
      {/*    height={494}*/}
      {/*    className="h-auto w-full"*/}
      {/*  />*/}
      {/*</div>*/}

      {/* ── Sections ── */}
      <TwoSides />
      <Network />
    </div>
  );
}
