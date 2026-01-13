export type ResidentStatus = "Active" | "Inactive" | "Deceased" | "Moved";

export interface Resident {
    id: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    suffix?: string;
    birthDate: string;
    gender: "Male" | "Female";
    civilStatus: "Single" | "Married" | "Widowed" | "Separated";
    address: {
        street: string;
        purok: string; // Zone
        houseNumber: string;
    };
    contactNumber: string;
    email?: string;
    occupation?: string;
    status: ResidentStatus;
    joinedDate: string;
    profileImage?: string;
}

export const MOCK_RESIDENTS: Resident[] = [
    {
        id: "RES-001",
        firstName: "Juan",
        lastName: "Dela Cruz",
        birthDate: "1985-03-15",
        gender: "Male",
        civilStatus: "Married",
        address: { street: "Maharlika St.", purok: "Zone 1", houseNumber: "123" },
        contactNumber: "09171234567",
        status: "Active",
        joinedDate: "2024-01-10",
        occupation: "Jeepney Driver"
    },
    {
        id: "RES-002",
        firstName: "Maria",
        lastName: "Santos",
        birthDate: "1990-07-22",
        gender: "Female",
        civilStatus: "Single",
        address: { street: "Rizal Ave.", purok: "Zone 2", houseNumber: "45-B" },
        contactNumber: "09187654321",
        status: "Active",
        joinedDate: "2024-01-15",
        occupation: "School Teacher"
    },
    {
        id: "RES-003",
        firstName: "Pedro",
        lastName: "Penduko",
        birthDate: "1995-11-30",
        gender: "Male",
        civilStatus: "Single",
        address: { street: "Mabini St.", purok: "Zone 1", houseNumber: "88" },
        contactNumber: "09223334444",
        status: "Moved",
        joinedDate: "2023-11-05",
        occupation: "Freelancer"
    },
    {
        id: "RES-004",
        firstName: "Jose",
        lastName: "Rizal",
        birthDate: "1861-06-19",
        gender: "Male",
        civilStatus: "Married",
        address: { street: "Bagumbayan", purok: "Zone 3", houseNumber: "1" },
        contactNumber: "09990001111",
        status: "Active",
        joinedDate: "2024-02-01",
        occupation: "Doctor"
    },
    {
        id: "RES-005",
        firstName: "Gabriela",
        lastName: "Silang",
        birthDate: "1731-03-19",
        gender: "Female",
        civilStatus: "Widowed",
        address: { street: "Revolution St.", purok: "Zone 4", houseNumber: "1896" },
        contactNumber: "09887776666",
        status: "Active",
        joinedDate: "2024-01-20",
        occupation: "Government Employee"
    }
];
