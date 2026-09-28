"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Loader2, LogOut } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-indigo-500/30">
      <nav className="border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center bg-black/50 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-indigo-500 blur-md opacity-30"></div>
            {/* Generic orbit icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white relative z-10">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19 13c1.669 0 3-1.331 3-3s-1.331-3-3-3-3 1.331-3 3 1.331 3 3 3z"></path>
              <path d="M12 19c1.669 0 3-1.331 3-3s-1.331-3-3-3-3 1.331-3 3 1.331 3 3 3z"></path>
              <path d="M5 13c1.669 0 3-1.331 3-3s-1.331-3-3-3-3 1.331-3 3 1.331 3 3 3z"></path>
              <path d="M12 5c1.669 0 3-1.331 3-3s-1.331-3-3-3-3 1.331-3 3 1.331 3 3 3z"></path>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">Yantri OS</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
            {user.photoURL ? (
              <img src={user.photoURL} alt="Profile" className="w-6 h-6 rounded-full" />
            ) : (
              <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold">
                {user.email?.charAt(0).toUpperCase()}
              </div>
            )}
            <span className="text-sm font-medium text-zinc-300">{user.displayName || user.email}</span>
          </div>
          <button 
            onClick={handleLogout}
            className="p-2 text-zinc-400 hover:text-white transition-colors"
            title="Sign out"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Welcome to your dashboard</h1>
          <p className="text-zinc-400">Your Yantri OS environment is ready.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Mock Dashboard Cards */}
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.04] transition-colors">
            <h3 className="font-semibold mb-2">Voice Activity</h3>
            <p className="text-sm text-zinc-500">0 commands processed today</p>
          </div>
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.04] transition-colors">
            <h3 className="font-semibold mb-2">Connected Apps</h3>
            <p className="text-sm text-zinc-500">3 services ready</p>
          </div>
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.04] transition-colors">
            <h3 className="font-semibold mb-2">System Status</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-sm text-emerald-500">All systems operational</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
