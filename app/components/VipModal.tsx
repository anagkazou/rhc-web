"use client";

import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function VipModal({ isOpen, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="vip-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-8 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[560px] rounded-[20px] bg-card px-6 pb-6 pt-10 sm:rounded-[24px] sm:px-8 sm:pt-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2
            id="vip-modal-title"
            className="gold-italic-text font-display text-[44px] sm:text-[56px] md:text-[64px] italic leading-[0.9] tracking-[-0.04em]"
          >
            Players
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-pill text-text-soft transition-colors hover:bg-[#0e3a44]"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {submitted ? (
          <div className="mt-8 flex flex-col items-center gap-3 py-10 text-center">
            <p className="font-display text-[28px] italic gold-italic-text">
              Thank you.
            </p>
            <p className="max-w-[360px] text-[15px] leading-6 text-body">
              We&apos;ve received your details and will be in touch shortly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-4 sm:mt-10"
          >
            <input
              type="text"
              name="telegram"
              required
              placeholder="Telegram Username"
              className="h-16 w-full rounded-[12px] bg-card-deep px-4 text-[16px] font-medium tracking-[-0.04em] text-text-soft placeholder:text-[#b5b1ac] focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="h-16 w-full rounded-[12px] bg-card-deep px-4 text-[16px] font-medium tracking-[-0.04em] text-text-soft placeholder:text-[#b5b1ac] focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <input
              type="text"
              name="info"
              placeholder="Player information"
              className="h-16 w-full rounded-[12px] bg-card-deep px-4 text-[16px] font-medium tracking-[-0.04em] text-text-soft placeholder:text-[#b5b1ac] focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <button
              type="submit"
              className="gold-cta mt-4 inline-flex h-12 w-full items-center justify-center whitespace-nowrap rounded-[8px] px-8 text-[16px] sm:text-[18px] font-medium uppercase tracking-[-0.04em] transition-transform hover:-translate-y-px"
            >
              Become a VIP
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
