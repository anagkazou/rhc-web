import Image from "next/image";
import SectionHeading from "./SectionHeading";

function NodeLabel({ label }: { label: string }) {
  return (
    <div
      className="btn-chamfer flex min-h-[80px] flex-col items-center justify-center px-6 py-6 md:min-h-[120px] md:px-12 md:py-16"
      style={
        {
          "--btn-bg": "#07181d",
          borderRadius: 12,
        } as React.CSSProperties
      }
    >
      <p className="font-display text-[24px] sm:text-[28px] md:text-[32px] leading-[0.9] tracking-[-0.04em] text-body">
        {label}
      </p>
    </div>
  );
}

export default function Network() {
  return (
    <section className="section-shell bg-page pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-28">

      <div className="section-inner mx-auto flex max-w-[1440px] flex-col items-center gap-8 sm:gap-12 px-4 sm:px-6 md:px-12 lg:px-24">
        <SectionHeading
          eyebrow="Network"
          subtitle="A trusted connection between VIP players and the platforms that serve them."
          maxWidth="735px"
        >
          <span className="block text-[#f5f5f5]">Connecting Players</span>
          <span className="block italic gold-italic-text">And Platforms</span>
        </SectionHeading>

        <div className="relative w-full">
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            viewBox="0 0 1000 400"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="connector" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#2c5f6a" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#2c5f6a" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#2c5f6a" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M 120 170 Q 340 170 500 170"
              fill="none"
              stroke="url(#connector)"
              strokeWidth="1"
            />
            <path
              d="M 880 170 Q 660 170 500 170"
              fill="none"
              stroke="url(#connector)"
              strokeWidth="1"
            />
            <path
              d="M 500 230 Q 500 320 500 340"
              fill="none"
              stroke="url(#connector)"
              strokeWidth="1"
            />
          </svg>

          <div className="relative grid grid-cols-1 items-center gap-4 md:grid-cols-3">
            <NodeLabel label="Casinos" />

            <div
              className="btn-chamfer mx-auto flex w-full max-w-[320px] flex-col items-center gap-6 p-1 pb-6 md:max-w-none md:pb-8"
              style={
                {
                  "--btn-bg": "#0d323a",
                  borderRadius: 20,
                } as React.CSSProperties
              }
            >
              <div className="relative flex h-[120px] w-full items-center justify-center overflow-hidden rounded-[16px] bg-page md:h-[140px]">
                <Image
                  src="/figma/center-coins.png"
                  alt="Stacks of chips and coins"
                  width={220}
                  height={140}
                  className="object-contain"
                />
              </div>
              <p className="gold-heading-text text-center font-display text-[28px] sm:text-[32px] md:text-[40px] leading-[0.9] tracking-[-0.04em]">
                Roll High Club
              </p>
            </div>

            <NodeLabel label="Affiliates" />
          </div>

          <div className="relative mt-4 flex justify-center">
            <NodeLabel label="VIP Players" />
          </div>
        </div>
      </div>
    </section>
  );
}
