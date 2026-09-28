import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center p-4 overflow-hidden selection:bg-indigo-500/30 text-white font-sans">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="relative z-10 w-full max-w-[440px]">
        <div className="relative bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] p-8 sm:p-10 rounded-[22px] shadow-2xl shadow-black/50 overflow-hidden text-center">
          <h1 className="text-2xl font-bold tracking-tight mb-2">Reset Password</h1>
          <p className="text-sm text-zinc-400 font-medium mb-8">Enter your email to receive a reset link</p>
          
          <input
            type="email"
            placeholder="Email address"
            className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 mb-4"
          />
          <button className="w-full bg-white text-black font-semibold rounded-xl py-3 text-sm flex items-center justify-center gap-2 hover:bg-zinc-100 transition-all mb-6">
            Send Reset Link
          </button>
          
          <Link href="/login" className="text-sm text-zinc-400 hover:text-white transition-colors">
            ← Back to sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
