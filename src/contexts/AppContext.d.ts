import React from 'react';
interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    organization: string;
    department: string;
    lastLogin: string;
}
interface CBO {
    id: string;
    name: string;
    registrationNumber: string;
    location: string;
    status: string;
    category: string;
    capacity: string;
    projects: number;
    rating: number;
    contact: {
        email: string;
        phone: string;
        address: string;
    };
    members: number;
    established: string;
    certifications: string[];
}
interface Project {
    id: string;
    title: string;
    description: string;
    budget: number;
    status: string;
    location: string;
    startDate: string;
    endDate: string;
    milestones: {
        id: string;
        title: string;
        status: string;
        dueDate: string;
    }[];
    assignedCBO: string;
    progress: number;
    documents: {
        id: string;
        name: string;
        type: string;
        uploaded: string;
    }[];
}
interface Procurement {
    id: string;
    title: string;
    description: string;
    budget: number;
    status: string;
    type: string;
    category: string;
    deadline: string;
    documents: {
        id: string;
        name: string;
        type: string;
        uploaded: string;
    }[];
    bids: {
        id: string;
        vendor: string;
        amount: number;
        status: string;
        submitted: string;
    }[];
}
interface ProjectsResponse {
    items: Project[];
}
interface ProcurementsResponse {
    items: Procurement[];
}
interface AppContextType {
    user: User | null;
    setUser: (user: User | null) => void;
    cbos: CBO[];
    projects: ProjectsResponse;
    procurements: ProcurementsResponse;
    settings: any;
    loading: boolean;
    error: string | null;
    refreshData: () => Promise<void>;
}
export declare const AppProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const useAppContext: () => AppContextType;
export {};
