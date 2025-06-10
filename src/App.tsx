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
            {/* Main Microsite Routes */}
            <Route path="/" element={<MicrositeLayout />}>
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
            <Route path="/app" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
              <Route index element={<Navigate to="/app/dashboard" replace />} />
              <Route path="dashboard" element={<OverviewDashboard />} />
              <Route path="executive-dashboard" element={<ExecutiveDashboard />} />
              <Route path="registration">
                <Route path="cbo" element={<CBORegistration />} />
                <Route path="pco" element={<PCORegistration />} />
                <Route path="contractor" element={<ContractorRegistration />} />
              </Route>
              <Route path="budget" element={<BudgetInterface />} />
              <Route path="procurement" element={<ProcurementProcess />} />
              <Route path="project" element={<ProjectImplementation />} />
              <Route path="payment" element={<PaymentFinancial />} />
              <Route path="analytics" element={<AnalyticsReporting />} />
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