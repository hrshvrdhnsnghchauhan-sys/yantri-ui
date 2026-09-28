"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic } from "lucide-react";
import { cn } from "@/lib/utils";

type OrbState = "idle" | "listening" | "processing" | "completed";

export function VoiceOrb({ className }: { className?: string }) {
  const [orbState, setOrbState] = useState<OrbState>("idle");

  const handleClick = () => {
    if (orbState === "idle") {
      setOrbState("listening");
      // Simulate interaction
      setTimeout(() => setOrbState("processing"), 2500);
      setTimeout(() => setOrbState("completed"), 4500);
      setTimeout(() => setOrbState("idle"), 6000);
    }
  };

  return (
    <div className={cn("relative flex items-center justify-center cursor-pointer", className)} onClick={handleClick}>
      {/* Outer Glow / Waveform */}
      <AnimatePresence>
        {orbState === "listening" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.5 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
            className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"
          />
        )}
        {orbState === "processing" && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute inset-0 rounded-full border-t-2 border-r-2 border-blue-500/50"
          />
        )}
      </AnimatePresence>

      {/* Main Orb */}
      <motion.div
        animate={
          orbState === "idle"
            ? { scale: [1, 1.05, 1], boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 20px rgba(0,0,0,0.05)", "0px 0px 0px rgba(0,0,0,0)"] }
            : orbState === "listening"
            ? { scale: 1.1, boxShadow: "0px 0px 30px rgba(59, 130, 246, 0.4)" }
            : orbState === "processing"
            ? { scale: 0.95 }
            : { scale: 1.2, boxShadow: "0px 0px 30px rgba(34, 197, 94, 0.4)" }
        }
        transition={
          orbState === "idle" ? { repeat: Infinity, duration: 4, ease: "easeInOut" } : { duration: 0.3 }
        }
        className={cn(
          "w-20 h-20 rounded-full flex items-center justify-center z-10 transition-colors duration-500",
          orbState === "idle" ? "bg-white border border-zinc-200 shadow-lg" :
          orbState === "listening" ? "bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200" :
          orbState === "processing" ? "bg-zinc-900 border border-zinc-800" :
          "bg-green-50 border border-green-200"
        )}
      >
        <AnimatePresence mode="wait">
          {orbState === "idle" && (
            <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Mic className="w-8 h-8 text-zinc-400" />
            </motion.div>
          )}
          {orbState === "listening" && (
            <motion.div key="listening" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ height: ["8px", "24px", "8px"] }}
                  transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                  className="w-1.5 bg-blue-500 rounded-full"
                />
              ))}
            </motion.div>
          )}
          {orbState === "processing" && (
            <motion.div key="processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            </motion.div>
          )}
          {orbState === "completed" && (
            <motion.svg key="completed" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
