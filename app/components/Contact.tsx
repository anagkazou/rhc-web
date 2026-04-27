import Image from "next/image";
import Reveal from "./Reveal";

type Row = { icon: string; label: string; value: string; href: string };

function EnquiryCard({
  title,
  rows,
}: {
  title: string;
  rows: Row[];
}) {
  return (
    <div className="flex btn-chamfer min-h-[260px] sm:min-h-[301px] flex-1 flex-col justify-between gap-6 rounded-[16px] bg-card-deep px-5 pb-6 pt-7 sm:px-6 sm:pt-8">
      <h3 className="text-[18px] sm:text-[20px] font-medium uppercase leading-none tracking-[-0.04em] text-text-light">
        {title}
      </h3>
      <div className="flex flex-col gap-2 sm:gap-4">
        {rows.map((row, idx) => (
          <div
            key={row.label}
            className={`flex flex-wrap items-center justify-between gap-2 py-3 sm:py-4 ${
              idx === 0 ? "border-b border-accent" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-full bg-card">
                <Image
                  src={row.icon}
                  alt=""
                  width={16}
                  height={16}
                  className="opacity-90"
                />
              </span>
              <span className="text-[13px] sm:text-[14px] uppercase tracking-[-0.02em] text-body leading-6">
                {row.label}
              </span>
            </div>
            <a
              href={row.href}
              className="text-[13px] sm:text-[14px] leading-6 tracking-[-0.02em] text-text-light underline underline-offset-2 transition-colors hover:text-white break-all"
            >
              {row.value}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section-shell bg-page py-12 sm:py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        aria-hidden
      >
        <Image
          src="/figma/polygon1.svg"
          alt=""
          fill
          sizes="1200px"
          className="object-cover"
        />
      </div>

      <div className="section-inner mx-auto max-w-[1440px] px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="mx-auto flex w-full max-w-[960px] flex-col items-center gap-10 sm:gap-12 md:gap-16 rounded-[20px] sm:rounded-[24px] bg-card px-4 pb-5 pt-8 sm:px-6 sm:pb-6 sm:pt-10 md:px-12">
          <Reveal>
            <div className="flex max-w-[540px] flex-col items-center gap-3 sm:gap-4 text-center">
              <h2 className="font-display text-[36px] sm:text-[44px] md:text-[56px] italic leading-[0.9] tracking-[-0.04em] gold-italic-text">
                Access The Network
              </h2>
              <p className="max-w-[420px] text-[15px] sm:text-[17px] md:text-[18px] leading-6 sm:leading-7 tracking-[-0.02em] text-body">
                For quick communication, reach us directly on Telegram. We reply
                24/7.
              </p>
            </div>
          </Reveal>

          <div className="flex w-full flex-col gap-4 md:flex-row">
            <Reveal delay={120} className="flex flex-1">
              <EnquiryCard
                title="Player Enquiries"
                rows={[
                  {
                    icon: "/figma/telegram.svg",
                    label: "Telegram",
                    value: "@RollHighClub",
                    href: "https://t.me/RollHighClub",
                  },
                  {
                    icon: "/figma/mail.svg",
                    label: "Email",
                    value: "vip@rollhighclub.com",
                    href: "mailto:vip@rollhighclub.com",
                  },
                ]}
              />
            </Reveal>
            <Reveal delay={240} className="flex flex-1">
              <EnquiryCard
                title="Partnership Enquiries"
                rows={[
                  {
                    icon: "/figma/telegram.svg",
                    label: "Telegram",
                    value: "@RHCpartners",
                    href: "https://t.me/RHCpartners",
                  },
                  {
                    icon: "/figma/mail.svg",
                    label: "Email",
                    value: "partners@rollhighclub.com",
                    href: "mailto:partners@rollhighclub.com",
                  },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
