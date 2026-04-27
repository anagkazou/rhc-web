import SectionHeading from "./SectionHeading";
import OpenVipModalButton from "./OpenVipModalButton";
import OpenPartnerModalButton from "./OpenPartnerModalButton";
import Reveal from "./Reveal";

const playerBullets = [
  "Better casino deals",
  "Extended VIP hosting & perks",
  "Guaranteed withdrawals",
];

const partnerBullets = [
  "High-value players",
  "Best offer distribution",
  "Trusted partnerships",
];

function Bullet({ children }: { children: string }) {
  return (
    <li className="flex items-center gap-[18px]">
      <span className="block size-3 shrink-0 rounded-full bg-gradient-to-b from-[#ffed50] to-[#b97e22]" />
      <span className="text-[16px] font-medium text-text-soft tracking-[-0.04em] leading-[0.925]">
        {children}
      </span>
    </li>
  );
}

export default function TwoSides() {
  return (
    <section className="relative bg-page pt-16 sm:pt-20 md:pt-28 pb-8 sm:pb-10 md:pb-12">
      <div className="section-inner !z-30  mx-auto flex max-w-[1440px] flex-col items-center gap-8 sm:gap-12 px-4 sm:px-6 md:px-12 lg:px-24">
        <Reveal>
          <SectionHeading
            eyebrow="Club"
            subtitle="Built for elite players and the platforms that serve them."
          >
            <span className="italic gold-italic-text">Two Sides.</span>{" "}
            <span className="text-white">One Standard.</span>
          </SectionHeading>
        </Reveal>

        <div className="grid z-30 w-full gap-4 lg:grid-cols-2">
          <Reveal delay={100} className="h-full">
            <article
              id="players"
              className="grid card-glow h-full min-h-[420px] sm:min-h-[520px] grid-rows-[auto_auto_1fr_auto] gap-y-6 rounded-[12px] bg-card px-6 py-10 sm:px-10 sm:py-14 md:px-12 md:py-16"
            >
              <div className="flex flex-col gap-4 border-b border-divider pb-6">
                <h3 className="font-display text-[36px] sm:text-[44px] md:text-[56px] leading-[0.9] tracking-[-0.04em]">
                  <span className="italic gold-heading-text">For</span>
                  <span className="gold-heading-text"> Players</span>
                </h3>
                <p className="min-h-[48px] max-w-[380px] text-[15px] sm:text-[16px] leading-6 text-body tracking-[-0.04em]">
                  Curated access to the deepest offers in the market, personal
                  hosting, and withdrawals you can count on.
                </p>
              </div>
              <ul className="stagger-children flex flex-col gap-4">
                {playerBullets.map((b) => (
                  <Bullet key={b}>{b}</Bullet>
                ))}
              </ul>
              <div aria-hidden />
              <OpenVipModalButton
                className="gold-cta inline-flex h-12 w-full max-w-[212px] items-center justify-center whitespace-nowrap rounded-[8px] px-8 text-[16px] sm:text-[18px] font-medium uppercase tracking-[-0.04em]"
              >
                Become a VIP
              </OpenVipModalButton>
            </article>
          </Reveal>

          <Reveal delay={250} className="h-full">
            <article
              id="partners"
              className="grid card-glow h-full min-h-[420px] sm:min-h-[520px] grid-rows-[auto_auto_1fr_auto] gap-y-6 rounded-[12px] bg-card px-6 py-10 sm:px-10 sm:py-14 md:px-12 md:py-16"
            >
              <div className="flex flex-col gap-4 border-b border-divider pb-6">
                <h3 className="font-display text-[36px] sm:text-[44px] md:text-[56px] leading-[0.9] tracking-[-0.04em]">
                  <span className="italic gold-heading-text">For</span>
                  <span className="gold-heading-text"> Partners</span>
                </h3>
                <p className="min-h-[48px] max-w-[380px] text-[15px] sm:text-[16px] leading-6 text-body tracking-[-0.04em]">
                  Connect with vetted, high-value players and distribute your
                  best offers through a trusted network.
                </p>
              </div>
              <ul className="stagger-children flex flex-col gap-4">
                {partnerBullets.map((b) => (
                  <Bullet key={b}>{b}</Bullet>
                ))}
              </ul>
              <div aria-hidden />
              <OpenPartnerModalButton
                className="btn-chamfer inline-flex h-12 w-full max-w-[212px] items-center justify-center whitespace-nowrap px-8 text-[15px] uppercase tracking-[-0.03em] text-text-warm"
              >
                Become a Partner
              </OpenPartnerModalButton>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
