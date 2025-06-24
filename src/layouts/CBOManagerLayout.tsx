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
  People as PeopleIcon,
  Assignment as AssignmentIcon,
  Assessment as AssessmentIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Business as BusinessIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 280;

// Mock user data for CBO Manager
const mockCBOManagerUser = {
  id: 'cbo-001',
  firstName: 'Michael',
  surname: 'Ojo',
  email: 'michael.ojo@cbo.org',
  phone: '08034567890',
  userType: 'cbo_manager',
  organization: 'Community Development Association of Lagos',
  position: 'Executive Director',
  lastLogin: new Date().toISOString(),
};

// Mock menu items for CBO Manager
const cboManagerMenuItems = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    path: '/cbo_manager/dashboard',
    icon: DashboardIcon,
    color: '#1976d2',
    description: 'Overview of community projects and activities',
  },
  {
    id: 'profile',
    title: 'Profile',
    path: '/cbo_manager/profile',
    icon: PersonIcon,
    color: '#8e24aa',
    description: 'Manage your profile information',
  },
  {
    id: 'members',
    title: 'Member Management',
    path: '/cbo_manager/members',
    icon: PeopleIcon,
    color: '#2e7d32',
    description: 'Manage CBO members and contractors',
  },
  {
    id: 'projects',
    title: 'Project Management',
    path: '/cbo_manager/projects',
    icon: AssignmentIcon,
    color: '#3949ab',
    description: 'Track and manage community projects',
  },
  {
    id: 'reports',
    title: 'Reports & Analytics',
    path: '/cbo_manager/reports',
    icon: AssessmentIcon,
    color: '#0288d1',
    description: 'Generate and view community reports',
  },
  {
    id: 'settings',
    title: 'Settings',
    path: '/cbo_manager/settings',
    icon: SettingsIcon,
    color: '#5c6bc0',
    description: 'Configure system settings and preferences',
  },
];

const CBOManagerLayout: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();
  
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

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

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Logo/Brand Section */}
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <BusinessIcon sx={{ color: theme.palette.primary.main, fontSize: 32 }} />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
              CBPP
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              CBO Manager Portal
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* User Profile Section */}
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
            {mockCBOManagerUser.firstName.charAt(0)}
          </Avatar>
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
              {mockCBOManagerUser.firstName} {mockCBOManagerUser.surname}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {mockCBOManagerUser.position}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Navigation Menu */}
      <Box sx={{ flex: 1, overflow: 'auto' }}>
        <List sx={{ pt: 1 }}>
          {cboManagerMenuItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                selected={location.pathname === item.path}
                onClick={() => item.path && handleNavigation(item.path)}
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
                    color: location.pathname === item.path ? 'inherit' : item.color,
                  }}
                >
                  <item.icon />
                </ListItemIcon>
                <ListItemText 
                  primary={item.title}
                  primaryTypographyProps={{
                    fontSize: '0.875rem',
                    fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                  }}
                />
              </ListItemButton>
            </ListItem>
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
            {cboManagerMenuItems.find(item => item.path === location.pathname)?.title || 'Dashboard'}
          </Typography>

          {/* Notifications */}
          <IconButton color="inherit" sx={{ mr: 1 }}>
            <Badge badgeContent={0} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* Profile Menu */}
          <IconButton
            onClick={handleProfileMenuOpen}
            sx={{ ml: 1 }}
          >
            <Avatar sx={{ width: 32, height: 32, bgcolor: theme.palette.primary.main }}>
              {mockCBOManagerUser.firstName.charAt(0)}
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
            keepMounted: true,
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
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              borderRight: 1,
              borderColor: 'divider',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          mt: '64px',
          backgroundColor: '#f5f5f5',
          minHeight: 'calc(100vh - 64px)',
        }}
      >
        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>
      </Box>

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleProfileMenuClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => { handleProfileMenuClose(); handleNavigation('/cbo_manager/profile'); }}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={() => { handleProfileMenuClose(); handleNavigation('/cbo_manager/settings'); }}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default CBOManagerLayout; 