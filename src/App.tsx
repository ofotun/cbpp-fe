import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppProvider } from './contexts/AppContext';
import { NavigationProvider } from './contexts/NavigationContext';
import { theme } from './theme';
import Login from './pages/Login';
import { ExecutiveDashboard, OverviewDashboard } from './pages/dashboard';
import Layout from './components/Layout';
import { EmptyDashboard } from './components/EmptyDashboard';
import { HomePage } from './microsite/pages/Home';
import { ProcessesPage } from './microsite/pages/Processes';
import { FAQPage } from './microsite/pages/FAQ';
import { StrategicPartnersPage } from './microsite/pages/StrategicPartners';
import { SignupPage } from './microsite/pages/Signup';
import { AboutPage } from './microsite/pages/About';
import { TermsOfServicePage } from './microsite/pages/TermsOfService';
import { PrivacyPolicyPage } from './microsite/pages/PrivacyPolicy';
import { MicrositeLayout } from './microsite/components/MicrositeLayout';
import { SignupLayout } from './microsite/components/SignupLayout';
import CBORegistration from './pages/registration/CBORegistration';
import PCORegistration from './pages/registration/PCORegistration';
import ContractorRegistration from './pages/registration/ContractorRegistration';
import BudgetInterface from './pages/budget/BudgetInterface';
import ProcurementProcess from './pages/procurement/ProcurementProcess';
import ProjectImplementation from './pages/project/ProjectImplementation';
import PaymentFinancial from './pages/payment/PaymentFinancial';
import AnalyticsReporting from './pages/analytics/AnalyticsReporting';

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  // This is a simple mock implementation
  // In a real app, you would check for a valid token/session
  const isAuthenticated = localStorage.getItem('user') !== null;
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

// Role-based protected route component
const RoleProtectedRoute = ({ 
  children, 
  allowedRoles 
}: { 
  children: React.ReactNode;
  allowedRoles: string[];
}) => {
  const isAuthenticated = localStorage.getItem('user') !== null;
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Check if user has the required role
  const userData = localStorage.getItem('user');
  if (userData) {
    try {
      const user = JSON.parse(userData);
      if (!allowedRoles.includes(user.userType)) {
        // Redirect to appropriate role dashboard
        return <Navigate to={`/${user.userType}/dashboard`} replace />;
      }
    } catch (e) {
      return <Navigate to="/login" replace />;
    }
  }
  
  return <>{children}</>;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppProvider>
        <NavigationProvider>
          <Routes>
            {/* Main Microsite Routes */}
            <Route path="/" element={<MicrositeLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="processes" element={<ProcessesPage />} />
              <Route path="faq" element={<FAQPage />} />
              <Route path="partners" element={<StrategicPartnersPage />} />
              <Route path="terms" element={<TermsOfServicePage />} />
              <Route path="privacy" element={<PrivacyPolicyPage />} />
            </Route>

            {/* Signup Route with minimal navigation */}
            <Route path="/signup" element={<SignupLayout />}>
              <Route index element={<SignupPage />} />
            </Route>

            {/* Login Route */}
            <Route path="/login" element={<Login />} />

            {/* Administrator Routes - Current Dashboard */}
            <Route path="/app" element={<RoleProtectedRoute allowedRoles={['admin']}><Layout /></RoleProtectedRoute>}>
              <Route index element={<Navigate to="/app/dashboard" replace />} />
              
              {/* Dashboard Routes */}
              <Route path="dashboard" element={<OverviewDashboard />} />
              <Route path="dashboard/overview" element={<OverviewDashboard />} />
              <Route path="dashboard/executive" element={<ExecutiveDashboard />} />
              <Route path="executive-dashboard" element={<ExecutiveDashboard />} />
              
              {/* Registration Routes */}
              <Route path="registration">
                <Route path="cbo" element={<CBORegistration />} />
                <Route path="pco" element={<PCORegistration />} />
                <Route path="contractor" element={<ContractorRegistration />} />
              </Route>
              
              {/* Procurement Routes */}
              <Route path="procurement">
                <Route path="planning" element={<ProcurementProcess />} />
                <Route path="requests" element={<ProcurementProcess />} />
                <Route path="tenders" element={<ProcurementProcess />} />
                <Route path="contracts" element={<ProcurementProcess />} />
              </Route>
              <Route path="procurement" element={<ProcurementProcess />} />
              
              {/* Budget Routes */}
              <Route path="budget">
                <Route path="allocation" element={<BudgetInterface />} />
                <Route path="expenditure" element={<BudgetInterface />} />
              </Route>
              <Route path="budget" element={<BudgetInterface />} />
              
              {/* Project Implementation Routes */}
              <Route path="projects">
                <Route path="tracking" element={<ProjectImplementation />} />
                <Route path="oversight" element={<ProjectImplementation />} />
              </Route>
              <Route path="project" element={<ProjectImplementation />} />
              
              {/* Payment & Financial Routes */}
              <Route path="payments">
                <Route path="processing" element={<PaymentFinancial />} />
                <Route path="reporting" element={<PaymentFinancial />} />
              </Route>
              <Route path="payment" element={<PaymentFinancial />} />
              
              {/* Analytics & Reporting Routes */}
              <Route path="reports">
                <Route path="procurement" element={<AnalyticsReporting />} />
                <Route path="financial" element={<AnalyticsReporting />} />
                <Route path="audit" element={<AnalyticsReporting />} />
              </Route>
              <Route path="analytics" element={<AnalyticsReporting />} />
              
              {/* Additional Routes */}
              <Route path="vendors" element={<div>Vendors Management (Coming Soon)</div>} />
              <Route path="inventory" element={<div>Inventory Management (Coming Soon)</div>} />
              <Route path="training" element={<div>Training Platform (Coming Soon)</div>} />
              <Route path="integration" element={<div>Integration Management (Coming Soon)</div>} />
              <Route path="settings" element={<div>Settings (Coming Soon)</div>} />
            </Route>

            {/* Contractor Routes */}
            <Route path="/contractor" element={<ProtectedRoute><EmptyDashboard role="contractor" /></ProtectedRoute>}>
              <Route index element={<Navigate to="/contractor/dashboard" replace />} />
              <Route path="dashboard" element={<EmptyDashboard role="contractor" />} />
            </Route>

            {/* Procurement Officer Routes */}
            <Route path="/procurement_officer" element={<ProtectedRoute><EmptyDashboard role="procurement_officer" /></ProtectedRoute>}>
              <Route index element={<Navigate to="/procurement_officer/dashboard" replace />} />
              <Route path="dashboard" element={<EmptyDashboard role="procurement_officer" />} />
            </Route>

            {/* CBO Manager Routes */}
            <Route path="/cbo_manager" element={<ProtectedRoute><EmptyDashboard role="cbo_manager" /></ProtectedRoute>}>
              <Route index element={<Navigate to="/cbo_manager/dashboard" replace />} />
              <Route path="dashboard" element={<EmptyDashboard role="cbo_manager" />} />
            </Route>

            {/* Project Manager Routes */}
            <Route path="/project_manager" element={<ProtectedRoute><EmptyDashboard role="project_manager" /></ProtectedRoute>}>
              <Route index element={<Navigate to="/project_manager/dashboard" replace />} />
              <Route path="dashboard" element={<EmptyDashboard role="project_manager" />} />
            </Route>

            {/* Regulator Routes */}
            <Route path="/regulator" element={<ProtectedRoute><EmptyDashboard role="regulator" /></ProtectedRoute>}>
              <Route index element={<Navigate to="/regulator/dashboard" replace />} />
              <Route path="dashboard" element={<EmptyDashboard role="regulator" />} />
            </Route>

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </NavigationProvider>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App; 