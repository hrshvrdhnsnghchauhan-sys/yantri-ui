"use client";

import Link from "next/link";
import { Command, MessageCircle, Share2, Rss } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-16 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-white mb-6">
              <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
                <Command className="w-5 h-5" />
              </div>
              <span className="font-semibold text-lg tracking-tight">OmniAI</span>
            </Link>
            <p className="text-zinc-500 font-light max-w-sm">
              An AI computer assistant that lets you control your computer and applications using natural voice commands.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Product</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Use Cases</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Download</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-800 text-sm">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Security</Link>
          </div>

          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <Link href="#" className="hover:text-white transition-colors"><MessageCircle className="w-4 h-4" /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Share2 className="w-4 h-4" /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Rss className="w-4 h-4" /></Link>
          </div>

          <div className="text-zinc-600">
            &copy; 2026 OmniAI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
