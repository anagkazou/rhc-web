"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import VipModal from "./VipModal";

type Ctx = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const VipModalContext = createContext<Ctx | null>(null);

export function useVipModal() {
  const ctx = useContext(VipModalContext);
  if (!ctx) {
    throw new Error("useVipModal must be used inside <VipModalProvider>");
  }
  return ctx;
}

export default function VipModalProvider({ children }: { children: ReactNode }) {
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
    <VipModalContext.Provider value={{ isOpen, open, close }}>
      {children}
      <VipModal isOpen={isOpen} onClose={close} />
    </VipModalContext.Provider>
  );
}
