export declare const mockApi: {
    login: (username: string, password: string, userType: string) => Promise<{
        id: string;
        name: string;
        email: string;
        role: string;
        organization: string;
        department: string;
        lastLogin: string;
    }>;
    logout: () => Promise<{
        success: boolean;
    }>;
    getCBOs: () => Promise<{
        id: string;
        name: string;
        type: string;
        registrationNumber: string;
        contactPerson: {
            name: string;
            position: string;
            email: string;
            phone: string;
        };
        address: {
            street: string;
            city: string;
            lga: string;
            state: string;
        };
        status: string;
    }[]>;
    getCBO: (id: string) => Promise<{
        id: string;
        name: string;
        type: string;
        registrationNumber: string;
        contactPerson: {
            name: string;
            position: string;
            email: string;
            phone: string;
        };
        address: {
            street: string;
            city: string;
            lga: string;
            state: string;
        };
        status: string;
    } | undefined>;
    createCBO: (data: any) => Promise<any>;
    updateCBO: (id: string, data: any) => Promise<any>;
    getPCOs: () => Promise<never[]>;
    getPCO: (id: string) => Promise<null>;
    createPCO: (data: any) => Promise<any>;
    updatePCO: (id: string, data: any) => Promise<any>;
    getProjects: () => Promise<{
        items: Project[];
    }>;
    getProject: (id: string) => Promise<Project | null>;
    createProject: (data: Omit<Project, "id">) => Promise<Project>;
    updateProject: (id: string, data: Partial<Project>) => Promise<Project>;
    deleteProject: (id: string) => Promise<void>;
    getProcurements: () => Promise<{
        items: Procurement[];
    }>;
    getProcurement: (id: string) => Promise<Procurement | null>;
    createProcurement: (data: Omit<Procurement, "id">) => Promise<Procurement>;
    updateProcurement: (id: string, data: Partial<Procurement>) => Promise<Procurement>;
    deleteProcurement: (id: string) => Promise<void>;
    submitBid: (procurementId: string, data: any) => Promise<any>;
    getSettings: () => Promise<{
        notifications: {
            email: boolean;
            sms: boolean;
            push: boolean;
        };
        security: {
            twoFactorAuth: boolean;
            sessionTimeout: number;
            passwordPolicy: {
                minLength: number;
                requireNumbers: boolean;
                requireSpecialChars: boolean;
            };
        };
        preferences: {
            language: string;
            timezone: string;
            dateFormat: string;
            theme: string;
        };
    }>;
    updateSettings: (data: any) => Promise<any>;
    getContractors: () => Promise<any[]>;
    getContractor: (id: string) => Promise<any | null>;
    createContractor: (data: any) => Promise<any>;
    updateContractor: (id: string, data: any) => Promise<any>;
    getBudgetItems: () => Promise<any[]>;
    getBudgetItem: (id: string) => Promise<any | null>;
    createBudgetItem: (data: any) => Promise<any>;
    updateBudgetItem: (id: string, data: any) => Promise<any>;
    deleteBudgetItem: (id: string) => Promise<void>;
    getPayments: () => Promise<{
        items: Payment[];
    }>;
    getPayment: (id: string) => Promise<Payment | null>;
    createPayment: (data: Omit<Payment, "id">) => Promise<Payment>;
    updatePayment: (id: string, data: Partial<Payment>) => Promise<Payment>;
    deletePayment: (id: string) => Promise<void>;
    getAnalytics: (timeRange: string) => Promise<{
        projectStats: {
            totalProjects: number;
            completedProjects: number;
            inProgressProjects: number;
            totalBudget: number;
            spentBudget: number;
        };
        cboStats: {
            totalCBOs: number;
            activeCBOs: number;
            completedProjects: number;
            totalBudget: number;
        };
        projectData: {
            name: string;
            value: number;
        }[];
        cboData: {
            name: string;
            value: number;
        }[];
    }>;
};
interface Procurement {
    id: string;
    title: string;
    description: string;
    category: string;
    budget: number;
    status: string;
    startDate: string;
    endDate: string;
    bids: Bid[];
    createdAt?: string;
    updatedAt?: string;
}
interface Bid {
    id: string;
    contractorId: string;
    amount: number;
    status: string;
    submittedAt: string;
}
interface Project {
    id: string;
    title: string;
    description: string;
    status: string;
    startDate: string;
    endDate: string;
    budget: number;
    progress: number;
    milestones: Milestone[];
    documents: Document[];
    createdAt?: string;
    updatedAt?: string;
}
interface Milestone {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    status: string;
    completionDate?: string;
}
interface Document {
    id: string;
    name: string;
    type: string;
    uploaded: string;
}
interface Payment {
    id: string;
    projectId: string;
    amount: number;
    status: string;
    type: string;
    date: string;
    description: string;
    recipient: string;
    paymentMethod: string;
    reference: string;
    createdAt?: string;
    updatedAt?: string;
}
export {};
