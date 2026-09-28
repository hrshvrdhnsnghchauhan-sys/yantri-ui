"use client";

import React, { useState, MouseEvent } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

export function SignInCard2() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  // Mouse tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call for UI
    setTimeout(() => {
      setIsLoading(false);
      router.push("/");
    }, 2000);
  };

  const handleGoogleLogin = async () => {
    try {
      setErrorMsg("");
      setIsGoogleLoading(true);

      if (!auth || !googleProvider) {
        throw new Error("Firebase configuration is missing or invalid. Please setup your environment variables.");
      }

      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Authenticated user:", user.uid);

      router.push("/dashboard");
    } catch (error: any) {
      console.error("Google sign-in failed:", error);
      
      let userFriendlyMessage = "Failed to sign in with Google. Please try again.";
      
      if (error.code === 'auth/api-key-not-valid') {
        userFriendlyMessage = "System configuration error: Invalid API key.";
      } else if (error.code === 'auth/popup-closed-by-user') {
        userFriendlyMessage = "Sign-in was cancelled.";
      } else if (error.code === 'auth/popup-blocked') {
        userFriendlyMessage = "Sign-in popup was blocked by your browser. Please allow popups.";
      } else if (error.code === 'auth/network-request-failed') {
        userFriendlyMessage = "Network error. Please check your internet connection.";
      } else if (error.message) {
        userFriendlyMessage = error.message;
      }
      
      setErrorMsg(userFriendlyMessage);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center p-4 overflow-hidden selection:bg-indigo-500/30 text-white font-sans">
      {/* Subtle background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 blur-[120px] rounded-full opacity-50" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        className="relative z-10 w-full max-w-[440px]"
      >
        <div className="relative bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] p-8 sm:p-10 rounded-[22px] shadow-2xl shadow-black/50 overflow-hidden">
          
          {/* Subtle animated border glow */}
          <div className="absolute inset-0 pointer-events-none border border-indigo-500/20 rounded-[22px] opacity-0 hover:opacity-100 transition-opacity duration-700 mix-blend-screen" />

          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-12 h-12 mx-auto bg-indigo-600/10 border border-indigo-500/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
              {/* Using a generic orbit icon as placeholder for Yantri OS logo */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19 13c1.669 0 3-1.331 3-3s-1.331-3-3-3-3 1.331-3 3 1.331 3 3 3z"></path>
                <path d="M12 19c1.669 0 3-1.331 3-3s-1.331-3-3-3-3 1.331-3 3 1.331 3 3 3z"></path>
                <path d="M5 13c1.669 0 3-1.331 3-3s-1.331-3-3-3-3 1.331-3 3 1.331 3 3 3z"></path>
                <path d="M12 5c1.669 0 3-1.331 3-3s-1.331-3-3-3-3 1.331-3 3 1.331 3 3 3z"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-bold tracking-tight mb-2">Welcome back</h1>
            <p className="text-sm text-zinc-400 font-medium">Sign in to continue to Yantri OS</p>
          </div>
          
          {errorMsg && (
            <div className="mb-4 text-xs text-red-400 bg-red-500/10 border border-red-500/20 p-3 rounded-lg text-center">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-indigo-400 transition-colors">
                <Mail className="h-5 w-5" />
              </div>
              <input
                type="email"
                placeholder="Email address"
                required
                className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all shadow-inner"
              />
            </div>

            {/* Password Field */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-indigo-400 transition-colors">
                <Lock className="h-5 w-5" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-10 pr-10 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all shadow-inner"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-500 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-xs py-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative flex items-center justify-center w-4 h-4 rounded-md border border-white/20 bg-white/5 group-hover:border-indigo-500/50 transition-colors">
                  <input type="checkbox" className="peer sr-only" />
                  <svg className="w-3 h-3 text-transparent peer-checked:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">Remember me</span>
              </label>
              
              <Link href="/forgot-password" className="text-zinc-400 hover:text-white transition-colors">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading || isGoogleLoading}
              type="submit"
              className="w-full bg-white text-black font-semibold rounded-xl py-3 text-sm flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:bg-zinc-100 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                "Sign In"
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-xs text-zinc-500 font-medium uppercase tracking-widest">or</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={isLoading || isGoogleLoading}
            className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-xl py-3 text-sm flex items-center justify-center gap-3 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isGoogleLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Sign in with Google
              </>
            )}
          </button>

          {/* Sign up link */}
          <div className="mt-8 text-center text-sm">
            <span className="text-zinc-500">Don't have an account? </span>
            <Link href="/signup" className="text-white hover:text-indigo-400 font-medium transition-colors">
              Sign up
            </Link>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
