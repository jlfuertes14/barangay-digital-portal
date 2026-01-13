"use client";

import { Shield, Clock, User, FileText, Printer, Download } from "lucide-react";

const AUDIT_LOGS = [
    { id: 1, user: "Admin", action: "Printed Certificate", target: "Maria Santos", timestamp: "Just now" },
    { id: 2, user: "Staff 1", action: "Added Resident", target: "Juan Dela Cruz", timestamp: "5 mins ago" },
    { id: 3, user: "Admin", action: "Printed ID", target: "Pedro Penduko", timestamp: "1 hour ago" },
    { id: 4, user: "Admin", action: "Login", target: "System", timestamp: "2 hours ago" },
    { id: 5, user: "Staff 2", action: "Updated Profile", target: "Jose Rizal", timestamp: "Yesterday" },
];

export default function AuditPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-white">System Audit Logs</h1>
                <p className="text-slate-400 text-sm">Track all system activities and security events.</p>
            </div>

            <div className="glass-card rounded-xl overflow-hidden">
                <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
                    <div className="flex items-center space-x-2 text-sm text-slate-400">
                        <Shield className="w-4 h-4" />
                        <span>Security Level: <span className="text-emerald-400 font-medium">High</span></span>
                    </div>
                    <button className="text-xs text-blue-400 hover:text-blue-300 flex items-center transition-colors">
                        <Download className="w-3 h-3 mr-1" />
                        Export Logs
                    </button>
                </div>

                <table className="min-w-full divide-y divide-slate-800">
                    <thead className="bg-slate-900/50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">User</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Action</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Target</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Time</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                        {AUDIT_LOGS.map((log) => (
                            <tr key={log.id} className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="shrink-0 h-6 w-6 rounded-full bg-blue-600/20 flex items-center justify-center text-xs font-bold text-blue-400 border border-blue-500/30">
                                            {log.user[0]}
                                        </div>
                                        <div className="ml-3 text-sm font-medium text-white">{log.user}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                                    <div className="flex items-center space-x-2">
                                        {log.action.includes("Print") ? <Printer className="w-3 h-3 text-slate-500" /> : <FileText className="w-3 h-3 text-slate-500" />}
                                        <span>{log.action}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400 font-mono text-xs">{log.target}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                                    <div className="flex items-center space-x-1">
                                        <Clock className="w-3 h-3" />
                                        <span>{log.timestamp}</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
