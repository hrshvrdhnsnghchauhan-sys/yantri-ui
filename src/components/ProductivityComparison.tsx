"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Mail, Calendar, MessageSquare, FileText, Globe, Music, Video, Layout, FolderOpen, Hash, HardDrive, Smartphone, Server, Camera, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const FloatingIcons = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const icons = [
    { icon: Mail, color: "text-red-500", bg: "bg-red-50" },
    { icon: Calendar, color: "text-blue-500", bg: "bg-blue-50" },
    { icon: MessageSquare, color: "text-green-500", bg: "bg-green-50" },
    { icon: FileText, color: "text-blue-600", bg: "bg-blue-100" },
    { icon: Globe, color: "text-orange-500", bg: "bg-orange-50" },
    { icon: Music, color: "text-green-600", bg: "bg-green-100" },
    { icon: Video, color: "text-purple-500", bg: "bg-purple-50" },
    { icon: Layout, color: "text-blue-400", bg: "bg-blue-50" },
    { icon: FolderOpen, color: "text-yellow-500", bg: "bg-yellow-50" },
    { icon: Hash, color: "text-emerald-500", bg: "bg-emerald-50" },
    { icon: HardDrive, color: "text-zinc-500", bg: "bg-zinc-100" },
    { icon: Smartphone, color: "text-indigo-500", bg: "bg-indigo-50" },
    { icon: Server, color: "text-cyan-500", bg: "bg-cyan-50" },
    { icon: Camera, color: "text-pink-500", bg: "bg-pink-50" },
    { icon: PlayCircle, color: "text-rose-500", bg: "bg-rose-50" },
  ];

  // We will create a wave pattern using sine.
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 flex items-center h-full w-[200%] animate-[flow_20s_linear_infinite]">
        {[...icons, ...icons, ...icons].map((item, i) => {
          // Calculate a sine wave y offset
          const progress = i / (icons.length * 3);
          const yOffset = Math.sin(progress * Math.PI * 4) * 100;
          const rotation = Math.sin(progress * Math.PI * 8) * 20;

          return (
            <div
              key={i}
              className="absolute left-0 flex items-center justify-center"
              style={{
                left: `${progress * 100}%`,
                top: `calc(50% + ${yOffset}px)`,
                transform: `rotate(${rotation}deg)`,
              }}
            >
              <div className={cn("w-14 h-14 rounded-2xl shadow-sm border border-black/5 flex items-center justify-center bg-white")}>
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", item.bg)}>
                  <item.icon className={cn("w-6 h-6", item.color)} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        @keyframes flow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
};

export function ProductivityComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const metrics = [
    { label: "Typing", value: 1, desc: "", color: "bg-white border border-blue-100 shadow-[inset_0_-20px_40px_rgba(59,130,246,0.1)] text-zinc-400" },
    { label: "Dictation", value: 4, desc: "", color: "bg-gradient-to-b from-blue-50 to-blue-100 border border-blue-200 text-blue-400" },
    { label: "VoiceOS", value: 10, desc: "YOUR PRODUCTIVITY", color: "bg-gradient-to-b from-blue-500 to-blue-400 shadow-xl text-white", labelColor: "text-zinc-900", icon: true },
  ];

  return (
    <section className="py-32 bg-[#f0f7ff] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10 mb-32">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1a1f36] mb-4">
          Not just another<br />dictation app
        </h2>
        <p className="text-lg text-zinc-500 font-light max-w-xl mx-auto">
          Dictation only speeds up your typing. OmniAI multiplies your productivity.
        </p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto h-[450px]">
        {/* Floating Background Wave */}
        <FloatingIcons />

        {/* Bars */}
        <div ref={ref} className="absolute inset-0 grid grid-cols-3 gap-6 md:gap-12 px-12 md:px-32 items-end z-10 pb-12">
          {metrics.map((metric, i) => (
            <div key={metric.label} className="flex flex-col items-center justify-end h-full w-full relative">
              
              {/* Number counter on top */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: i * 0.2 + 1 }}
                className="mb-6 flex flex-col items-center justify-end h-20"
              >
                <div className={cn("text-3xl md:text-5xl font-bold mb-1", metric.labelColor || "text-[#1a1f36]")}>
                  {metric.value}x
                </div>
                {metric.desc && (
                  <div className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase whitespace-nowrap">
                    {metric.desc}
                  </div>
                )}
              </motion.div>

              {/* Bar */}
              <motion.div
                initial={{ height: 0 }}
                animate={isInView ? { height: `${metric.value * 8}%` } : { height: 0 }}
                transition={{ duration: 1.2, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className={cn("w-full max-w-[160px] rounded-t-[20px] relative flex items-center justify-center backdrop-blur-sm", metric.color)}
              >
                {metric.icon && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div className="w-16 h-16 opacity-30 mix-blend-overlay rounded-full blur-2xl bg-white" />
                    <div className="absolute flex gap-1 items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-sm -rotate-12" />
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
              
              <div className="mt-6 font-medium text-[#1a1f36] z-10">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Soft fade out at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f0f7ff] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
