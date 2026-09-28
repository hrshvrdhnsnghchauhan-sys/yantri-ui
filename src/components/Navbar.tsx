"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Command } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-white/70 backdrop-blur-md border-zinc-200/50 shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white group-hover:bg-zinc-800 transition-colors">
            <Command className="w-5 h-5" />
          </div>
          <span className="font-semibold text-lg tracking-tight">OmniAI</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
          <Link href="#features" className="hover:text-zinc-900 transition-colors">Product</Link>
          <Link href="#features" className="hover:text-zinc-900 transition-colors">Features</Link>
          <Link href="#use-cases" className="hover:text-zinc-900 transition-colors">Use Cases</Link>
          <Link href="#pricing" className="hover:text-zinc-900 transition-colors">Pricing</Link>
          <Link href="#about" className="hover:text-zinc-900 transition-colors">About</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors hidden sm:block">
            Log in
          </Link>
          <Link
            href="/download"
            className="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
