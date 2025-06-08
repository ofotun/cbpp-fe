import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppProvider } from './contexts/AppContext';
import { NavigationProvider } from './contexts/NavigationContext';
import { theme } from './theme';
import Login from './pages/Login';
import { ExecutiveDashboard, OverviewDashboard } from './pages/dashboard';
import Layout from './components/Layout';
import { HomePage } from './microsite/pages/Home';
import { ProcessesPage } from './microsite/pages/Processes';
import { FAQPage } from './microsite/pages/FAQ';
import { StrategicPartnersPage } from './microsite/pages/StrategicPartners';
import { SignupPage } from './microsite/pages/Signup';
import { AboutPage } from './microsite/pages/About';
import { MicrositeLayout } from './microsite/components/MicrositeLayout';
import { SignupLayout } from './microsite/components/SignupLayout';
import NgFirstRoutes from './ng-first/routes';
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppProvider>
        <NavigationProvider>
          <Routes>
            {/* Nigeria First Main Routes */}
            <Route path="/*" element={<NgFirstRoutes />} />

            {/* CBPP Microsite Routes */}
            <Route path="/cbpp/*" element={<MicrositeLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="processes" element={<ProcessesPage />} />
              <Route path="faq" element={<FAQPage />} />
              <Route path="partners" element={<StrategicPartnersPage />} />
            </Route>

            {/* Signup Route with minimal navigation */}
            <Route path="/signup" element={<SignupLayout />}>
              <Route index element={<SignupPage />} />
            </Route>

            {/* Login Route */}
            <Route path="/login" element={<Login />} />

            {/* Protected Application Routes */}
            <Route 
              path="/app" 
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/app/dashboard" replace />} />
              <Route path="dashboard">
                <Route index element={<Navigate to="/app/dashboard/overview" replace />} />
                <Route path="overview" element={<OverviewDashboard />} />
                <Route path="executive" element={<ExecutiveDashboard />} />
              </Route>
              
              {/* Registration & Qualification */}
              <Route path="registration">
                <Route path="cbo" element={<CBORegistration />} />
                <Route path="pco" element={<PCORegistration />} />
                <Route path="contractor" element={<ContractorRegistration />} />
              </Route>

              {/* Budget Interface */}
              <Route path="budget">
                <Route path="management" element={<BudgetInterface />} />
                <Route path="integration" element={<BudgetInterface />} />
                <Route path="eligibility" element={<BudgetInterface />} />
              </Route>

              {/* Procurement Process */}
              <Route path="procurement">
                <Route path="planning" element={<ProcurementProcess />} />
                <Route path="tendering" element={<ProcurementProcess />} />
                <Route path="contracts" element={<ProcurementProcess />} />
              </Route>

              {/* Project Implementation */}
              <Route path="projects">
                <Route path="tracking" element={<ProjectImplementation />} />
                <Route path="oversight" element={<ProjectImplementation />} />
              </Route>

              {/* Payment & Financial */}
              <Route path="payments">
                <Route path="processing" element={<PaymentFinancial />} />
                <Route path="reporting" element={<PaymentFinancial />} />
              </Route>

              {/* Analytics & Reporting */}
              <Route path="analytics">
                <Route path="dashboard" element={<AnalyticsReporting />} />
                <Route path="impact" element={<AnalyticsReporting />} />
              </Route>

              {/* Learning & Development */}
              <Route path="learning">
                <Route path="training" element={<div>Training Platform</div>} />
                <Route path="knowledge" element={<div>Knowledge Base</div>} />
              </Route>

              {/* Settings */}
              <Route path="settings" element={<div>Settings</div>} />
              
              {/* Additional routes for card navigation */}
              <Route path="vendors" element={<div>Vendors Content</div>} />
              <Route path="inventory" element={<div>Inventory Content</div>} />
              <Route path="reports/*" element={<div>Reports Content</div>} />
              <Route path="training" element={<div>Training Content</div>} />
              <Route path="integration" element={<div>Integration Content</div>} />

              {/* Catch all route */}
              <Route path="*" element={<Navigate to="/app/dashboard" replace />} />
            </Route>
          </Routes>
        </NavigationProvider>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App; 