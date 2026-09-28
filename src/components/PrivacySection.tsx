"use client";

import { Shield, Lock, Server, EyeOff } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={cn(
        "w-11 h-6 rounded-full transition-colors relative flex items-center px-1 shrink-0",
        checked ? "bg-blue-500" : "bg-zinc-300"
      )}
    >
      <div
        className={cn(
          "w-4 h-4 bg-white rounded-full transition-transform shadow-sm",
          checked ? "translate-x-5" : "translate-x-0"
        )}
      />
    </button>
  );
}

export function PrivacySection() {
  const [settings, setSettings] = useState({
    transcripts: true,
    cloud: false,
    diagnostics: true,
    training: false,
  });

  return (
    <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-zinc-300 mb-6">
            <Shield className="w-3.5 h-3.5" />
            <span>Privacy First</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Your voice belongs to you.
          </h2>
          
          <div className="space-y-6 mt-12">
            {[
              { icon: Lock, text: "Audio is processed securely." },
              { icon: Server, text: "Users control what data is stored." },
              { icon: EyeOff, text: "Never sell personal data." },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-zinc-300" />
                </div>
                <div className="text-zinc-300 font-medium">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-md">
          <div className="text-xl font-medium mb-8 flex items-center gap-3">
            <Lock className="w-5 h-5 text-blue-400" /> Privacy Settings
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-zinc-200">Save transcripts</div>
                <div className="text-sm text-zinc-400">Keep history of text commands locally</div>
              </div>
              <Toggle checked={settings.transcripts} onChange={() => setSettings(s => ({ ...s, transcripts: !s.transcripts }))} />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-zinc-200">Cloud audio storage</div>
                <div className="text-sm text-zinc-400">Sync voice history across devices</div>
              </div>
              <Toggle checked={settings.cloud} onChange={() => setSettings(s => ({ ...s, cloud: !s.cloud }))} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-zinc-200">Anonymous diagnostics</div>
                <div className="text-sm text-zinc-400">Help improve the app performance</div>
              </div>
              <Toggle checked={settings.diagnostics} onChange={() => setSettings(s => ({ ...s, diagnostics: !s.diagnostics }))} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-zinc-200">AI training</div>
                <div className="text-sm text-zinc-400">Allow your data to train OmniAI</div>
              </div>
              <Toggle checked={settings.training} onChange={() => setSettings(s => ({ ...s, training: !s.training }))} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
