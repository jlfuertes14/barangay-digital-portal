"use client";

import { useState } from "react";
import { Printer, Search, CreditCard, Info } from "lucide-react";
import { MOCK_RESIDENTS } from "@/types/resident";
import { IDCard } from "@/components/IDCard";

export default function IDSystemPage() {
    const [selectedResident, setSelectedResident] = useState<string>("");
    const resident = MOCK_RESIDENTS.find(r => r.id === selectedResident);

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between no-print">
                <h1 className="text-2xl font-bold text-white">ID Generation</h1>
                <button
                    onClick={handlePrint}
                    disabled={!resident}
                    className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-xl hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    <Printer className="w-4 h-4 mr-2" />
                    <span>Print ID Card</span>
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Data Selection */}
                <div className="space-y-6 no-print">
                    <div className="glass-card p-6 rounded-xl space-y-4">
                        <h2 className="font-semibold text-white flex items-center">
                            <Search className="w-4 h-4 mr-2 text-slate-400" />
                            Select Resident
                        </h2>
                        <select
                            className="w-full pl-3 pr-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg appearance-none text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 hover:border-slate-600 transition-colors"
                            onChange={(e) => setSelectedResident(e.target.value)}
                            value={selectedResident}
                        >
                            <option value="">Choose resident...</option>
                            {MOCK_RESIDENTS.map(r => (
                                <option key={r.id} value={r.id}>{r.lastName}, {r.firstName}</option>
                            ))}
                        </select>
                        <p className="text-xs text-slate-500">
                            Only active residents are eligible for ID issuance.
                        </p>
                    </div>

                    <div className="glass-card p-4 rounded-xl border-blue-500/20 bg-blue-500/5">
                        <h3 className="text-sm font-semibold text-blue-400 mb-2 flex items-center">
                            <Info className="w-4 h-4 mr-2" />
                            Printing Tips
                        </h3>
                        <ul className="text-xs text-slate-400 space-y-1 list-disc pl-4">
                            <li>Use standard PVC ID card size (CR80).</li>
                            <li>Ensure printer color is calibrated.</li>
                            <li>Enable "Background Graphics" in print settings.</li>
                        </ul>
                    </div>
                </div>

                {/* Preview Area */}
                <div className="lg:col-span-2 flex flex-col items-center justify-center min-h-[400px] glass-card rounded-xl border-dashed border-2 border-slate-700 relative overflow-hidden">
                    {resident ? (
                        <div className="transform scale-150 print:scale-100 p-8 bg-white shadow-2xl rounded-2xl print:shadow-none print:p-0 print:rounded-none">
                            <IDCard resident={resident} />
                        </div>
                    ) : (
                        <div className="text-center text-slate-500">
                            <CreditCard className="w-16 h-16 mx-auto mb-4 opacity-20" />
                            <p>Select a resident to generate ID preview</p>
                        </div>
                    )}
                </div>
            </div>

            <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background: white;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          aside {
            display: none;
          }
          main {
            margin: 0;
            padding: 0;
          }
        }
      `}</style>
        </div>
    );
}
