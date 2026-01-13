"use client";

import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Users,
    FileText,
    Settings,
    LogOut,
    QrCode,
    ShieldAlert
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: Users, label: "Residents", href: "/dashboard/residents" },
    { icon: FileText, label: "Certificates", href: "/dashboard/certificates" },
    { icon: QrCode, label: "ID System", href: "/dashboard/ids" },
    { icon: ShieldAlert, label: "Incident Reports", href: "/dashboard/incidents" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-slate-900/90 backdrop-blur-xl text-slate-300 flex flex-col h-screen fixed left-0 top-0 border-r border-white/5 shadow-2xl z-50">
            {/* Brand */}
            <div className="p-6 border-b border-white/5">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                        <span className="font-bold text-white text-xl">B</span>
                    </div>
                    <div>
                        <h1 className="font-bold text-white tracking-wide">BRGY. 143</h1>
                        <p className="text-xs text-blue-400 font-medium">Digital Portal</p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                <p className="text-xs font-semibold text-slate-500 px-4 mb-2 uppercase tracking-wider">Menu</p>

                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group relative overflow-hidden",
                                isActive
                                    ? "text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                                    : "hover:bg-white/5 hover:text-white"
                            )}
                        >
                            {/* Active Background with Gradient */}
                            {isActive && (
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-100" />
                            )}

                            <item.icon className={cn(
                                "w-5 h-5 transition-colors relative z-10",
                                isActive ? "text-white" : "text-slate-400 group-hover:text-blue-400"
                            )} />
                            <span className="font-medium relative z-10">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* User Profile */}
            <div className="p-4 border-t border-white/5 bg-slate-900/50">
                <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center overflow-hidden border-2 border-slate-700 group-hover:border-blue-500 transition-colors">
                        <img
                            src="https://ui-avatars.com/api/?name=Kap+Juan&background=0D8ABC&color=fff"
                            alt="Admin"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate group-hover:text-blue-400 transition-colors">Kap. Juan Dela Cruz</p>
                        <p className="text-xs text-slate-500 truncate">Barangay Captain</p>
                    </div>
                    <LogOut className="w-4 h-4 text-slate-500 hover:text-red-400 transition-colors" />
                </div>
            </div>
        </aside>
    );
}
