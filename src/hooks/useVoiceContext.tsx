"use client";

import React, { createContext, useContext, useState } from "react";
import { VoicePanel } from "@/components/VoicePanel";

interface VoiceContextType {
  isPanelOpen: boolean;
  openPanel: () => void;
  closePanel: () => void;
}

const VoiceContext = createContext<VoiceContextType | undefined>(undefined);

export function VoiceProvider({ children }: { children: React.ReactNode }) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const openPanel = () => setIsPanelOpen(true);
  const closePanel = () => setIsPanelOpen(false);

  return (
    <VoiceContext.Provider value={{ isPanelOpen, openPanel, closePanel }}>
      {children}
      <VoicePanel isOpen={isPanelOpen} onClose={closePanel} />
    </VoiceContext.Provider>
  );
}

export function useVoicePanel() {
  const context = useContext(VoiceContext);
  if (!context) throw new Error("useVoicePanel must be used within VoiceProvider");
  return context;
}
