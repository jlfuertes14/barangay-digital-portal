import { Building2, ShieldCheck, User, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Column: Digital City Visual */}
      <div className="relative hidden lg:flex flex-col justify-between p-12 bg-slate-900 overflow-hidden">
        {/* Background Visuals - Gradients as fallback for 3D City */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700 via-slate-900 to-black z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay z-0"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center space-x-3 text-white/90">
            <Building2 className="w-8 h-8 text-yellow-500" />
            <span className="text-xl font-bold tracking-tight">Barangay 143 Portal</span>
          </div>
        </div>

        <div className="relative z-10 max-w-lg">
          <h1 className="text-6xl font-black text-white leading-tight tracking-tight mb-6 text-glow">
            Empowering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Communities</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed font-light">
            Experience the future of local governance. Efficient, transparent, and secure digital services for every resident.
          </p>
        </div>

        <div className="relative z-10 flex items-center space-x-2 text-sm text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Secure AES-256 Encrypted Connection</span>
        </div>
      </div>

      {/* Right Column: Login Form */}
      <div className="relative flex items-center justify-center p-8 bg-slate-950">
        {/* Subtle pattern background for form side */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="w-full max-w-md space-y-8 relative z-10">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-white mb-2">Welcome Back, Kapitan</h2>
            <p className="text-slate-400">Please enter your credentials to access the dashboard.</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                  type="email"
                  placeholder="admin@barangay.ph"
                  className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all hover:border-slate-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all hover:border-slate-600"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 cursor-pointer group">
                <input type="checkbox" className="rounded border-slate-700 bg-slate-800 text-blue-500 focus:ring-blue-500/20" />
                <span className="text-slate-400 group-hover:text-slate-300 transition-colors">Remember me</span>
              </label>
              <a href="#" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">Forgot password?</a>
            </div>

            <Link href="/dashboard" className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl text-white font-semibold overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:scale-105 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              <span className="relative flex items-center">
                Sign In to Dashboard <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-800" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-slate-950 px-2 text-slate-500">Official Portal System v2.1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
