import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  children: ReactNode;
  subtitle: string;
  maxWidth?: string;
};

export default function SectionHeading({
  eyebrow,
  children,
  subtitle,
  maxWidth = "534px",
}: Props) {
  return (
    <div className="flex flex-col items-center gap-5">
      <span
        className="btn-chamfer inline-flex items-center justify-center px-4 py-2 text-[13px] font-medium uppercase tracking-[-0.03em] text-text-muted"
        style={{ borderRadius: 8 }}
      >
        {eyebrow}
      </span>
      <h2
        className="text-center font-display text-[36px] sm:text-[48px] md:text-[64px] leading-[0.95] tracking-[-0.04em]"
        style={{ maxWidth }}
      >
        {children}
      </h2>
      <p className="max-w-[420px] px-2 text-center text-[15px] sm:text-[17px] leading-6 sm:leading-7 text-body tracking-[-0.02em]">
        {subtitle}
      </p>
    </div>
  );
}
