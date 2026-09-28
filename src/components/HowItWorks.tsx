"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Speak", desc: "Tell the AI what you want in natural language." },
  { num: "02", title: "AI understands", desc: "It understands your words and the context around you." },
  { num: "03", title: "AI acts", desc: "It performs the task across your connected applications." },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-12 right-12 h-[2px] bg-zinc-200 hidden md:block" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-xl font-medium text-blue-500 mb-6 shadow-sm">
                {step.num}
              </div>
              <h3 className="text-xl font-medium text-zinc-900 mb-3">{step.title}</h3>
              <p className="text-zinc-500 font-light max-w-xs">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
