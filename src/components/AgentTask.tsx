"use client";

import { motion } from "framer-motion";
import { Bell, Clock, CalendarDays } from "lucide-react";

export function AgentTask() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-6">
          An agent that keeps you on track.
        </h2>
        <p className="text-lg text-zinc-500 font-light max-w-2xl mx-auto mb-20">
          Say it once. The AI remembers the task and brings it back when it matters.
        </p>

        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-full max-w-md bg-zinc-50 border border-zinc-200 rounded-2xl p-6 text-left mb-8 shadow-sm">
            <div className="text-sm font-medium text-zinc-500 mb-2">You</div>
            <div className="text-lg text-zinc-900 font-medium">
              "Remind me to send the investor deck to Rahul tomorrow morning."
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: "auto" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-[2px] h-16 bg-gradient-to-b from-zinc-200 to-blue-200 mb-8"
          />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
            className="w-full max-w-md bg-white border border-blue-100 rounded-2xl p-4 text-left shadow-[0_8px_30px_rgb(59,130,246,0.12)] flex gap-4 items-start relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
            <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center shrink-0 mt-1">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <div className="font-medium text-zinc-900">Task Scheduled</div>
              <div className="text-sm text-zinc-500 mb-3">Send investor deck to Rahul</div>
              <div className="flex gap-3">
                <div className="flex items-center gap-1.5 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                  <CalendarDays className="w-3.5 h-3.5" /> Tomorrow
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                  <Clock className="w-3.5 h-3.5" /> 10:00 AM
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
