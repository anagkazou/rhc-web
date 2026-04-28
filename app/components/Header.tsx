"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import OpenVipModalButton from "./OpenVipModalButton";
import OpenPartnerModalButton from "./OpenPartnerModalButton";

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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled ? "bg-page" : "bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex h-[72px] min-[1200px]:h-[88px] max-w-[1440px] items-center justify-between gap-3 px-[clamp(1rem,5vw,6rem)]">
        <nav className="hidden min-[1200px]:flex items-center gap-[15px]">
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
          className="min-[1200px]:absolute min-[1200px]:left-1/2 min-[1200px]:top-1/2 min-[1200px]:-translate-x-1/2 min-[1200px]:-translate-y-1/2 flex items-center shrink-0"
          aria-label="Roll High Club"
        >
          <Image
            src="/figma/logo.svg"
            alt="Roll High Club"
            width={180}
            height={36}
            className="h-8 w-auto min-[1200px]:h-9"
            priority
          />
        </a>

        <div className="flex items-center gap-2 sm:gap-3 min-[1200px]:gap-[19px]">
          <OpenVipModalButton
            className="btn-chamfer btn-chamfer-vip hidden sm:flex h-10 items-center justify-center whitespace-nowrap rounded-none px-4 min-[1200px]:px-6 font-display text-[14px] min-[1200px]:text-[16px] uppercase tracking-[-0.04em] leading-[0.9] text-[#cacaca]"
          >
            Become a VIP
          </OpenVipModalButton>
          <OpenPartnerModalButton
            className="btn-chamfer flex h-10 items-center justify-center whitespace-nowrap rounded-none px-4 min-[1200px]:px-6 font-display text-[14px] min-[1200px]:text-[16px] uppercase tracking-[-0.04em] leading-[0.9] text-[#ececec]"
          >
            Partner with Us
          </OpenPartnerModalButton>
        </div>
      </div>
    </header>
  );
}
