"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MicOff, Square } from "lucide-react";
import { useVoice } from "@/hooks/useVoice";
import { useAudioVisualizer } from "@/hooks/useAudioVisualizer";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export function VoicePanel({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { state, transcript, response, startListening, stopListening } = useVoice();
  const audioData = useAudioVisualizer(state === "LISTENING");

  useEffect(() => {
    if (isOpen) {
      startListening();
    } else {
      stopListening();
    }
  }, [isOpen, startListening, stopListening]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md bg-white/80 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-[2rem] overflow-hidden"
        >
          <div className="p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-500 hover:bg-zinc-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col items-center justify-center mt-4">
              {/* Orb */}
              <div className="relative w-32 h-32 flex items-center justify-center mb-8">
                {/* Glow */}
                <motion.div
                  animate={{
                    scale: state === "LISTENING" ? [1, 1.2, 1] : state === "PROCESSING" ? 1.1 : 1,
                    opacity: state === "LISTENING" ? [0.5, 0.8, 0.5] : 0.5
                  }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full"
                />

                {/* Core Orb */}
                <motion.div
                  animate={{
                    scale: state === "PROCESSING" ? [0.95, 1.05, 0.95] : 1,
                    rotate: state === "PROCESSING" ? 360 : 0
                  }}
                  transition={{ repeat: Infinity, duration: state === "PROCESSING" ? 2 : 4, ease: "linear" }}
                  className={cn(
                    "relative w-24 h-24 rounded-full flex items-center justify-center shadow-inner overflow-hidden",
                    state === "LISTENING" ? "bg-gradient-to-br from-blue-400 to-indigo-600" :
                    state === "PROCESSING" ? "bg-gradient-to-br from-purple-400 to-blue-600" :
                    state === "SPEAKING" ? "bg-gradient-to-br from-emerald-400 to-teal-600" :
                    "bg-zinc-100 border border-zinc-200"
                  )}
                >
                  {state === "LISTENING" && audioData && (
                    <div className="flex items-center justify-center gap-1">
                      {Array.from(audioData.slice(0, 5)).map((val, i) => (
                        <motion.div
                          key={i}
                          animate={{ height: Math.max(4, (val / 255) * 40) }}
                          className="w-1.5 bg-white/80 rounded-full"
                        />
                      ))}
                    </div>
                  )}
                  {state === "PROCESSING" && (
                    <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  )}
                  {state === "ERROR" && (
                    <MicOff className="w-8 h-8 text-red-500" />
                  )}
                </motion.div>
              </div>

              {/* Status & Text */}
              <div className="text-center w-full min-h-[60px]">
                <div className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-2">
                  {state}
                </div>
                {transcript && state === "LISTENING" && (
                  <div className="text-lg font-medium text-zinc-900 truncate px-4">
                    "{transcript}"
                  </div>
                )}
                {response && state === "SPEAKING" && (
                  <div className="text-sm font-medium text-blue-600 line-clamp-2 px-4">
                    {response}
                  </div>
                )}
                {state === "IDLE" && (
                  <div className="text-sm text-zinc-500">
                    Ready to help
                  </div>
                )}
              </div>
              
              {/* Action */}
              <div className="mt-8">
                {state === "LISTENING" || state === "PROCESSING" || state === "SPEAKING" ? (
                  <button
                    onClick={stopListening}
                    className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors"
                  >
                    <Square className="w-5 h-5 fill-current" />
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
