"use client";

import { Resident } from "@/types/resident";
import { QRCodeSVG } from "qrcode.react";

export function IDCard({ resident }: { resident: Resident }) {
    return (
        <div className="w-[85.6mm] h-[53.98mm] bg-white rounded-xl overflow-hidden shadow-xl border border-slate-200 relative print:shadow-none print:border-black print:border">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="w-full h-full bg-blue-900 absolute top-0 left-0"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 70%)" }} />
                <div className="w-full h-full bg-yellow-500 absolute bottom-0 right-0"
                    style={{ clipPath: "polygon(50% 100%, 100% 100%, 100% 50%)" }} />
            </div>

            <div className="relative z-10 p-4 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md">
                            B
                        </div>
                        <div>
                            <h1 className="text-[10px] font-bold uppercase text-blue-900 leading-tight">Republic of the Philippines<br />Barangay 143, Manila</h1>
                        </div>
                    </div>
                    <div className="text-[8px] font-bold text-slate-400">OFFICIAL ID</div>
                </div>

                {/* Content */}
                <div className="flex-1 flex gap-3">
                    {/* Photo */}
                    <div className="flex flex-col gap-2">
                        <div className="w-20 h-24 bg-slate-200 rounded-lg border-2 border-slate-100 overflow-hidden shadow-inner">
                            <img
                                src={`https://ui-avatars.com/api/?name=${resident.firstName}+${resident.lastName}&background=random`}
                                className="w-full h-full object-cover"
                                alt="ID"
                            />
                        </div>
                        <div className="flex justify-center">
                            <QRCodeSVG value={JSON.stringify({ id: resident.id, name: resident.lastName })} size={48} level="M" />
                        </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1 space-y-1">
                        <div>
                            <p className="text-[8px] uppercase text-slate-400 font-bold tracking-wider">Name</p>
                            <p className="text-sm font-bold text-slate-900 leading-tight uppercase truncate">
                                {resident.lastName}, {resident.firstName}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-1">
                            <div>
                                <p className="text-[8px] uppercase text-slate-400 font-bold tracking-wider">ID No.</p>
                                <p className="text-xs font-semibold text-blue-800">{resident.id}</p>
                            </div>
                            <div>
                                <p className="text-[8px] uppercase text-slate-400 font-bold tracking-wider">Blood Type</p>
                                <p className="text-xs font-semibold text-slate-700">O+</p>
                            </div>
                        </div>

                        <div className="pt-1">
                            <p className="text-[8px] uppercase text-slate-400 font-bold tracking-wider">Address</p>
                            <p className="text-[9px] font-medium text-slate-700 leading-tight">
                                {resident.address.houseNumber} {resident.address.street}, {resident.address.purok}
                            </p>
                        </div>

                        <div className="pt-2">
                            <p className="text-[8px] uppercase text-slate-400 font-bold tracking-wider">Emergency Contact</p>
                            <p className="text-[9px] font-semibold text-red-600">0917-000-0000</p>
                        </div>

                    </div>
                </div>

                {/* Footer */}
                <div className="mt-auto pt-1 border-t border-slate-100 flex justify-between items-end">
                    <div className="text-[7px] text-slate-400">This card is non-transferable.</div>
                    <div className="text-right">
                        <div className="h-4 w-16 border-b border-black mb-0.5"></div>
                        <p className="text-[6px] uppercase font-bold text-slate-600">Captain's Signature</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
