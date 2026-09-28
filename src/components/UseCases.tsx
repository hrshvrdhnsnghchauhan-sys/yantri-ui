"use client";

import { Code2, Lightbulb, BookOpen, Presentation, Edit3, Briefcase } from "lucide-react";

const useCases = [
  { icon: Code2, title: "Developers", desc: "Run coding tasks and manage your workflow by voice." },
  { icon: Lightbulb, title: "Founders", desc: "Turn ideas into emails, tasks and meetings instantly." },
  { icon: BookOpen, title: "Students", desc: "Research, summarize and organize study material." },
  { icon: Presentation, title: "Sales", desc: "Create follow-ups immediately after calls." },
  { icon: Edit3, title: "Creators", desc: "Draft, edit and publish without breaking your flow." },
  { icon: Briefcase, title: "Professionals", desc: "Control everyday work across your apps." },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-16">
          Built for the way you work.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {useCases.map((uc, i) => (
            <div key={i} className="p-6 rounded-2xl border border-zinc-200 hover:border-blue-300 hover:shadow-lg transition-all group cursor-pointer bg-zinc-50 hover:bg-white">
              <div className="w-12 h-12 bg-white rounded-xl border border-zinc-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <uc.icon className="w-6 h-6 text-zinc-700 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="text-xl font-medium text-zinc-900 mb-2">{uc.title}</h3>
              <p className="text-zinc-500 font-light">{uc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
