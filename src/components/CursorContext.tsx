"use client";

import { motion } from "framer-motion";
import { MousePointer2, FileText, Image as ImageIcon, MessageSquare, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const commands = [
  { icon: MessageSquare, text: "Reply to this." },
  { icon: Globe, text: "Find this person's LinkedIn." },
  { icon: FileText, text: "Summarize this." },
  { icon: ImageIcon, text: "Explain what I'm looking at." },
];

export function CursorContext() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % commands.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="features" className="py-24 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="max-w-lg">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-6">
              Your cursor is context.
            </h2>
            <p className="text-lg text-zinc-500 font-light leading-relaxed">
              Point at anything on your screen and tell the AI what you want. No screenshots. No long explanations.
            </p>
            
            <div className="mt-12 space-y-4">
              {commands.map((cmd, idx) => (
                <div 
                  key={idx}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-2xl transition-all duration-300",
                    activeIdx === idx ? "bg-white shadow-sm border border-zinc-200/50" : "opacity-50"
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center",
                    activeIdx === idx ? "bg-blue-50 text-blue-500" : "bg-zinc-100 text-zinc-400"
                  )}>
                    <cmd.icon className="w-5 h-5" />
                  </div>
                  <span className={cn(
                    "font-medium text-lg transition-colors",
                    activeIdx === idx ? "text-zinc-900" : "text-zinc-500"
                  )}>
                    "{cmd.text}"
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] bg-zinc-100 border border-zinc-200 overflow-hidden shadow-inner flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-grid-zinc-200/[0.2] bg-[size:20px_20px]" />
            
            {/* Interactive Mockup */}
            <motion.div 
              className="relative w-full max-w-sm glass-card p-6"
              initial={false}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="w-16 h-16 bg-zinc-100 rounded-xl mb-6 flex items-center justify-center">
                <FileText className="w-8 h-8 text-zinc-300" />
              </div>
              <div className="w-3/4 h-4 bg-zinc-200 rounded mb-3" />
              <div className="w-full h-4 bg-zinc-100 rounded mb-2" />
              <div className="w-5/6 h-4 bg-zinc-100 rounded mb-2" />
              <div className="w-4/6 h-4 bg-zinc-100 rounded" />
              
              <motion.div
                className="absolute top-1/2 left-1/2"
                animate={{
                  x: [50, -20, 20, 50],
                  y: [50, 10, -20, 50],
                }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
                <div className="relative">
                  <MousePointer2 className="w-8 h-8 text-black fill-white -rotate-12 drop-shadow-md" />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8] }}
                    transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                    className="absolute top-8 left-6 glass-card px-3 py-2 whitespace-nowrap text-xs font-medium text-blue-600 shadow-xl border-blue-100"
                  >
                    Processing context...
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
