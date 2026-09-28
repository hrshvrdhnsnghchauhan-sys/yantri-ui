"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqs = [
  { q: "What is an AI Voice Operating System?", a: "It is an intelligent layer that sits on top of your existing OS, allowing you to control applications, manage files, and perform complex workflows entirely through natural language voice commands." },
  { q: "How is this different from speech-to-text?", a: "Speech-to-text only transcribes your words. OmniAI understands your intent, sees the context on your screen, and actively executes actions across multiple apps." },
  { q: "Can it control my applications?", a: "Yes. OmniAI integrates with most major applications like Chrome, Gmail, Notion, Slack, and your native file system to perform actions just like a human would." },
  { q: "Does it understand what's on my screen?", a: "Yes, OmniAI has screen context awareness. You can point your cursor at something and say 'summarize this' or 'reply to this email', and it will understand exactly what you refer to." },
  { q: "What happens before an action is executed?", a: "For actions that modify data (like sending an email or deleting a file), OmniAI will always ask for your confirmation before executing the task." },
  { q: "Is my voice data stored?", a: "By default, all voice processing is done securely, and audio is discarded. You can choose to opt-in to cloud storage or AI training in your privacy settings." },
  { q: "Which applications are supported?", a: "We support over 50+ major productivity apps out of the box, with a generic automation fallback for unsupported apps using accessibility APIs." },
  { q: "Does it work on Mac and Windows?", a: "Currently, OmniAI is available for macOS (Apple Silicon). Windows support is planned for Q3 2026." },
  { q: "Is there a free plan?", a: "Yes, there is a generous free tier for individuals. Premium features and unlimited actions are available on our Pro plan." }
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200/50">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-12 text-center">
          Frequently asked questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-zinc-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className="font-medium text-zinc-900 pr-8">{faq.q}</span>
                <span className="text-zinc-400 shrink-0">
                  {openIdx === i ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-zinc-500 font-light leading-relaxed border-t border-zinc-100 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
