import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const cards = [
  {
    n: "01",
    title: "VIP Strategy",
    body: "Segmentation, retention, and program design for high-value players.",
  },
  {
    n: "02",
    title: "Product Advisory",
    body: "Reviews and recommendations for VIP-facing products, informed by real player behavior.",
  },
  {
    n: "03",
    title: "Crisis Consulting",
    body: "Discreet support in sensitive situations between player, platform, and brand.",
  },
];

export default function Advisory() {
  return (
    <section className="section-shell bg-page py-16 sm:py-20 md:py-28">
      <div className="starfield" />

      <div className="section-inner mx-auto flex max-w-[1440px] flex-col items-center gap-8 sm:gap-12 px-4 sm:px-6 md:px-12 lg:px-24">
        <Reveal>
          <SectionHeading
            eyebrow="Advisory & Strategy"
            subtitle="For partners who want deeper insight into the VIP segment."
            maxWidth="600px"
          >
            <span className="text-white">More Than Access. </span>
            <span className="italic gold-italic-text">Insight.</span>
          </SectionHeading>
        </Reveal>

        <div className="grid w-full gap-4 md:grid-cols-3">
          {cards.map((card, idx) => (
            <Reveal key={card.n} delay={100 + idx * 120} className="h-full">
            <article
              className="btn-chamfer card-glow flex min-h-[340px] md:h-[404px] flex-col gap-10 sm:gap-14 p-6"
            >
              <span className="inline-flex size-8 items-center justify-center rounded-[8px] bg-pill text-[13px] font-medium text-text-warm tracking-[-0.03em]">
                {card.n}
              </span>
              <div className="flex flex-1 flex-col justify-between gap-6">
                <div className="flex flex-col gap-4 pb-6">
                  <h3 className="font-display text-[32px] sm:text-[36px] md:text-[40px] italic leading-[0.9] tracking-[-0.04em] text-white">
                    {card.title}
                  </h3>
                  <p className="text-[15px] sm:text-[16px] leading-6 text-body tracking-[-0.04em]">
                    {card.body}
                  </p>
                </div>
                <button
                  type="button"
                  className="btn-chamfer inline-flex h-12 w-full items-center justify-center whitespace-nowrap px-8 text-[15px] uppercase tracking-[-0.03em] text-text-warm"
                >
                  Learn More
                </button>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
