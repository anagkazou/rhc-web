import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(44,95,106,0.18)] bg-page">
      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-6 px-4 py-6 sm:px-6 md:h-[88px] md:flex-row md:gap-0 md:px-12 md:py-0 lg:px-24">
        <p className="order-3 text-center text-[12px] uppercase tracking-[-0.02em] text-gold-nav md:order-1 md:text-left md:text-[13px]">
          © 2026 Roll High Club. All Rights Reserved.
        </p>

        <div className="order-1 md:order-2 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <Image
            src="/figma/logo.svg"
            alt="Roll High Club"
            width={180}
            height={36}
            className="h-8 w-auto md:h-9"
          />
        </div>

        <div
          className="btn-chamfer order-2 flex h-12 items-center gap-2 pl-4 pr-2 md:order-3"
          style={{ borderRadius: 9999 }}
        >
          <span className="text-[12px] uppercase tracking-[-0.02em] text-gold-nav md:text-[13px]">
            Join Us:
          </span>
          <div className="flex items-center gap-2">
            <a
              href="https://x.com/RollHighClub"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X — @RollHighClub"
              className="btn-gradient-ring flex size-10 items-center justify-center rounded-full"
            >
              <Image src="/figma/x-logo.svg" alt="" width={18} height={16} />
            </a>
            <a
              href="https://t.me/RollHighClubAnnouncements"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram Announcements"
              className="btn-gradient-ring flex size-10 items-center justify-center rounded-full"
            >
              <Image
                src="/figma/telegram.svg"
                alt=""
                width={20}
                height={16}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
