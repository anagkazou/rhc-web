"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LightRay() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setOffset(window.scrollY);
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute left-1/2 top-0 h-[800px] w-[1200px] opacity-60 mix-blend-screen z-0 overflow-hidden"
      style={{
        transform: `translate3d(-50%, calc(-45% + ${offset * 0.3}px), 0)`,
        willChange: "transform",
      }}
    >
      <div className="animate-hero-lightray h-full w-full relative">
        <Image
          src="/light-ray.svg"
          fill
          alt=""
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
