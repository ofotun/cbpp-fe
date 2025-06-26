import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
  Avatar,
  Badge,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  Monitor as MonitorIcon,
  Assignment as AssignmentIcon,
  AccountBalance as AccountBalanceIcon,
  Security as SecurityIcon,
  Analytics as AnalyticsIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Business as BusinessIcon,
  Notifications as NotificationsIcon,
  Tune as TuneIcon,
  Report as ReportIcon,
  Group as GroupIcon,
  Payment as PaymentIcon,
  Assessment as AssessmentIcon,
  Build as BuildIcon,
  Cloud as CloudIcon,
  AdminPanelSettings as AdminPanelSettingsIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 280;

// Mock user data for Super Admin
const mockSuperAdminUser = {
  id: 'super-admin-001',
  firstName: 'Dr. Sarah',
  surname: 'Johnson',
  email: 'sarah.johnson@cbpp.gov.ng',
  phone: '08012345678',
  userType: 'super_admin',
  department: 'System Administration',
  organization: 'Community-Based Procurement Platform',
  specialization: 'System Administration & Platform Management',
  lastLogin: new Date().toISOString(),
};

// Mock menu items for Super Admin
const superAdminMenuItems = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    path: '/super-admin/dashboard',
    icon: DashboardIcon,
    color: '#1976d2',
    description: 'Comprehensive platform overview and metrics',
  },
  {
    id: 'profile',
    title: 'Profile',
    path: '/super-admin/profile',
    icon: PersonIcon,
    color: '#8e24aa',
    description: 'Manage your super admin profile',
  },
  {
    id: 'system-overview',
    title: 'System Overview',
    path: '/super-admin/system-overview',
    icon: MonitorIcon,
    color: '#2e7d32',
    description: 'Platform health and user management',
    subItems: [
      {
        id: 'platform-health',
        title: 'Platform Health',
        path: '/super-admin/system-overview/platform-health',
        icon: MonitorIcon,
      },
      {
        id: 'user-management',
        title: 'User Management',
        path: '/super-admin/system-overview/user-management',
        icon: GroupIcon,
      },
      {
        id: 'role-assumption',
        title: 'Role Assumption',
        path: '/super-admin/system-overview/role-assumption',
        icon: AdminPanelSettingsIcon,
      },
    ],
  },
  {
    id: 'procurement',
    title: 'Procurement',
    path: '/super-admin/procurement',
    icon: AssignmentIcon,
    color: '#3949ab',
    description: 'All procurement activities oversight',
    subItems: [
      {
        id: 'overview',
        title: 'Overview',
        path: '/super-admin/procurement/overview',
        icon: DashboardIcon,
      },
      {
        id: 'tenders',
        title: 'Tenders',
        path: '/super-admin/procurement/tenders',
        icon: AssignmentIcon,
      },
      {
        id: 'contracts',
        title: 'Contracts',
        path: '/super-admin/procurement/contracts',
        icon: BuildIcon,
      },
      {
        id: 'analytics',
        title: 'Analytics',
        path: '/super-admin/procurement/analytics',
        icon: AnalyticsIcon,
      },
    ],
  },
  {
    id: 'financial',
    title: 'Financial',
    path: '/super-admin/financial',
    icon: AccountBalanceIcon,
    color: '#0288d1',
    description: 'Budget and payment oversight',
    subItems: [
      {
        id: 'budget',
        title: 'Budget',
        path: '/super-admin/financial/budget',
        icon: AccountBalanceIcon,
      },
      {
        id: 'payments',
        title: 'Payments',
        path: '/super-admin/financial/payments',
        icon: PaymentIcon,
      },
      {
        id: 'reporting',
        title: 'Reporting',
        path: '/super-admin/financial/reporting',
        icon: ReportIcon,
      },
    ],
  },
  {
    id: 'compliance',
    title: 'Compliance',
    path: '/super-admin/compliance',
    icon: SecurityIcon,
    color: '#00796b',
    description: 'Compliance and audit management',
    subItems: [
      {
        id: 'oversight',
        title: 'Oversight',
        path: '/super-admin/compliance/oversight',
        icon: SecurityIcon,
      },
      {
        id: 'audits',
        title: 'Audits',
        path: '/super-admin/compliance/audits',
        icon: AssessmentIcon,
      },
      {
        id: 'regulations',
        title: 'Regulations',
        path: '/super-admin/compliance/regulations',
        icon: SecurityIcon,
      },
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics',
    path: '/super-admin/analytics',
    icon: AnalyticsIcon,
    color: '#f57c00',
    description: 'Platform analytics and insights',
    subItems: [
      {
        id: 'platform',
        title: 'Platform',
        path: '/super-admin/analytics/platform',
        icon: AnalyticsIcon,
      },
      {
        id: 'performance',
        title: 'Performance',
        path: '/super-admin/analytics/performance',
        icon: MonitorIcon,
      },
      {
        id: 'insights',
        title: 'AI Insights',
        path: '/super-admin/analytics/insights',
        icon: CloudIcon,
      },
    ],
  },
  {
    id: 'configuration',
    title: 'Configuration',
    path: '/super-admin/configuration',
    icon: TuneIcon,
    color: '#5c6bc0',
    description: 'System configuration and settings',
    subItems: [
      {
        id: 'system',
        title: 'System',
        path: '/super-admin/configuration/system',
        icon: TuneIcon,
      },
      {
        id: 'security',
        title: 'Security',
        path: '/super-admin/configuration/security',
        icon: SecurityIcon,
      },
      {
        id: 'integrations',
        title: 'Integrations',
        path: '/super-admin/configuration/integrations',
        icon: CloudIcon,
      },
    ],
  },
  {
    id: 'role-management',
    title: 'Role Management',
    path: '/super-admin/role-management',
    icon: AdminPanelSettingsIcon,
    color: '#9c27b0',
    description: 'Access to all user role functions',
    subItems: [
      {
        id: 'bpp-admin',
        title: 'BPP Admin',
        path: '/super-admin/role-management/bpp-admin',
        icon: AdminPanelSettingsIcon,
      },
      {
        id: 'procurement-officer',
        title: 'Procurement Officer',
        path: '/super-admin/role-management/procurement-officer',
        icon: PersonIcon,
      },
      {
        id: 'cbo-manager',
        title: 'CBO Manager',
        path: '/super-admin/role-management/cbo-manager',
        icon: GroupIcon,
      },
      {
        id: 'project-manager',
        title: 'Project Manager',
        path: '/super-admin/role-management/project-manager',
        icon: AssignmentIcon,
      },
      {
        id: 'contractor',
        title: 'Contractor',
        path: '/super-admin/role-management/contractor',
        icon: BusinessIcon,
      },
      {
        id: 'regulator',
        title: 'Regulator',
        path: '/super-admin/role-management/regulator',
        icon: SecurityIcon,
      },
      {
        id: 'evaluator',
        title: 'Evaluator',
        path: '/super-admin/role-management/evaluator',
        icon: AssessmentIcon,
      },
    ],
  },
  {
    id: 'settings',
    title: 'Settings',
    path: '/super-admin/settings',
    icon: SettingsIcon,
    color: '#607d8b',
    description: 'Account and system settings',
  },
];

const SuperAdminLayout: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();
  
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [expandedItems, setExpandedItems] = React.useState<string[]>([]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const handleExpandItem = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const isItemExpanded = (itemId: string) => expandedItems.includes(itemId);

  const isItemActive = (item: any) => {
    if (item.path === location.pathname) return true;
    if (item.subItems) {
      return item.subItems.some((subItem: any) => subItem.path === location.pathname);
    }
    return false;
  };

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Logo/Brand Section */}
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <AdminPanelSettingsIcon sx={{ color: theme.palette.primary.main, fontSize: 32 }} />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
              CBPP
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              Super Admin Portal
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* User Profile Section */}
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
            {mockSuperAdminUser.firstName.charAt(0)}
          </Avatar>
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
              {mockSuperAdminUser.firstName} {mockSuperAdminUser.surname}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {mockSuperAdminUser.specialization}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Navigation Menu */}
      <Box sx={{ flex: 1, overflow: 'auto' }}>
        <List sx={{ pt: 1 }}>
          {superAdminMenuItems.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem disablePadding>
                <ListItemButton
                  selected={isItemActive(item)}
                  onClick={() => {
                    if (item.subItems) {
                      handleExpandItem(item.id);
                    } else if (item.path) {
                      handleNavigation(item.path);
                    }
                  }}
                  sx={{
                    mx: 1,
                    borderRadius: 1,
                    '&.Mui-selected': {
                      backgroundColor: theme.palette.primary.light,
                      color: theme.palette.primary.contrastText,
                      '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                      },
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: isItemActive(item) ? 'inherit' : item.color,
                    }}
                  >
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.title}
                    primaryTypographyProps={{
                      fontSize: '0.875rem',
                      fontWeight: isItemActive(item) ? 'bold' : 'normal',
                    }}
                  />
                </ListItemButton>
              </ListItem>
              
              {/* Sub-items */}
              {item.subItems && isItemExpanded(item.id) && (
                <List component="div" disablePadding>
                  {item.subItems.map((subItem: any) => (
                    <ListItem key={subItem.id} disablePadding>
                      <ListItemButton
                        selected={location.pathname === subItem.path}
                        onClick={() => handleNavigation(subItem.path)}
                        sx={{
                          pl: 4,
                          mx: 1,
                          borderRadius: 1,
                          '&.Mui-selected': {
                            backgroundColor: theme.palette.primary.light,
                            color: theme.palette.primary.contrastText,
                            '&:hover': {
                              backgroundColor: theme.palette.primary.main,
                            },
                          },
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            color: location.pathname === subItem.path ? 'inherit' : subItem.color || item.color,
                          }}
                        >
                          <subItem.icon />
                        </ListItemIcon>
                        <ListItemText 
                          primary={subItem.title}
                          primaryTypographyProps={{
                            fontSize: '0.875rem',
                            fontWeight: location.pathname === subItem.path ? 'bold' : 'normal',
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          backgroundColor: 'white',
          color: 'text.primary',
          boxShadow: 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {superAdminMenuItems.find(item => 
              item.path === location.pathname || 
              (item.subItems && item.subItems.some((subItem: any) => subItem.path === location.pathname))
            )?.title || 'Super Admin Dashboard'}
          </Typography>

          {/* Notifications */}
          <IconButton color="inherit" sx={{ mr: 1 }}>
            <Badge badgeContent={5} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* Profile Menu */}
          <IconButton
            onClick={handleProfileMenuOpen}
            sx={{ ml: 1 }}
          >
            <Avatar sx={{ width: 32, height: 32, bgcolor: theme.palette.primary.main }}>
              {mockSuperAdminUser.firstName.charAt(0)}
            </Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        
        {/* Desktop drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          mt: 8,
        }}
      >
        <Outlet />
      </Box>

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleProfileMenuClose}
        onClick={handleProfileMenuClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => handleNavigation('/super-admin/profile')}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={() => handleNavigation('/super-admin/settings')}>
          <SettingsIcon sx={{ mr: 1 }} /> Settings
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <LogoutIcon sx={{ mr: 1 }} /> Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default SuperAdminLayout; 