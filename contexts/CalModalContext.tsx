"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import CalModal from "@/components/ui/CalModal";

const CalModalContext = createContext<{ open: () => void }>({ open: () => {} });

export function CalModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CalModalContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <CalModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </CalModalContext.Provider>
  );
}

export const useCalModal = () => useContext(CalModalContext);
