"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import OpenVipModalButton from "./OpenVipModalButton";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled ? "bg-page" : "bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex h-[72px] min-[920px]:h-[88px] max-w-[1440px] items-center justify-between gap-3 px-[clamp(1rem,5vw,6rem)]">
        <nav className="hidden min-[920px]:flex items-center gap-[15px]">
          <a
            href="#players"
            className="inline-flex h-10 items-center px-2 font-sans text-[15px] uppercase text-gold-nav leading-[0.9] transition-colors hover:text-white"
          >
            For Players
          </a>
          <a
            href="#partners"
            className="inline-flex h-10 items-center px-2 font-sans text-[15px] uppercase text-gold-nav leading-[0.9] transition-colors hover:text-white"
          >
            For Partners
          </a>
        </nav>

        <a
          href="#"
          className="min-[920px]:absolute min-[920px]:left-1/2 min-[920px]:top-1/2 min-[920px]:-translate-x-1/2 min-[920px]:-translate-y-1/2 flex items-center shrink-0"
          aria-label="Roll High Club"
        >
          <Image
            src="/figma/logo.svg"
            alt="Roll High Club"
            width={180}
            height={36}
            className="h-8 w-auto min-[920px]:h-9"
            priority
          />
        </a>

        <div className="flex items-center gap-2 sm:gap-3 min-[920px]:gap-[19px]">
          <OpenVipModalButton
            className="btn-chamfer btn-chamfer-vip hidden sm:flex h-10 items-center justify-center whitespace-nowrap px-4 min-[920px]:px-6 font-display text-[14px] min-[920px]:text-[16px] uppercase tracking-[-0.04em] leading-[0.9] text-[#cacaca]"
          >
            Become a VIP
          </OpenVipModalButton>
          <a
            href="#contact"
            className="btn-chamfer flex h-10 items-center justify-center whitespace-nowrap px-4 min-[920px]:px-6 font-display text-[14px] min-[920px]:text-[16px] uppercase tracking-[-0.04em] leading-[0.9] text-[#ececec]"
          >
            Partner with Us
          </a>
        </div>
      </div>
    </header>
  );
}
