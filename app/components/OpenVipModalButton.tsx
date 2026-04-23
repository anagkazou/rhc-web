"use client";

import type { ReactNode } from "react";
import { useVipModal } from "./VipModalProvider";

type Props = {
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
};

export default function OpenVipModalButton({
  className,
  children,
  ariaLabel,
}: Props) {
  const { open } = useVipModal();
  return (
    <button
      type="button"
      onClick={open}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
