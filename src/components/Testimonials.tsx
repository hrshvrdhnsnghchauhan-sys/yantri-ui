"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Product Manager",
    company: "TechCorp",
    quote: "Sample testimonial — OmniAI completely changed how I manage my daily standups and emails.",
  },
  {
    name: "David Chen",
    role: "Software Engineer",
    company: "StartupInc",
    quote: "Sample testimonial — Being able to just tell my computer to create a PR and summarize the issue is magical.",
  },
  {
    name: "Emily Rodriguez",
    role: "Freelance Designer",
    company: "Studio E",
    quote: "Sample testimonial — I stay in the creative zone while OmniAI handles my file management and invoices in the background.",
  },
  {
    name: "Michael Chang",
    role: "Founder",
    company: "NextGen",
    quote: "Sample testimonial — We deployed this to our entire team. The productivity gains are actually measurable.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900">
          What people are saying
        </h2>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar px-6 md:px-12 gap-6 w-full max-w-[100vw]">
        {testimonials.map((t, i) => (
          <div key={i} className="snap-center shrink-0 w-[300px] md:w-[400px] bg-zinc-50 border border-zinc-200 rounded-[2rem] p-8 flex flex-col justify-between">
            <p className="text-zinc-600 font-medium text-lg leading-relaxed mb-8">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-200" />
              <div>
                <div className="font-medium text-zinc-900">{t.name}</div>
                <div className="text-sm text-zinc-500">{t.role}, {t.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
