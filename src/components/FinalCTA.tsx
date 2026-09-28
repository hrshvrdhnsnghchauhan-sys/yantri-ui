"use client";

import { motion } from "framer-motion";
import { VoiceOrb } from "./VoiceOrb";
import { ArrowRight } from "lucide-react";
import { useVoicePanel } from "@/hooks/useVoiceContext";

export function FinalCTA() {
  const { openPanel } = useVoicePanel();

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10 flex flex-col items-center">
        
        <div className="mb-12 cursor-pointer" onClick={openPanel}>
          <VoiceOrb className="scale-125 pointer-events-none" />
        </div>

        <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-900 mb-6">
          Stop clicking.<br />
          <span className="text-zinc-400">Start speaking.</span>
        </h2>
        
        <p className="text-xl text-zinc-500 font-light mb-12 max-w-2xl">
          Give your computer an interface that understands what you mean.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button onClick={openPanel} className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group shadow-xl">
            Try Voice AI
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-full font-medium hover:bg-zinc-50 transition-all hover:scale-105 active:scale-95 flex items-center justify-center">
            See how it works
          </button>
        </div>
      </div>
    </section>
  );
}
