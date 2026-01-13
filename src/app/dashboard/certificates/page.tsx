"use client";

import { useState } from "react";
import { FileText, Printer, Search } from "lucide-react";
import { MOCK_RESIDENTS } from "@/types/resident";

type CertType = "Barangay Clearance" | "Certificate of Indigency" | "Cedula";

export default function CertificatesPage() {
    const [selectedResident, setSelectedResident] = useState<string>("");
    const [certType, setCertType] = useState<CertType>("Barangay Clearance");

    const resident = MOCK_RESIDENTS.find(r => r.id === selectedResident);

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between no-print">
                <h1 className="text-2xl font-bold text-white">Document Issuance</h1>
                <button
                    onClick={handlePrint}
                    disabled={!resident}
                    className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-xl hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    <Printer className="w-4 h-4 mr-2" />
                    <span>Print Document</span>
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Controls */}
                <div className="space-y-6 no-print">
                    <div className="glass-card p-6 rounded-xl space-y-4">
                        <h2 className="font-semibold text-white">1. Select Resident</h2>
                        <div className="relative group">
                            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                            <select
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg appearance-none text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 hover:border-slate-600 transition-colors"
                                onChange={(e) => setSelectedResident(e.target.value)}
                                value={selectedResident}
                            >
                                <option value="">Select a resident...</option>
                                {MOCK_RESIDENTS.map(r => (
                                    <option key={r.id} value={r.id}>{r.lastName}, {r.firstName}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="glass-card p-6 rounded-xl space-y-4">
                        <h2 className="font-semibold text-white">2. Document Type</h2>
                        <div className="space-y-2">
                            {["Barangay Clearance", "Certificate of Indigency", "Cedula"].map((type) => (
                                <label key={type} className="flex items-center space-x-3 p-3 border border-slate-700 rounded-lg cursor-pointer hover:bg-white/5 transition-colors group">
                                    <input
                                        type="radio"
                                        name="certType"
                                        checked={certType === type}
                                        onChange={() => setCertType(type as CertType)}
                                        className="text-blue-500 focus:ring-blue-500 bg-slate-800 border-slate-600"
                                    />
                                    <span className="font-medium text-slate-300 group-hover:text-white transition-colors">{type}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Live Preview */}
                <div className="lg:col-span-2">
                    <div className="bg-white p-8 shadow-lg min-h-[800px] print:shadow-none print:w-full print:p-0 rounded-xl" id="printable-area">
                        {resident ? (
                            <div className="max-w-2xl mx-auto space-y-8 text-slate-900 font-serif">
                                {/* Letterhead */}
                                <div className="text-center space-y-1 border-b-2 border-slate-900 pb-4">
                                    <p className="text-xs uppercase tracking-widest">Republic of the Philippines</p>
                                    <p className="text-sm font-bold uppercase">Province of Manila</p>
                                    <p className="text-sm font-bold uppercase">City of Manila</p>
                                    <h1 className="text-2xl font-black uppercase text-blue-900 mt-2">Barangay 143</h1>
                                    <p className="text-xs italic text-slate-500">Office of the Barangay Captain</p>
                                </div>

                                {/* Title */}
                                <div className="text-center py-8">
                                    <h2 className="text-3xl font-black uppercase decoration-double underline underline-offset-4">
                                        {certType.toUpperCase()}
                                    </h2>
                                </div>

                                {/* Body */}
                                <div className="space-y-6 text-justify leading-relaxed">
                                    <p>TO WHOM IT MAY CONCERN:</p>

                                    <p>
                                        This is to certify that <strong>{resident.firstName} {resident.middleName} {resident.lastName}</strong>,
                                        of legal age, {resident.civilStatus.toLowerCase()}, filipino, is a bona fide resident of
                                        <strong> {resident.address.houseNumber} {resident.address.street}, {resident.address.purok}, Barangay 143, City of Manila</strong>.
                                    </p>

                                    <p>
                                        {certType === "Barangay Clearance" && (
                                            "This certification is issued upon the request of the above-named person for whatever legal purpose it may serve. The said person has no derogatory record in this barangay as of this date."
                                        )}
                                        {certType === "Certificate of Indigency" && (
                                            "This is to further certify that the above-named person belongs to the Indigent Family of this Barangay and is in need of financial/medical assistance."
                                        )}
                                    </p>

                                    <p>
                                        Issued this <strong>{new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</strong> at Barangay 143 Hall, City of Manila.
                                    </p>
                                </div>

                                {/* Footer / Signatures */}
                                <div className="pt-16 mt-16 flex justify-end">
                                    <div className="text-center">
                                        <p className="font-bold uppercase border-b border-black w-64 pb-2">Hon. Juan Dela Cruz</p>
                                        <p className="text-sm">Barangay Captain</p>
                                    </div>
                                </div>

                                <div className="mt-12 text-xs text-slate-400 border-t pt-4">
                                    <p>Not valid without official dry seal.</p>
                                    <p>Document ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4 min-h-[700px]">
                                <FileText className="w-16 h-16 opacity-20" />
                                <p>Select a resident to generate a document preview.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background: white;
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
