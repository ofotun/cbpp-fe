import {
  mockUser,
  mockCBOs,
  mockProjects,
  mockProcurements,
  mockSettings,
  mockContractors,
} from './mockData';

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockApi = {
  // User related endpoints
  login: async (username: string, password: string, userType: string) => {
    await delay(1000);
    return mockUser;
  },

  logout: async () => {
    await delay(500);
    return { success: true };
  },

  // CBO related endpoints
  getCBOs: async () => {
    await delay(800);
    return mockCBOs;
  },

  getCBO: async (id: string) => {
    await delay(500);
    return mockCBOs.find((cbo) => cbo.id === id);
  },

  createCBO: async (data: any) => {
    await delay(1000);
    return { ...data, id: `cbo-${mockCBOs.length + 1}` };
  },

  updateCBO: async (id: string, data: any) => {
    await delay(800);
    return { ...data, id };
  },

  // PCO related endpoints
  getPCOs: async () => {
    await delay(800);
    return [];
  },

  getPCO: async (id: string) => {
    await delay(500);
    return null;
  },

  createPCO: async (data: any) => {
    await delay(1000);
    return { ...data, id: `pco-${Date.now()}` };
  },

  updatePCO: async (id: string, data: any) => {
    await delay(800);
    return { ...data, id };
  },

  // Project related endpoints
  getProjects: async (): Promise<{ items: Project[] }> => {
    await delay(800);
    return { items: [] };
  },

  getProject: async (id: string): Promise<Project | null> => {
    await delay(500);
    return null;
  },

  createProject: async (data: Omit<Project, 'id'>): Promise<Project> => {
    await delay(1000);
    return {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
  },

  updateProject: async (id: string, data: Partial<Project>): Promise<Project> => {
    await delay(800);
    return {
      ...data,
      id,
      updatedAt: new Date().toISOString(),
    } as Project;
  },

  deleteProject: async (id: string): Promise<void> => {
    await delay(500);
  },

  // Procurement related endpoints
  getProcurements: async (): Promise<{ items: Procurement[] }> => {
    await delay(800);
    return { items: [] };
  },

  getProcurement: async (id: string): Promise<Procurement | null> => {
    await delay(500);
    return null;
  },

  createProcurement: async (data: Omit<Procurement, 'id'>): Promise<Procurement> => {
    await delay(1000);
    return {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
  },

  updateProcurement: async (id: string, data: Partial<Procurement>): Promise<Procurement> => {
    await delay(800);
    return {
      ...data,
      id,
      updatedAt: new Date().toISOString(),
    } as Procurement;
  },

  deleteProcurement: async (id: string): Promise<void> => {
    await delay(500);
  },

  // Bid related endpoints
  submitBid: async (procurementId: string, data: any) => {
    await delay(1000);
    return {
      ...data,
      id: `bid-${Date.now()}`,
      status: 'Submitted',
      submitted: new Date().toISOString(),
    };
  },

  // Settings related endpoints
  getSettings: async () => {
    await delay(500);
    return mockSettings;
  },

  updateSettings: async (data: any) => {
    await delay(800);
    return { ...mockSettings, ...data };
  },

  // Contractor endpoints
  getContractors: async (): Promise<any[]> => {
    await delay(800);
    return mockContractors;
  },

  getContractor: async (id: string): Promise<any | null> => {
    await delay(500);
    return mockContractors.find(contractor => contractor.id === id) || null;
  },

  createContractor: async (data: any): Promise<any> => {
    await delay(1000);
    const newContractor = {
      ...data,
      id: `cont-${mockContractors.length + 1}`,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    mockContractors.push(newContractor);
    return newContractor;
  },

  updateContractor: async (id: string, data: any): Promise<any> => {
    await delay(800);
    const index = mockContractors.findIndex(contractor => contractor.id === id);
    if (index === -1) return null;
    
    const updatedContractor = {
      ...mockContractors[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    mockContractors[index] = updatedContractor;
    return updatedContractor;
  },

  // Budget endpoints
  getBudgetItems: async (): Promise<any[]> => {
    await delay(800);
    return [];
  },

  getBudgetItem: async (id: string): Promise<any | null> => {
    await delay(500);
    return null;
  },

  createBudgetItem: async (data: any): Promise<any> => {
    await delay(1000);
    return {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
  },

  updateBudgetItem: async (id: string, data: any): Promise<any> => {
    await delay(800);
    return {
      ...data,
      id,
      updatedAt: new Date().toISOString(),
    };
  },

  deleteBudgetItem: async (id: string): Promise<void> => {
    await delay(500);
  },

  // Payment endpoints
  getPayments: async (): Promise<{ items: Payment[] }> => {
    await delay(800);
    return { items: [] };
  },

  getPayment: async (id: string): Promise<Payment | null> => {
    await delay(500);
    return null;
  },

  createPayment: async (data: Omit<Payment, 'id'>): Promise<Payment> => {
    await delay(1000);
    return {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
  },

  updatePayment: async (id: string, data: Partial<Payment>): Promise<Payment> => {
    await delay(800);
    return {
      ...data,
      id,
      updatedAt: new Date().toISOString(),
    } as Payment;
  },

  deletePayment: async (id: string): Promise<void> => {
    await delay(500);
  },

  // Analytics endpoints
  getAnalytics: async (timeRange: string) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
      projectStats: {
        totalProjects: 0,
        completedProjects: 0,
        inProgressProjects: 0,
        totalBudget: 0,
        spentBudget: 0,
      },
      cboStats: {
        totalCBOs: 0,
        activeCBOs: 0,
        completedProjects: 0,
        totalBudget: 0,
      },
      projectData: [
        { name: 'Completed', value: 0 },
        { name: 'In Progress', value: 0 },
        { name: 'Planned', value: 0 },
      ],
      cboData: [
        { name: 'Active', value: 0 },
        { name: 'Inactive', value: 0 },
      ],
    };
  },
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