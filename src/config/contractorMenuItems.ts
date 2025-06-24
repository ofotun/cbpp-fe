import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  ShoppingCart as ShoppingCartIcon,
  Payment as PaymentIcon,
  Assessment as AssessmentIcon,
  School as SchoolIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  Description as DescriptionIcon,
  Business as BusinessIcon,
  Receipt as ReceiptIcon,
  TrendingUp as TrendingUpIcon,
  Assignment as AssignmentIcon,
  CheckCircle as CheckCircleIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material';

export interface ContractorMenuItem {
  id: string;
  title: string;
  path?: string;
  icon: React.ElementType;
  children?: ContractorMenuItem[];
  color?: string;
  description?: string;
}

const contractorMenuItems: ContractorMenuItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    path: '/contractor/dashboard',
    icon: DashboardIcon,
    color: '#1976d2',
    description: 'Overview of registration status, verification progress, and key metrics',
  },
  {
    id: 'profile',
    title: 'Profile Management',
    path: '/contractor/profile',
    icon: PersonIcon,
    color: '#8e24aa',
    description: 'Manage your profile information and verification status',
  },
  {
    id: 'procurement',
    title: 'Procurement',
    path: '/contractor/procurement',
    icon: ShoppingCartIcon,
    color: '#2e7d32',
    description: 'View tenders and manage contract applications',
    children: [
      {
        id: 'procurement-tenders',
        title: 'Tenders',
        path: '/contractor/procurement/tenders',
        icon: AssignmentIcon,
        description: 'View and apply for available tenders',
      },
      {
        id: 'procurement-contracts',
        title: 'My Contracts',
        path: '/contractor/procurement/contracts',
        icon: DescriptionIcon,
        description: 'Manage awarded contracts and project execution',
      },
    ],
  },
  {
    id: 'payments',
    title: 'Payments & Financials',
    path: '/contractor/payments',
    icon: PaymentIcon,
    color: '#00897b',
    description: 'Manage platform payments and contract-related payments',
    children: [
      {
        id: 'payments-platform',
        title: 'Platform Payments',
        path: '/contractor/payments/platform',
        icon: ReceiptIcon,
        description: 'Manage platform fees and service payments',
      },
      {
        id: 'payments-contracts',
        title: 'Contract Payments',
        path: '/contractor/payments/contracts',
        icon: TrendingUpIcon,
        description: 'Track contract payments and disbursements',
      },
    ],
  },
  {
    id: 'reports',
    title: 'Reports',
    path: '/contractor/reports',
    icon: AssessmentIcon,
    color: '#0288d1',
    description: 'View contractor-specific reports and analytics',
  },
  {
    id: 'training',
    title: 'Training',
    path: '/contractor/training',
    icon: SchoolIcon,
    color: '#00796b',
    description: 'Access training materials and courses',
  },
  {
    id: 'notifications',
    title: 'Notifications',
    path: '/contractor/notifications',
    icon: NotificationsIcon,
    color: '#f57c00',
    description: 'Manage system notifications and alerts',
  },
  {
    id: 'settings',
    title: 'Settings',
    path: '/contractor/settings',
    icon: SettingsIcon,
    color: '#5c6bc0',
    description: 'Configure account and system settings',
  },
];

export default contractorMenuItems; 