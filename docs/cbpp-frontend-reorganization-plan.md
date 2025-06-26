# CBPP Frontend Reorganization Plan

## Document Information
- **Project:** Community-Based Procurement Platform (CBPP) Frontend Reorganization
- **Document Version:** 1.0
- **Date:** December 2024
- **Prepared By:** ASOS Consulting Development Team
- **Document Type:** Frontend Reorganization Plan

---

## 1. Overview

### 1.1 Objective
Reorganize the CBPP frontend (`cbpp-fe`) to support both mock/demo functionality and real API integration, enabling a smooth transition from prototype to production while maintaining stakeholder demonstration capabilities.

### 1.2 Current State
```
cbpp-fe/
├── /microsite/*          # Public microsite (unchanged)
├── /dashboard            # Current mock dashboard
├── /contractor           # Current mock contractor pages
├── /admin                # Current mock admin pages
├── /login                # Current mock login
└── ...                   # Other current routes
```

### 1.3 Target State
```
cbpp-fe/
├── /microsite/*          # Public microsite (unchanged)
├── /demo/*               # Mock/demo implementation
│   ├── /demo/dashboard
│   ├── /demo/contractor
│   ├── /demo/admin
│   ├── /demo/login
│   └── ...
├── /app/*                # Real API implementation
│   ├── /app/dashboard
│   ├── /app/contractor
│   ├── /app/admin
│   ├── /app/login
│   └── ...
└── shared/               # Shared components and utilities
```

---

## 2. Route Structure Design

### 2.1 Route Hierarchy
```
cbpp-fe/
├── /microsite/           # Public microsite (unchanged)
│   ├── /                 # Home page
│   ├── /about            # About page
│   ├── /signup           # Signup page
│   ├── /processes        # Processes page
│   ├── /faq              # FAQ page
│   └── /demo             # Demo page
├── /demo/                # Mock/demo routes
│   ├── /demo/login       # Demo login
│   ├── /demo/dashboard   # Demo dashboard
│   ├── /demo/contractor  # Demo contractor pages
│   ├── /demo/admin       # Demo admin pages
│   ├── /demo/evaluator   # Demo evaluator pages
│   ├── /demo/regulator   # Demo regulator pages
│   └── /demo/cbo-manager # Demo CBO manager pages
├── /app/                 # Real API routes
│   ├── /app/login        # Real login
│   ├── /app/dashboard    # Real dashboard
│   ├── /app/contractor   # Real contractor pages
│   ├── /app/admin        # Real admin pages
│   ├── /app/evaluator    # Real evaluator pages
│   ├── /app/regulator    # Real regulator pages
│   └── /app/cbo-manager  # Real CBO manager pages
└── /                     # Redirect to appropriate route
```

### 2.2 Route Configuration
```typescript
// src/routes/index.tsx
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  // Microsite routes (unchanged)
  {
    path: '/microsite/*',
    element: <MicrositeRoutes />
  },
  
  // Demo routes (mock implementation)
  {
    path: '/demo/*',
    element: <DemoRoutes />
  },
  
  // App routes (real API implementation)
  {
    path: '/app/*',
    element: <AppRoutes />
  },
  
  // Root redirect
  {
    path: '/',
    element: <RootRedirect />
  }
]);
```

---

## 3. Component Architecture

### 3.1 Shared Components
```
src/
├── components/
│   ├── shared/           # Shared between demo and app
│   │   ├── Layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Layout.tsx
│   │   ├── UI/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Table.tsx
│   │   │   └── Modal.tsx
│   │   ├── Charts/
│   │   │   ├── BarChart.tsx
│   │   │   ├── LineChart.tsx
│   │   │   └── PieChart.tsx
│   │   └── Forms/
│   │       ├── LoginForm.tsx
│   │       ├── ProfileForm.tsx
│   │       └── DocumentUpload.tsx
│   ├── demo/             # Demo-specific components
│   │   ├── DemoDashboard.tsx
│   │   ├── DemoContractorDashboard.tsx
│   │   └── DemoAdminDashboard.tsx
│   └── app/              # App-specific components
│       ├── AppDashboard.tsx
│       ├── AppContractorDashboard.tsx
│       └── AppAdminDashboard.tsx
```

### 3.2 Service Layer
```
src/
├── services/
│   ├── shared/           # Shared utilities
│   │   ├── formatters.ts
│   │   ├── validators.ts
│   │   └── constants.ts
│   ├── demo/             # Mock data services
│   │   ├── mockApi.ts
│   │   ├── mockData.ts
│   │   └── demoUtils.ts
│   └── app/              # Real API services
│       ├── apiClient.ts
│       ├── authService.ts
│       ├── userService.ts
│       ├── contractorService.ts
│       └── adminService.ts
```

### 3.3 Context Providers
```
src/
├── contexts/
│   ├── shared/           # Shared contexts
│   │   ├── ThemeContext.tsx
│   │   ├── LanguageContext.tsx
│   │   └── NotificationContext.tsx
│   ├── demo/             # Demo contexts
│   │   ├── DemoAuthContext.tsx
│   │   └── DemoDataContext.tsx
│   └── app/              # App contexts
│       ├── AuthContext.tsx
│       ├── UserContext.tsx
│       └── ApiContext.tsx
```

---

## 4. Implementation Strategy

### 4.1 Phase 1: Route Reorganization (Week 1)
1. **Create Route Structure**
   - Set up `/demo/*` routes
   - Set up `/app/*` routes
   - Implement route guards and redirects

2. **Move Existing Components**
   - Move current components to `/demo/` structure
   - Create placeholder components for `/app/` routes
   - Implement shared component extraction

3. **Update Navigation**
   - Create demo navigation
   - Create app navigation
   - Implement route-based navigation switching

### 4.2 Phase 2: Service Layer Implementation (Week 2)
1. **API Service Layer**
   - Create API client with authentication
   - Implement service classes for each module
   - Add error handling and retry logic

2. **Mock Service Layer**
   - Refactor existing mock data
   - Create consistent mock service interfaces
   - Implement mock data persistence

3. **Shared Utilities**
   - Extract common formatters and validators
   - Create shared constants and types
   - Implement utility functions

### 4.3 Phase 3: Component Integration (Week 3)
1. **Real API Integration**
   - Implement real API calls in app components
   - Add loading states and error handling
   - Implement data caching strategies

2. **Demo Enhancement**
   - Improve demo data and interactions
   - Add demo-specific features
   - Implement demo state management

3. **Shared Component Optimization**
   - Optimize shared components for both contexts
   - Implement responsive design improvements
   - Add accessibility features

### 4.4 Phase 4: Testing and Optimization (Week 4)
1. **Testing**
   - Unit tests for shared components
   - Integration tests for API services
   - E2E tests for both demo and app flows

2. **Performance Optimization**
   - Code splitting and lazy loading
   - Bundle size optimization
   - Performance monitoring setup

3. **Documentation**
   - Update component documentation
   - Create API integration guide
   - Document deployment procedures

---

## 5. Detailed Implementation

### 5.1 Route Configuration
```typescript
// src/routes/demoRoutes.tsx
import { Route } from 'react-router-dom';
import DemoLayout from '../components/demo/DemoLayout';
import DemoDashboard from '../components/demo/DemoDashboard';
import DemoContractorDashboard from '../components/demo/DemoContractorDashboard';
import DemoAdminDashboard from '../components/demo/DemoAdminDashboard';

export const demoRoutes = (
  <Route path="/demo" element={<DemoLayout />}>
    <Route index element={<DemoDashboard />} />
    <Route path="contractor" element={<DemoContractorDashboard />} />
    <Route path="admin" element={<DemoAdminDashboard />} />
    <Route path="evaluator" element={<DemoEvaluatorDashboard />} />
    <Route path="regulator" element={<DemoRegulatorDashboard />} />
    <Route path="cbo-manager" element={<DemoCBOManagerDashboard />} />
  </Route>
);

// src/routes/appRoutes.tsx
import { Route } from 'react-router-dom';
import AppLayout from '../components/app/AppLayout';
import AppDashboard from '../components/app/AppDashboard';
import AppContractorDashboard from '../components/app/AppContractorDashboard';
import AppAdminDashboard from '../components/app/AppAdminDashboard';

export const appRoutes = (
  <Route path="/app" element={<AppLayout />}>
    <Route index element={<AppDashboard />} />
    <Route path="contractor" element={<AppContractorDashboard />} />
    <Route path="admin" element={<AppAdminDashboard />} />
    <Route path="evaluator" element={<AppEvaluatorDashboard />} />
    <Route path="regulator" element={<AppRegulatorDashboard />} />
    <Route path="cbo-manager" element={<AppCBOManagerDashboard />} />
  </Route>
);
```

### 5.2 API Service Implementation
```typescript
// src/services/app/apiClient.ts
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';

export const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api/v1`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for authentication
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Handle token refresh or logout
      localStorage.removeItem('accessToken');
      window.location.href = '/app/login';
    }
    return Promise.reject(error);
  }
);

// src/services/app/authService.ts
export class AuthService {
  static async login(email: string, password: string) {
    const response = await apiClient.post('/auth/login', { email, password });
    return response.data;
  }

  static async logout() {
    await apiClient.post('/auth/logout');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  static async refreshToken(refreshToken: string) {
    const response = await apiClient.post('/auth/refresh', { refreshToken });
    return response.data;
  }
}

// src/services/app/contractorService.ts
export class ContractorService {
  static async getDashboard() {
    const response = await apiClient.get('/contractors/dashboard');
    return response.data;
  }

  static async getProfile() {
    const response = await apiClient.get('/contractors/profile');
    return response.data;
  }

  static async updateProfile(profileData: any) {
    const response = await apiClient.put('/contractors/profile', profileData);
    return response.data;
  }

  static async register(registrationData: any) {
    const response = await apiClient.post('/contractors/register', registrationData);
    return response.data;
  }
}
```

### 5.3 Component Implementation
```typescript
// src/components/app/AppContractorDashboard.tsx
import React, { useState, useEffect } from 'react';
import { ContractorService } from '../../services/app/contractorService';
import { DashboardLayout } from '../shared/Layout';
import { LoadingSpinner, ErrorMessage } from '../shared/UI';

interface DashboardData {
  approvalStatus: string;
  approvalProgress: any;
  availableFeatures: string[];
  pendingFeatures: string[];
  recentNotifications: any[];
}

export const AppContractorDashboard: React.FC = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      const response = await ContractorService.getDashboard();
      setDashboardData(response.data);
    } catch (err) {
      setError('Failed to load dashboard data');
      console.error('Dashboard loading error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} onRetry={loadDashboardData} />;
  if (!dashboardData) return <ErrorMessage message="No data available" />;

  return (
    <DashboardLayout>
      <div className="contractor-dashboard">
        <h1>Contractor Dashboard</h1>
        
        {/* Approval Status */}
        <div className="approval-status">
          <h2>Approval Status: {dashboardData.approvalStatus}</h2>
          {/* Render based on approval status */}
        </div>

        {/* Available Features */}
        <div className="available-features">
          <h3>Available Features</h3>
          <ul>
            {dashboardData.availableFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Recent Notifications */}
        <div className="notifications">
          <h3>Recent Notifications</h3>
          {dashboardData.recentNotifications.map((notification, index) => (
            <div key={index} className="notification-item">
              <h4>{notification.title}</h4>
              <p>{notification.message}</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};
```

### 5.4 Context Implementation
```typescript
// src/contexts/app/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthService } from '../../services/app/authService';

interface AuthContextType {
  user: any | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const token = localStorage.getItem('accessToken');
    if (token) {
      // Validate token and get user info
      validateToken();
    } else {
      setLoading(false);
    }
  }, []);

  const validateToken = async () => {
    try {
      // Implement token validation
      setLoading(false);
    } catch (error) {
      localStorage.removeItem('accessToken');
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      setUser(response.data.user);
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await AuthService.logout();
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      logout,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
```

---

## 6. Environment Configuration

### 6.1 Environment Variables
```bash
# .env.development
REACT_APP_API_BASE_URL=http://localhost:8000
REACT_APP_ENVIRONMENT=development
REACT_APP_ENABLE_MOCK=false

# .env.production
REACT_APP_API_BASE_URL=https://api.cbpp.ng
REACT_APP_ENVIRONMENT=production
REACT_APP_ENABLE_MOCK=false

# .env.demo
REACT_APP_API_BASE_URL=http://localhost:8000
REACT_APP_ENVIRONMENT=demo
REACT_APP_ENABLE_MOCK=true
```

### 6.2 Configuration Management
```typescript
// src/config/index.ts
export const config = {
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000',
  environment: process.env.REACT_APP_ENVIRONMENT || 'development',
  enableMock: process.env.REACT_APP_ENABLE_MOCK === 'true',
  features: {
    enableNotifications: true,
    enableAnalytics: true,
    enableDebugMode: process.env.NODE_ENV === 'development',
  }
};
```

---

## 7. Testing Strategy

### 7.1 Unit Tests
```typescript
// src/components/app/__tests__/AppContractorDashboard.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import { AppContractorDashboard } from '../AppContractorDashboard';
import { ContractorService } from '../../../services/app/contractorService';

jest.mock('../../../services/app/contractorService');

describe('AppContractorDashboard', () => {
  it('renders dashboard with data', async () => {
    const mockData = {
      approvalStatus: 'pending_approval',
      availableFeatures: ['profile', 'training'],
      recentNotifications: []
    };

    (ContractorService.getDashboard as jest.Mock).mockResolvedValue({
      data: mockData
    });

    render(<AppContractorDashboard />);

    await waitFor(() => {
      expect(screen.getByText('Contractor Dashboard')).toBeInTheDocument();
      expect(screen.getByText('Approval Status: pending_approval')).toBeInTheDocument();
    });
  });
});
```

### 7.2 Integration Tests
```typescript
// src/services/app/__tests__/contractorService.test.ts
import { ContractorService } from '../contractorService';
import { apiClient } from '../apiClient';

jest.mock('../apiClient');

describe('ContractorService', () => {
  it('fetches dashboard data successfully', async () => {
    const mockResponse = { data: { success: true, data: {} } };
    (apiClient.get as jest.Mock).mockResolvedValue(mockResponse);

    const result = await ContractorService.getDashboard();
    expect(result).toEqual(mockResponse.data);
  });
});
```

---

## 8. Deployment Strategy

### 8.1 Build Configuration
```json
// package.json
{
  "scripts": {
    "build": "react-scripts build",
    "build:demo": "env-cmd -f .env.demo react-scripts build",
    "build:app": "env-cmd -f .env.production react-scripts build",
    "start:demo": "env-cmd -f .env.demo react-scripts start",
    "start:app": "env-cmd -f .env.production react-scripts start"
  }
}
```

### 8.2 Docker Configuration
```dockerfile
# Dockerfile
FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build:app

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 9. Migration Checklist

### 9.1 Phase 1: Route Setup
- [ ] Create route structure for `/demo/*` and `/app/*`
- [ ] Implement route guards and authentication
- [ ] Set up navigation components
- [ ] Create root redirect logic

### 9.2 Phase 2: Component Migration
- [ ] Move existing components to demo structure
- [ ] Create app-specific components
- [ ] Extract shared components
- [ ] Implement loading and error states

### 9.3 Phase 3: Service Integration
- [ ] Implement API service layer
- [ ] Create authentication service
- [ ] Add error handling and retry logic
- [ ] Implement data caching

### 9.4 Phase 4: Testing and Deployment
- [ ] Write unit and integration tests
- [ ] Set up CI/CD pipeline
- [ ] Configure environment variables
- [ ] Deploy to staging and production

---

## 10. Success Metrics

### 10.1 Technical Metrics
- **Build Time:** < 3 minutes
- **Bundle Size:** < 2MB (gzipped)
- **Load Time:** < 2 seconds for initial page load
- **Test Coverage:** > 80%

### 10.2 User Experience Metrics
- **Demo Functionality:** 100% of current features preserved
- **API Integration:** Successful connection to backend
- **Error Handling:** Graceful error states for all scenarios
- **Performance:** No regression in user interactions

---

*Document Version: 1.0*  
*Last Updated: December 2024*  
*Prepared by: ASOS Consulting Development Team*
