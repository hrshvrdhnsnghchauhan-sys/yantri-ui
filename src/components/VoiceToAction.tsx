"use client";

import { motion } from "framer-motion";
import { Mic, Brain, Network, Play, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

const steps = [
  { icon: Mic, label: "Speak", detail: '"Schedule a meeting with Rahul"' },
  { icon: Brain, label: "Understand", detail: "Intent: Create Calendar Event" },
  { icon: Network, label: "Plan", detail: "Check availability, open Google Calendar" },
  { icon: Play, label: "Execute", detail: "Event prepared for 4 PM" },
  { icon: CheckCircle2, label: "Confirm", detail: "Meeting Scheduled" },
];

export function VoiceToAction() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-zinc-50 border-y border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-20">
          Voice → Action
        </h2>

        <div className="relative flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto gap-8 md:gap-0">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-zinc-200 hidden md:block -translate-y-1/2 z-0" />
          
          <motion.div 
            className="absolute top-1/2 left-0 h-[2px] bg-blue-500 hidden md:block -translate-y-1/2 z-0"
            initial={{ width: "0%" }}
            animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />

          {steps.map((step, idx) => {
            const isActive = idx === activeStep;
            const isPast = idx < activeStep;
            
            return (
              <div key={idx} className="relative z-10 flex flex-col items-center w-full md:w-48 group">
                <motion.div
                  animate={{
                    scale: isActive ? 1.1 : 1,
                    backgroundColor: isActive ? "#fff" : isPast ? "#f8fafc" : "#fff",
                    borderColor: isActive ? "#3b82f6" : isPast ? "#93c5fd" : "#e4e4e7"
                  }}
                  className="w-16 h-16 rounded-2xl border-2 flex items-center justify-center shadow-sm mb-6 transition-colors"
                >
                  <step.icon className={`w-8 h-8 ${isActive ? 'text-blue-500' : isPast ? 'text-blue-300' : 'text-zinc-300'}`} />
                </motion.div>
                
                <div className="text-lg font-medium text-zinc-900 mb-2">{step.label}</div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isActive || isPast ? 1 : 0, y: isActive || isPast ? 0 : 10 }}
                  className={`text-sm ${isActive ? 'text-blue-600 font-medium' : 'text-zinc-500'} max-w-[140px] text-center`}
                >
                  {step.detail}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
