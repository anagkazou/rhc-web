"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import PartnerModal from "./PartnerModal";

type Ctx = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const PartnerModalContext = createContext<Ctx | null>(null);

export function usePartnerModal() {
  const ctx = useContext(PartnerModalContext);
  if (!ctx) {
    throw new Error(
      "usePartnerModal must be used inside <PartnerModalProvider>"
    );
  }
  return ctx;
}

export default function PartnerModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  return (
    <PartnerModalContext.Provider value={{ isOpen, open, close }}>
      {children}
      <PartnerModal isOpen={isOpen} onClose={close} />
    </PartnerModalContext.Provider>
  );
}
