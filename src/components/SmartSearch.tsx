"use client";

import { motion, useInView } from "framer-motion";
import { Search, File, HardDrive, Mail, Layout, Folder } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const results = [
  { icon: File, name: "Tax_Returns_2025.pdf", source: "Mac Downloads", time: "10mb" },
  { icon: HardDrive, name: "Q4_Tax_Estimates.xlsx", source: "Google Drive", time: "Shared by Accountant" },
  { icon: Mail, name: "Re: Your 2025 Tax Documents", source: "Gmail", time: "Feb 14" },
];

export function SmartSearch() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setStep(1), 1000); // Searching
      setTimeout(() => setStep(2), 2500); // Found
    }
  }, [isInView]);

  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        
        <div ref={ref} className="bg-white rounded-[2rem] border border-zinc-200 shadow-sm p-8 min-h-[400px] flex flex-col">
          <div className="flex items-center gap-4 mb-8 bg-zinc-50 p-4 rounded-xl border border-zinc-100">
            <div className="w-10 h-10 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center shrink-0">
              <Search className="w-5 h-5" />
            </div>
            <div className="font-medium text-lg text-zinc-800">
              "Find last year's tax documents."
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            {step === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center text-zinc-400">
                <div className="w-6 h-6 border-2 border-zinc-300 border-t-zinc-600 rounded-full animate-spin mb-4" />
                <span className="text-sm font-medium">Preparing search...</span>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center gap-4">
                {[HardDrive, Mail, Layout, Folder].map((Icon, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, delay: i * 0.1, duration: 0.8 }}
                    className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-400"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                ))}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="text-sm font-medium text-blue-600 mb-4">3 matching files found</div>
                <div className="space-y-3">
                  {results.map((res, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-zinc-50 border border-transparent hover:border-zinc-200 transition-colors cursor-pointer"
                    >
                      <div className="w-10 h-10 bg-zinc-100 text-zinc-600 rounded-lg flex items-center justify-center shrink-0">
                        <res.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm text-zinc-900 truncate">{res.name}</div>
                        <div className="text-xs text-zinc-500">{res.source}</div>
                      </div>
                      <div className="text-xs text-zinc-400">{res.time}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-6">
            Stop searching.<br />Start asking.
          </h2>
          <p className="text-lg text-zinc-500 font-light leading-relaxed">
            OmniAI integrates across your entire operating system and cloud applications. It searches Mac, Drive, Notion, and Gmail simultaneously to find exactly what you need.
          </p>
        </div>

      </div>
    </section>
  );
}
