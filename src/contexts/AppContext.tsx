import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockApi } from '../services/mockApi';

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
  lga: string;
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
  currency: string;
  status: string;
  location: string;
  lga: string;
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

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize user state from localStorage if available
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        return JSON.parse(savedUser);
      } catch (e) {
        console.error('Error parsing user data from localStorage:', e);
        localStorage.removeItem('user');
        return null;
      }
    }
    return null;
  });
  
  const [cbos, setCBOs] = useState<CBO[]>([]);
  const [projects, setProjects] = useState<ProjectsResponse>({ items: [] });
  const [procurements, setProcurements] = useState<ProcurementsResponse>({ items: [] });
  const [settings, setSettings] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refreshData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [
        cbosData,
        projectsData,
        procurementsData,
        settingsData,
      ] = await Promise.all([
        mockApi.getCBOs(),
        mockApi.getProjects(),
        mockApi.getProcurements(),
        mockApi.getSettings(),
      ]);

      // Map cbosData to match the CBO interface
      const mappedCBOs = cbosData.map((cbo: any) => ({
        id: cbo.id,
        name: cbo.name,
        registrationNumber: cbo.registrationNumber || '',
        location: cbo.location || '',
        lga: cbo.lga || '',
        status: cbo.status || '',
        category: cbo.category || '',
        capacity: cbo.capacity || '',
        projects: cbo.projects || 0,
        rating: cbo.rating || 0,
        contact: cbo.contact || {
          email: cbo.contact?.email || '',
          phone: cbo.contact?.phone || '',
          address: cbo.contact?.address || '',
        },
        members: cbo.members || 0,
        established: cbo.established || '',
        certifications: cbo.certifications || [],
      }));

      setCBOs(mappedCBOs);
      
      // Using type assertion to handle the type discrepancy
      setProjects(projectsData as unknown as ProjectsResponse);
      setProcurements(procurementsData as unknown as ProcurementsResponse);
      
      setSettings(settingsData);
    } catch (err) {
      setError('Failed to load data. Please try again later.');
      console.error('Error loading data:', err);
    } finally {
      setLoading(false);
    }
  };

  // Effect to persist user data to localStorage when it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      refreshData();
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        cbos,
        projects,
        procurements,
        settings,
        loading,
        error,
        refreshData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}; 