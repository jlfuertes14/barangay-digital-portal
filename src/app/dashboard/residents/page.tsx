"use client";

import { useState } from "react";
import {
    Plus,
    Search,
    Filter,
    MoreVertical,
    Eye,
    Edit,
    Trash2,
    FileBadge
} from "lucide-react";
import { MOCK_RESIDENTS, Resident } from "@/types/resident";
import { cn } from "@/lib/utils";
import { AddResidentModal } from "@/components/AddResidentModal";

export default function ResidentsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [residents, setResidents] = useState(MOCK_RESIDENTS);

    const handleAddResident = (data: any) => {
        // Basic mock implementation
        const newResident: Resident = {
            id: `RES-${Math.floor(Math.random() * 1000)}`,
            firstName: data.firstName,
            lastName: data.lastName,
            middleName: data.middleName,
            birthDate: data.birthDate,
            gender: data.gender,
            civilStatus: "Single", // Default
            address: {
                street: data.address,
                purok: data.purok,
                houseNumber: ""
            },
            contactNumber: data.contactNumber,
            status: "Active",
            joinedDate: new Date().toISOString().split('T')[0]
        };

        setResidents([newResident, ...residents]);
    };

    const filteredResidents = residents.filter(resident => {
        const matchesSearch =
            resident.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resident.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resident.id.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = statusFilter === "All" || resident.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    return (
        <div className="space-y-6">
            <AddResidentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddResident}
            />
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white">Resident Directory</h1>
                    <p className="text-slate-400 text-sm">Manage and view all registered barangay inhabitants.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-xl hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all shadow-lg active:scale-95"
                >
                    <Plus className="w-4 h-4 mr-2" />
                    <span>Add Resident</span>
                </button>
            </div>

            {/* Filters & Search */}
            <div className="glass-card p-4 rounded-xl flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative w-full sm:w-96 group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                        placeholder="Search by name, ID, or address..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="flex items-center space-x-2 w-full sm:w-auto">
                    <div className="relative">
                        <select
                            className="appearance-none bg-slate-900/50 border border-slate-700 text-slate-300 py-2.5 pl-4 pr-10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 cursor-pointer hover:border-slate-600 transition-colors"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="All">All Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Moved">Moved</option>
                            <option value="Deceased">Deceased</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <Filter className="h-4 w-4 text-slate-500" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="glass-card rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-800">
                        <thead className="bg-slate-900/50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                                    Resident Info
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                                    Address
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                                    Age / Gender
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                                    Status
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Actions</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            {filteredResidents.map((resident) => (
                                <tr key={resident.id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <div className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold border border-blue-500/30">
                                                    {resident.firstName[0]}{resident.lastName[0]}
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-white">
                                                    {resident.lastName}, {resident.firstName}
                                                </div>
                                                <div className="text-sm text-slate-500 font-mono text-xs">
                                                    ID: {resident.id}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-slate-200">{resident.address.houseNumber} {resident.address.street}</div>
                                        <div className="text-sm text-slate-500">{resident.address.purok}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-slate-200">34 y/o</div>
                                        <div className="text-sm text-slate-500">{resident.gender}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={cn(
                                            "px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border",
                                            resident.status === "Active" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" :
                                                resident.status === "Moved" ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" :
                                                    resident.status === "Deceased" ? "bg-slate-500/10 text-slate-400 border-slate-500/30" :
                                                        "bg-red-500/10 text-red-400 border-red-500/30"
                                        )}>
                                            {resident.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex items-center justify-end space-x-1">
                                            <button className="p-2 text-slate-500 hover:text-blue-400 rounded-lg hover:bg-blue-500/10 transition-colors" title="View Details">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-slate-500 hover:text-emerald-400 rounded-lg hover:bg-emerald-500/10 transition-colors" title="Issue Certificate">
                                                <FileBadge className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-slate-500 hover:text-amber-400 rounded-lg hover:bg-amber-500/10 transition-colors" title="Edit">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {filteredResidents.length === 0 && (
                        <div className="p-12 text-center text-slate-500">
                            <Search className="w-12 h-12 mx-auto text-slate-600 mb-3" />
                            <p className="text-lg font-medium text-white">No residents found</p>
                            <p className="text-sm">Try adjusting your search or filters.</p>
                        </div>
                    )}
                </div>

                {/* Pagination (Visual Only) */}
                <div className="bg-slate-900/50 px-4 py-3 border-t border-slate-800 sm:px-6">
                    <div className="flex items-center justify-between">
                        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm text-slate-400">
                                    Showing <span className="font-medium text-white">1</span> to <span className="font-medium text-white">{filteredResidents.length}</span> of <span className="font-medium text-white">{filteredResidents.length}</span> results
                                </p>
                            </div>
                            <div>
                                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                    <button className="relative inline-flex items-center px-3 py-1.5 rounded-l-lg border border-slate-700 bg-slate-900/50 text-sm font-medium text-slate-400 hover:bg-slate-800 transition-colors">
                                        Previous
                                    </button>
                                    <button className="relative inline-flex items-center px-4 py-1.5 border border-slate-700 bg-blue-600/20 text-sm font-medium text-blue-400 border-blue-500/30">
                                        1
                                    </button>
                                    <button className="relative inline-flex items-center px-3 py-1.5 rounded-r-lg border border-slate-700 bg-slate-900/50 text-sm font-medium text-slate-400 hover:bg-slate-800 transition-colors">
                                        Next
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

