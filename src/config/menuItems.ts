import {
  Dashboard as DashboardIcon,
  Assignment as AssignmentIcon,
  ShoppingCart as ShoppingCartIcon,
  Description as DescriptionIcon,
  AccountBalance as AccountBalanceIcon,
  People as PeopleIcon,
  Settings as SettingsIcon,
  BarChart as BarChartIcon,
  School as SchoolIcon,
  Link as LinkIcon,
  Inventory as InventoryIcon,
  Business as BusinessIcon,
  Security as SecurityIcon,
  Assessment as AssessmentIcon,
  Payment as PaymentIcon,
} from '@mui/icons-material';

export interface MenuItem {
  id: string;
  title: string;
  path?: string;
  icon: React.ElementType;
  children?: MenuItem[];
  color?: string;
  description?: string;
}

const menuItems: MenuItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    path: '/app/dashboard',
    icon: DashboardIcon,
    color: '#1976d2',
    description: 'Overview of procurement activities and key metrics',
    children: [
      {
        id: 'dashboard-overview',
        title: 'Overview Dashboard',
        path: '/app/dashboard/overview',
        icon: DashboardIcon,
      },
      {
        id: 'dashboard-executive',
        title: 'Executive Dashboard',
        path: '/app/dashboard/executive',
        icon: BarChartIcon,
      },
    ],
  },
  {
    id: 'registration',
    title: 'Registration & Qualification',
    path: '/app/registration',
    icon: PeopleIcon,
    color: '#8e24aa',
    description: 'Manage stakeholder registrations and qualifications',
    children: [
      {
        id: 'registration-cbo',
        title: 'CBO Registration',
        path: '/app/registration/cbo',
        icon: BusinessIcon,
      },
      {
        id: 'registration-pco',
        title: 'PCO Registration',
        path: '/app/registration/pco',
        icon: PeopleIcon,
      },
      {
        id: 'registration-contractor',
        title: 'Contractor Registration',
        path: '/app/registration/contractor',
        icon: BusinessIcon,
      },
    ],
  },
  {
    id: 'procurement',
    title: 'Procurement',
    path: '/app/procurement',
    icon: ShoppingCartIcon,
    color: '#2e7d32',
    description: 'Manage procurement processes and documents',
    children: [
      {
        id: 'procurement-planning',
        title: 'Planning',
        path: '/app/procurement/planning',
        icon: DescriptionIcon,
      },
      {
        id: 'procurement-requests',
        title: 'Requests',
        path: '/app/procurement/requests',
        icon: AssignmentIcon,
      },
      {
        id: 'procurement-tenders',
        title: 'Tenders',
        path: '/app/procurement/tenders',
        icon: ShoppingCartIcon,
      },
      {
        id: 'procurement-contracts',
        title: 'Contracts',
        path: '/app/procurement/contracts',
        icon: DescriptionIcon,
      },
    ],
  },
  {
    id: 'budget',
    title: 'Budget',
    path: '/app/budget',
    icon: AccountBalanceIcon,
    color: '#d32f2f',
    description: 'Track and manage budget allocation and expenses',
    children: [
      {
        id: 'budget-allocation',
        title: 'Allocation',
        path: '/app/budget/allocation',
        icon: AccountBalanceIcon,
      },
      {
        id: 'budget-expenditure',
        title: 'Expenditure',
        path: '/app/budget/expenditure',
        icon: AccountBalanceIcon,
      },
    ],
  },
  {
    id: 'projects',
    title: 'Project Implementation',
    path: '/app/projects',
    icon: AssignmentIcon,
    color: '#3949ab',
    description: 'Track project implementation and oversight',
    children: [
      {
        id: 'projects-tracking',
        title: 'Project Tracking',
        path: '/app/projects/tracking',
        icon: AssessmentIcon,
      },
      {
        id: 'projects-oversight',
        title: 'Regulatory Oversight',
        path: '/app/projects/oversight',
        icon: SecurityIcon,
      },
    ],
  },
  {
    id: 'payments',
    title: 'Payment & Financial',
    path: '/app/payments',
    icon: PaymentIcon,
    color: '#00897b',
    description: 'Manage payments and financial reporting',
    children: [
      {
        id: 'payments-processing',
        title: 'Payment Processing',
        path: '/app/payments/processing',
        icon: PaymentIcon,
      },
      {
        id: 'payments-reporting',
        title: 'Financial Reporting',
        path: '/app/payments/reporting',
        icon: AssessmentIcon,
      },
    ],
  },
  {
    id: 'vendors',
    title: 'Vendors',
    path: '/app/vendors',
    icon: PeopleIcon,
    color: '#ed6c02',
    description: 'Manage vendor information and performance'
  },
  {
    id: 'inventory',
    title: 'Inventory',
    path: '/app/inventory',
    icon: InventoryIcon,
    color: '#9c27b0',
    description: 'Track and manage inventory items and stock levels'
  },
  {
    id: 'reports',
    title: 'Reports',
    path: '/app/reports',
    icon: BarChartIcon,
    color: '#0288d1',
    description: 'Generate and view procurement and financial reports',
    children: [
      {
        id: 'reports-procurement',
        title: 'Procurement Reports',
        path: '/app/reports/procurement',
        icon: BarChartIcon,
      },
      {
        id: 'reports-financial',
        title: 'Financial Reports',
        path: '/app/reports/financial',
        icon: BarChartIcon,
      },
      {
        id: 'reports-audit',
        title: 'Audit Reports',
        path: '/app/reports/audit',
        icon: BarChartIcon,
      },
    ],
  },
  {
    id: 'training',
    title: 'Training',
    path: '/app/training',
    icon: SchoolIcon,
    color: '#00796b',
    description: 'Access training materials and resources'
  },
  {
    id: 'integration',
    title: 'Integration',
    path: '/app/integration',
    icon: LinkIcon,
    color: '#607d8b',
    description: 'Manage external system integrations'
  },
  {
    id: 'settings',
    title: 'Settings',
    path: '/app/settings',
    icon: SettingsIcon,
    color: '#5c6bc0',
    description: 'Configure system settings and preferences'
  },
];

export default menuItems; 