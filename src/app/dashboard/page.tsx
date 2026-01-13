"use client";

import {
    Users,
    FileCheck,
    Wallet,
    AlertTriangle,
    ArrowUpRight,
    ArrowDownRight,
    Activity,
    MoreHorizontal
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const data = [
    { name: 'Mon', requests: 4 },
    { name: 'Tue', requests: 7 },
    { name: 'Wed', requests: 3 },
    { name: 'Thu', requests: 12 },
    { name: 'Fri', requests: 9 },
    { name: 'Sat', requests: 15 },
    { name: 'Sun', requests: 10 },
];

const StatCard = ({ title, value, change, icon: Icon, trend, color, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: delay }}
        whileHover={{ y: -4, boxShadow: "0 0 25px rgba(59, 130, 246, 0.15)" }}
        className="glass-card p-6 rounded-2xl relative overflow-hidden group"
    >
        {/* Background Gradient/Mesh for visual interest */}
        <div className={cn("absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[50px] opacity-20 pointer-events-none transition-opacity group-hover:opacity-40", color)}></div>

        <div className="flex justify-between items-start relative z-10">
            <div>
                <p className="text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors">{title}</p>
                <h3 className="text-3xl font-bold text-white mt-2 tracking-tight">{value}</h3>
            </div>
            <div className={cn("p-2.5 rounded-xl bg-white/5 border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300", color.replace('bg-', 'text-'))}>
                <Icon className="w-5 h-5 text-current" />
            </div>
        </div>
        <div className="mt-4 flex items-center text-sm relative z-10">
            {trend === 'up' ? (
                <div className="flex items-center text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <ArrowUpRight className="w-3.5 h-3.5 mr-1" />
                    <span className="font-medium">{change}</span>
                </div>
            ) : trend === 'down' ? (
                <div className="flex items-center text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20">
                    <ArrowDownRight className="w-3.5 h-3.5 mr-1" />
                    <span className="font-medium">{change}</span>
                </div>
            ) : (
                <span className="w-4 h-4 mr-1" />
            )}
            <span className="text-slate-500 ml-2">vs last month</span>
        </div>
    </motion.div>
);

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-white tracking-tight">Dashboard Overview</h2>
                    <p className="text-slate-400 mt-1">Welcome back, Kapitan. Network status: <span className="text-emerald-400 font-medium font-mono text-xs border border-emerald-500/30 px-1.5 py-0.5 rounded ml-1 bg-emerald-900/20">ONLINE</span></p>
                </motion.div>
                <div className="text-sm text-slate-500 font-mono bg-slate-900/50 px-3 py-1.5 rounded-lg border border-white/5">
                    Last updated: Today, 12:00 PM
                </div>
            </div>

            {/* Stats Grid - Bento Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Population"
                    value="2,453"
                    change="+12%"
                    trend="up"
                    icon={Users}
                    color="bg-blue-600"
                    delay={0.1}
                />
                <StatCard
                    title="Pending Certificates"
                    value="18"
                    change="+5%"
                    trend="up"
                    icon={FileCheck}
                    color="bg-yellow-500"
                    delay={0.2}
                />
                <StatCard
                    title="Monthly Revenue"
                    value="₱12,450"
                    change="-2.5%"
                    trend="down"
                    icon={Wallet}
                    color="bg-emerald-500"
                    delay={0.3}
                />
                <StatCard
                    title="Active Issues"
                    value="3"
                    change="0%"
                    trend="neutral"
                    icon={AlertTriangle}
                    color="bg-rose-500"
                    delay={0.4}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Chart Section - Glassmorphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="lg:col-span-2 glass-card p-6 rounded-2xl border border-white/5"
                >
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h3 className="text-lg font-bold text-white">Certificate Requests</h3>
                            <p className="text-sm text-slate-400">Real-time processing analytics</p>
                        </div>
                        <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                            <MoreHorizontal className="w-5 h-5 text-slate-400" />
                        </button>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.5} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dx={-10} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', border: '1px solid #1e293b', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.5)' }}
                                    itemStyle={{ color: '#e2e8f0' }}
                                    labelStyle={{ color: '#94a3b8' }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="requests"
                                    stroke="#3b82f6"
                                    strokeWidth={3}
                                    fillOpacity={1}
                                    fill="url(#colorRequests)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                {/* Recent Activity Feed */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col"
                >
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                        <Activity className="w-4 h-4 text-blue-400 mr-2" />
                        Live Activity
                    </h3>
                    <div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-start space-x-4 group">
                                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-slate-200 truncate group-hover:text-blue-300 transition-colors">Maria Santos requested Brgy. Clearance</p>
                                    <p className="text-xs text-slate-500">2 minutes ago • ID-2024-{1000 + i}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-6 py-2.5 text-sm text-blue-400 font-medium bg-blue-500/10 rounded-xl hover:bg-blue-500/20 transition-all border border-blue-500/20 hover:border-blue-500/50">
                        View All Activity Log
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
