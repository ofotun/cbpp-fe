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
import { DemoPage } from './microsite/pages/Demo';
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

// Contractor Components
import ContractorLayout from './layouts/ContractorLayout';
import ContractorDashboard from './pages/contractor/ContractorDashboard';
import ContractorProfile from './pages/contractor/ContractorProfile';
import ContractorTenders from './pages/contractor/ContractorTenders';
import ContractorContracts from './pages/contractor/ContractorContracts';
import ContractorPlatformPayments from './pages/contractor/ContractorPlatformPayments';
import ContractorContractPayments from './pages/contractor/ContractorContractPayments';
import ContractorReports from './pages/contractor/ContractorReports';
import ContractorTraining from './pages/contractor/ContractorTraining';
import ContractorNotifications from './pages/contractor/ContractorNotifications';
import ContractorSettings from './pages/contractor/ContractorSettings';

// Procurement Officer Components
import ProcurementOfficerLayout from './layouts/ProcurementOfficerLayout';
import ProcurementOfficerDashboard from './pages/procurement_officer/ProcurementOfficerDashboard';
import ProcurementOfficerProfile from './pages/procurement_officer/ProcurementOfficerProfile';
import ProcurementOfficerProcurement from './pages/procurement_officer/ProcurementOfficerProcurement';
import ProcurementOfficerReports from './pages/procurement_officer/ProcurementOfficerReports';
import ProcurementOfficerSettings from './pages/procurement_officer/ProcurementOfficerSettings';

// CBO Manager Components
import CBOManagerLayout from './layouts/CBOManagerLayout';
import CBOManagerDashboard from './pages/cbo_manager/CBOManagerDashboard';
import CBOManagerProfile from './pages/cbo_manager/CBOManagerProfile';
import CBOManagerMembers from './pages/cbo_manager/CBOManagerMembers';
import CBOManagerProjects from './pages/cbo_manager/CBOManagerProjects';
import CBOManagerReports from './pages/cbo_manager/CBOManagerReports';
import CBOManagerSettings from './pages/cbo_manager/CBOManagerSettings';

// Project Manager Components
import ProjectManagerLayout from './layouts/ProjectManagerLayout';
import ProjectManagerDashboard from './pages/project_manager/ProjectManagerDashboard';
import ProjectManagerProfile from './pages/project_manager/ProjectManagerProfile';
import ProjectManagerProjects from './pages/project_manager/ProjectManagerProjects';
import ProjectManagerTimeline from './pages/project_manager/ProjectManagerTimeline';
import ProjectManagerReports from './pages/project_manager/ProjectManagerReports';
import ProjectManagerSettings from './pages/project_manager/ProjectManagerSettings';

// Regulator Components
import RegulatorLayout from './layouts/RegulatorLayout';
import RegulatorDashboard from './pages/regulator/RegulatorDashboard';
import RegulatorProfile from './pages/regulator/RegulatorProfile';
import RegulatorOversight from './pages/regulator/RegulatorOversight';
import RegulatorCompliance from './pages/regulator/RegulatorCompliance';
import RegulatorReports from './pages/regulator/RegulatorReports';
import RegulatorSettings from './pages/regulator/RegulatorSettings';

// Evaluator Components
import EvaluatorLayout from './layouts/EvaluatorLayout';
import EvaluatorDashboard from './pages/evaluator/EvaluatorDashboard';
import EvaluatorProfile from './pages/evaluator/EvaluatorProfile';
import EvaluatorEvaluations from './pages/evaluator/EvaluatorEvaluations';
import EvaluatorScoring from './pages/evaluator/EvaluatorScoring';
import EvaluatorFilters from './pages/evaluator/EvaluatorFilters';
import EvaluatorGeolocation from './pages/evaluator/EvaluatorGeolocation';
import EvaluatorAnalytics from './pages/evaluator/EvaluatorAnalytics';
import EvaluatorSettings from './pages/evaluator/EvaluatorSettings';

// BPP Admin Components
import BPPAdminLayout from './layouts/BPPAdminLayout';
import BPPAdminDashboard from './pages/bpp_admin/BPPAdminDashboard';
import BPPAdminProfile from './pages/bpp_admin/BPPAdminProfile';
import BPPAdminTenders from './pages/bpp_admin/BPPAdminTenders';
import BPPAdminQuotas from './pages/bpp_admin/BPPAdminQuotas';
import BPPAdminReports from './pages/bpp_admin/BPPAdminReports';
import BPPAdminConfiguration from './pages/bpp_admin/BPPAdminConfiguration';
import BPPAdminAnalytics from './pages/bpp_admin/BPPAdminAnalytics';
import BPPAdminSettings from './pages/bpp_admin/BPPAdminSettings';

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
              <Route path="demo" element={<DemoPage />} />
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
            <Route path="/contractor" element={<ProtectedRoute><ContractorLayout /></ProtectedRoute>}>
              <Route index element={<Navigate to="/contractor/dashboard" replace />} />
              <Route path="dashboard" element={<ContractorDashboard />} />
              <Route path="profile" element={<ContractorProfile />} />
              <Route path="procurement">
                <Route path="tenders" element={<ContractorTenders />} />
                <Route path="contracts" element={<ContractorContracts />} />
              </Route>
              <Route path="payments">
                <Route path="platform" element={<ContractorPlatformPayments />} />
                <Route path="contracts" element={<ContractorContractPayments />} />
              </Route>
              <Route path="reports" element={<ContractorReports />} />
              <Route path="training" element={<ContractorTraining />} />
              <Route path="notifications" element={<ContractorNotifications />} />
              <Route path="settings" element={<ContractorSettings />} />
            </Route>

            {/* Procurement Officer Routes */}
            <Route path="/procurement_officer" element={<ProtectedRoute><ProcurementOfficerLayout /></ProtectedRoute>}>
              <Route index element={<Navigate to="/procurement_officer/dashboard" replace />} />
              <Route path="dashboard" element={<ProcurementOfficerDashboard />} />
              <Route path="profile" element={<ProcurementOfficerProfile />} />
              <Route path="procurement" element={<ProcurementOfficerProcurement />} />
              <Route path="reports" element={<ProcurementOfficerReports />} />
              <Route path="settings" element={<ProcurementOfficerSettings />} />
            </Route>

            {/* CBO Manager Routes */}
            <Route path="/cbo_manager" element={<ProtectedRoute><CBOManagerLayout /></ProtectedRoute>}>
              <Route index element={<Navigate to="/cbo_manager/dashboard" replace />} />
              <Route path="dashboard" element={<CBOManagerDashboard />} />
              <Route path="profile" element={<CBOManagerProfile />} />
              <Route path="members" element={<CBOManagerMembers />} />
              <Route path="projects" element={<CBOManagerProjects />} />
              <Route path="reports" element={<CBOManagerReports />} />
              <Route path="settings" element={<CBOManagerSettings />} />
            </Route>

            {/* Project Manager Routes */}
            <Route path="/project_manager" element={<ProtectedRoute><ProjectManagerLayout /></ProtectedRoute>}>
              <Route index element={<Navigate to="/project_manager/dashboard" replace />} />
              <Route path="dashboard" element={<ProjectManagerDashboard />} />
              <Route path="profile" element={<ProjectManagerProfile />} />
              <Route path="projects" element={<ProjectManagerProjects />} />
              <Route path="timeline" element={<ProjectManagerTimeline />} />
              <Route path="reports" element={<ProjectManagerReports />} />
              <Route path="settings" element={<ProjectManagerSettings />} />
            </Route>

            {/* Regulator Routes */}
            <Route path="/regulator" element={<ProtectedRoute><RegulatorLayout /></ProtectedRoute>}>
              <Route index element={<Navigate to="/regulator/dashboard" replace />} />
              <Route path="dashboard" element={<RegulatorDashboard />} />
              <Route path="profile" element={<RegulatorProfile />} />
              <Route path="oversight" element={<RegulatorOversight />} />
              <Route path="compliance" element={<RegulatorCompliance />} />
              <Route path="reports" element={<RegulatorReports />} />
              <Route path="settings" element={<RegulatorSettings />} />
            </Route>

            {/* Evaluator Routes */}
            <Route path="/evaluator" element={<ProtectedRoute><EvaluatorLayout /></ProtectedRoute>}>
              <Route index element={<Navigate to="/evaluator/dashboard" replace />} />
              <Route path="dashboard" element={<EvaluatorDashboard />} />
              <Route path="profile" element={<EvaluatorProfile />} />
              <Route path="evaluations" element={<EvaluatorEvaluations />} />
              <Route path="scoring" element={<EvaluatorScoring />} />
              <Route path="filters" element={<EvaluatorFilters />} />
              <Route path="geolocation" element={<EvaluatorGeolocation />} />
              <Route path="analytics" element={<EvaluatorAnalytics />} />
              <Route path="settings" element={<EvaluatorSettings />} />
            </Route>

            {/* BPP Admin Routes */}
            <Route path="/bpp_admin" element={<ProtectedRoute><BPPAdminLayout /></ProtectedRoute>}>
              <Route index element={<Navigate to="/bpp_admin/dashboard" replace />} />
              <Route path="dashboard" element={<BPPAdminDashboard />} />
              <Route path="profile" element={<BPPAdminProfile />} />
              <Route path="tenders" element={<BPPAdminTenders />} />
              <Route path="quotas" element={<BPPAdminQuotas />} />
              <Route path="reports" element={<BPPAdminReports />} />
              <Route path="configuration" element={<BPPAdminConfiguration />} />
              <Route path="analytics" element={<BPPAdminAnalytics />} />
              <Route path="settings" element={<BPPAdminSettings />} />
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