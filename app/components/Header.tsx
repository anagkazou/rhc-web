import Image from "next/image";
import OpenVipModalButton from "./OpenVipModalButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[rgba(5,24,29,0.72)] border-b border-[rgba(44,95,106,0.18)]">
      <div className="relative mx-auto flex h-[72px] md:h-[88px] max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-6 md:px-12 lg:px-24">
        <nav className="hidden md:flex items-center gap-[15px]">
          <a
            href="#players"
            className="px-2 py-2 text-[15px] uppercase text-gold-nav leading-none transition-colors hover:text-white"
          >
            For Players
          </a>
          <a
            href="#partners"
            className="px-2 py-2 text-[15px] uppercase text-gold-nav leading-none transition-colors hover:text-white"
          >
            For Partners
          </a>
        </nav>

        <a
          href="#"
          className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex items-center shrink-0"
          aria-label="Roll High Club"
        >
          <Image
            src="/figma/logo.svg"
            alt="Roll High Club"
            width={180}
            height={36}
            className="h-8 w-auto md:h-9"
            priority
          />
        </a>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-[19px]">
          <OpenVipModalButton
            className="hidden sm:flex h-10 items-center justify-center whitespace-nowrap rounded-[4px] px-4 md:px-6 font-display text-[14px] md:text-[16px] uppercase tracking-[-0.04em] text-[#cacaca] transition-colors hover:bg-[#0a2a31]/60"
          >
            Become a VIP
          </OpenVipModalButton>
          <a
            href="#contact"
            className="btn-chamfer flex h-10 items-center justify-center whitespace-nowrap px-4 md:px-6 font-display text-[14px] md:text-[16px] uppercase tracking-[-0.04em] text-[#ececec]"
          >
            Partner with us
          </a>
        </div>
      </div>
    </header>
  );
}
