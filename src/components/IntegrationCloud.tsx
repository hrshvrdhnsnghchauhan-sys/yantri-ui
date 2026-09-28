"use client";

import { motion } from "framer-motion";
import { Mail, Calendar, MessageSquare, FileText, HardDrive, Globe, Hash, Layout, Music, FolderOpen, Video } from "lucide-react";
import { useState } from "react";

const apps = [
  { icon: Mail, name: "Gmail", action: "Send an email" },
  { icon: Calendar, name: "Calendar", action: "Schedule a meeting" },
  { icon: MessageSquare, name: "Slack", action: "Reply to a message" },
  { icon: FileText, name: "Docs", action: "Create a document" },
  { icon: HardDrive, name: "Drive", action: "Find a document" },
  { icon: Globe, name: "Chrome", action: "Search the web" },
  { icon: Hash, name: "WhatsApp", action: "Send a text" },
  { icon: Video, name: "Teams", action: "Join a call" },
  { icon: Layout, name: "Jira", action: "Update an issue" },
  { icon: Music, name: "Spotify", action: "Play a playlist" },
  { icon: FolderOpen, name: "Files", action: "Organize folders" },
];

export function IntegrationCloud() {
  const [hoveredApp, setHoveredApp] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-6">
          One voice layer.<br />Every app.
        </h2>
        
        <div className="h-[400px] mt-16 relative max-w-4xl mx-auto flex items-center justify-center">
          <div className="flex flex-wrap justify-center gap-6">
            {apps.map((app, i) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }}
                onHoverStart={() => setHoveredApp(app.name)}
                onHoverEnd={() => setHoveredApp(null)}
                className="relative group cursor-pointer"
              >
                <div className="w-16 h-16 bg-white border border-zinc-200 rounded-2xl shadow-sm flex items-center justify-center hover:border-blue-500 hover:shadow-md transition-all duration-300">
                  <app.icon className="w-8 h-8 text-zinc-700 group-hover:text-blue-500 transition-colors" />
                </div>
                
                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: hoveredApp === app.name ? 1 : 0, y: hoveredApp === app.name ? 0 : 10 }}
                  className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-zinc-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg pointer-events-none shadow-xl"
                >
                  Ask AI to {app.action}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 rotate-45" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
