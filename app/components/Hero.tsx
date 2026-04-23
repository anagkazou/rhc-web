import Image from "next/image";
import OpenVipModalButton from "./OpenVipModalButton";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[640px] sm:min-h-[760px] md:min-h-[900px] bg-page">
      <div className="starfield" />

      <div
        className="pointer-events-none absolute inset-0 animate-hero-bg"
        aria-hidden
      >
        <Image
          src="/hero-bg.svg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-top"
          priority
        />
      </div>

      <div
        // className="pointer-events-none absolute left-1/2 -top-[88px] bottom-0 w-[1265px] -translate-x-1/2 animate-hero-lightray"
        aria-hidden
      >
        {/*<Image*/}
        {/*  src="/light-ray.svg"*/}
        {/*  alt=""*/}
        {/*  fill*/}
        {/*  sizes="1265px"*/}
        {/*  className="object-cover object-top"*/}
        {/*  priority*/}
        {/*/>*/}
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[260px] sm:h-[340px] md:h-[420px] animate-hero-deck"
        aria-hidden
      >
        <Image
          src="/hero-deck-items.svg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom grayscale"
        />
      </div>

      <div className="section-inner relative mx-auto flex min-h-[640px] sm:min-h-[760px] md:min-h-[900px] max-w-[1440px] flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 pt-20 sm:pt-24 md:pt-28 pb-32 sm:pb-40 md:pb-48">
        <div className="mx-auto max-w-[780px] text-center">
          <h1 className="font-display text-[44px] sm:text-[64px] md:text-[88px] leading-[0.95] tracking-[-0.03em] text-white animate-hero-heading">
            <span className="block">The Best Deals.</span>
            <span className="block italic gold-italic-text">Anywhere</span>
          </h1>
          <p className="mx-auto mt-6 sm:mt-8 max-w-[560px] text-[14px] sm:text-[16px] leading-6 sm:leading-7 text-body animate-hero-subtitle">
            A Private Network Connecting VIP Players With Unbeatable Offers
            Across Platforms And Affiliates. Quiet, Disciplined, And Built On
            Trust.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 animate-hero-cta">
            <OpenVipModalButton
              className="gold-cta inline-flex h-12 items-center justify-center whitespace-nowrap rounded-[8px] px-8 font-sans text-[16px] font-medium uppercase tracking-[-0.04em] transition-transform hover:-translate-y-px"
            >
              Become a VIP
            </OpenVipModalButton>
            <a
              href="#contact"
              className="btn-chamfer inline-flex h-12 items-center justify-center whitespace-nowrap px-8 font-sans text-[15px] uppercase tracking-[-0.03em] text-text-light"
            >
              Partner with us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
