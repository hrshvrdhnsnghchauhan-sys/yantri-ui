"use client";

import { motion } from "framer-motion";
import { VoiceOrb } from "./VoiceOrb";
import { ArrowRight, Sparkles } from "lucide-react";
import { useVoicePanel } from "@/hooks/useVoiceContext";

export function HeroSection() {
  const { openPanel } = useVoicePanel();
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100/80 border border-zinc-200/80 text-xs font-medium text-zinc-600 mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-500" />
          <span>Introducing OmniAI Next-Gen</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-zinc-900 leading-[1.05] max-w-4xl"
        >
          Your voice.<br />
          <span className="text-zinc-400">Your computer.</span><br />
          <span className="text-gradient">One AI.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-8 text-lg md:text-xl text-zinc-500 max-w-2xl font-light leading-relaxed"
        >
          Talk to your computer in natural language. Understand what is on your screen, control your apps, and get work done without clicking through endless menus.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button onClick={openPanel} className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(0,0,0,0.1)] group">
            Try Voice AI
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-full font-medium hover:bg-zinc-50 transition-all hover:scale-105 active:scale-95 flex items-center justify-center shadow-sm">
            See how it works
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 text-sm text-zinc-400 font-medium"
        >
          Works across your favorite apps
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="mt-20 relative w-full max-w-5xl mx-auto"
        >
          {/* Mockup Container */}
          <div className="relative rounded-2xl md:rounded-[2rem] border border-zinc-200/80 bg-white shadow-2xl overflow-hidden aspect-video group">
            {/* Window Controls */}
            <div className="absolute top-0 left-0 right-0 h-12 border-b border-zinc-100 bg-white/80 backdrop-blur-sm flex items-center px-4 gap-2 z-20">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>

            {/* Mockup Content */}
            <div className="absolute inset-0 bg-zinc-50 pt-12 p-6 flex gap-6">
              {/* Sidebar */}
              <div className="w-1/4 h-full bg-white rounded-xl border border-zinc-100 shadow-sm p-4 hidden md:block opacity-50">
                <div className="w-full h-8 bg-zinc-100 rounded-md mb-4" />
                <div className="w-3/4 h-4 bg-zinc-100 rounded mb-2" />
                <div className="w-1/2 h-4 bg-zinc-100 rounded mb-8" />
                <div className="w-full h-12 bg-zinc-50 rounded-lg mb-2" />
                <div className="w-full h-12 bg-zinc-50 rounded-lg mb-2" />
              </div>
              
              {/* Main Area */}
              <div className="flex-1 h-full bg-white rounded-xl border border-zinc-100 shadow-sm p-6 relative overflow-hidden">
                <div className="w-1/3 h-8 bg-zinc-100 rounded-md mb-8" />
                <div className="space-y-4">
                  <div className="w-full h-24 bg-zinc-50 rounded-lg border border-zinc-100" />
                  <div className="w-full h-24 bg-zinc-50 rounded-lg border border-zinc-100" />
                  <div className="w-3/4 h-24 bg-zinc-50 rounded-lg border border-zinc-100" />
                </div>

                {/* Floating AI Panel */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 glass-card p-2 pr-6 rounded-full flex items-center gap-4 w-max shadow-xl cursor-pointer"
                  onClick={openPanel}
                >
                  <VoiceOrb className="scale-75 origin-left w-12 h-12 pointer-events-none" />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-zinc-900">Find the latest project...</span>
                    <span className="text-xs text-blue-500 font-medium">Adding Priya to email...</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
