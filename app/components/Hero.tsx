"use client";

import { useEffect, useRef } from "react";
import OpenVipModalButton from "./OpenVipModalButton";
import OpenPartnerModalButton from "./OpenPartnerModalButton";

const SPEED = {
  bg: 0.18,
  content: -0.15,
};

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let target = window.scrollY;
    let eased = window.scrollY;
    let raf: number | null = null;
    let running = false;

    const EASE = 0.09;
    const EPSILON = 0.05;

    const apply = (y: number) => {
      if (bgRef.current) {
        bgRef.current.style.translate = `0 ${y * SPEED.bg}px`;
      }
      if (contentRef.current) {
        contentRef.current.style.translate = `0 ${y * SPEED.content}px`;
        contentRef.current.style.opacity = String(Math.max(0, 1 - y / 600));
      }
    };

    const tick = () => {
      const delta = target - eased;
      if (Math.abs(delta) < EPSILON) {
        eased = target;
        apply(eased);
        running = false;
        raf = null;
        return;
      }
      eased += delta * EASE;
      apply(eased);
      raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      target = window.scrollY;
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    apply(eased);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
      running = false;
    };
  }, []);

  return (
    <section className="relative min-h-[700px] sm:min-h-[800px] md:min-h-[100vh] bg-page">
      {/* Background with clipping */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          ref={bgRef}
          className="absolute inset-0 bg-[url('/hero-casino.png')] bg-cover bg-center bg-no-repeat"
          style={{ scale: "1.1", willChange: "translate" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-page/20 via-transparent to-page" />
      </div>

      {/* Grouped floating composition (cards / chips / left dice / right coin) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-items.png"
        alt=""
        aria-hidden
        className="pointer-events-none grayscale absolute inset-x-0 bottom-0 z-20 w-full h-auto coin-float"
      />

      {/* The overlapping right dice — kept separate, layered above */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-right-dice.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute grayscale right-0 -bottom-[6%] z-30 w-[14vw] h-auto coin-float md:hidden lg:block"
        style={{ animationDelay: "2.5s" }}
      />

      <div
        ref={contentRef}
        className="section-inner relative mx-auto flex min-h-175 sm:min-h-200 md:min-h-240 max-w-360 flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 pt-20 sm:pt-24 md:pt-28 pb-32 sm:pb-40 md:pb-48"
        style={{ willChange: "translate, opacity" }}
      >
        <div className="mx-auto max-w-210 text-center">
          <h1 className="font-display text-[48px] sm:text-[72px] md:text-[96px] lg:text-[112px] leading-[0.9] tracking-[-0.04em] text-white animate-hero-heading">
            <span className="block">The Best Deals.</span>
            <span className="block italic gold-italic-text">Anywhere</span>
          </h1>
          <p className="mx-auto mt-6 sm:mt-8 max-w-150 text-[15px] sm:text-[18px] leading-7 sm:leading-8 text-body animate-hero-subtitle">
            A Private Network Connecting VIP Players With Unbeatable Offers
            Across Platforms And Affiliates. Quiet, Disciplined, And Built On
            Trust.
          </p>

          <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 animate-hero-cta">
            <OpenVipModalButton
              className="gold-cta inline-flex h-14 items-center justify-center whitespace-nowrap rounded-[10px] px-10 font-sans text-[16px] font-semibold uppercase tracking-[-0.02em] transition-transform hover:-translate-y-px active:translate-y-0"
            >
              Become a VIP
            </OpenVipModalButton>
            <OpenPartnerModalButton
              className="btn-chamfer inline-flex h-14 items-center justify-center whitespace-nowrap px-10 font-sans text-[15px] font-medium uppercase tracking-[-0.02em] text-text-light hover:text-white"
            >
              Partner with us
            </OpenPartnerModalButton>
          </div>
        </div>
      </div>
    </section>
  );
}
