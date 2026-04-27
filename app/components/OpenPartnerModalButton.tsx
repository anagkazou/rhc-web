"use client";

import type { ReactNode } from "react";
import { usePartnerModal } from "./PartnerModalProvider";

type Props = {
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
};

export default function OpenPartnerModalButton({
  className,
  children,
  ariaLabel,
}: Props) {
  const { open } = usePartnerModal();
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
