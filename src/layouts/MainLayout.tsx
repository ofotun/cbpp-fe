import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, Avatar, useTheme, useMediaQuery, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  Notifications as NotificationsIcon,
  Help as HelpIcon,
  AccountCircle as AccountCircleIcon
} from '@mui/icons-material';
import { useNavigation } from '../contexts/NavigationContext';
import SidebarNavigation from '../components/navigation/SidebarNavigation';
import CardNavigation from '../components/navigation/CardNavigation';
import NavigationToggle from '../components/navigation/NavigationToggle';

const drawerWidth = 280;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: open ? drawerWidth : 0,
  width: `calc(100% - ${open ? drawerWidth : 0}px)`,
}));

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const { navStyle } = useNavigation();
  const isSidebarNav = navStyle === 'sidebar';
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isCardNavOpen, setIsCardNavOpen] = useState(false);

  const handleCardNavClose = () => {
    setIsCardNavOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        {/* AppBar */}
        <AppBar 
          position="fixed" 
          color="default"
          elevation={1}
          sx={{ 
            zIndex: theme.zIndex.drawer + 1,
            width: isSidebarNav ? `calc(100% - ${drawerWidth}px)` : '100%',
            ml: isSidebarNav ? `${drawerWidth}px` : 0,
            transition: theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          }}
        >
          <Toolbar>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {isMobile ? (
                <Box
                  component="img"
                  src="/images/logos/cbpp-logo-mark.png"
                  alt="CBPP Logo"
                  sx={{
                    height: 32,
                    mr: 1,
                  }}
                />
              ) : (
                <Box
                  component="img"
                  src="/images/logos/cbpp-full-logo.png"
                  alt="CBPP - Community-Based Procurement Platform"
                  sx={{
                    height: 32,
                    mr: 2,
                  }}
                />
              )}
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                  flexGrow: 1,
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                Community-Based Procurement Platform
              </Typography>
            </Box>
            
            {/* Navigation Toggle */}
            <NavigationToggle />
            
            {/* Right side app bar icons */}
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
              <IconButton color="inherit" size="large">
                <NotificationsIcon />
              </IconButton>
              <IconButton color="inherit" size="large">
                <HelpIcon />
              </IconButton>
              <IconButton color="inherit" size="large">
                <Avatar sx={{ width: 32, height: 32 }}>
                  <AccountCircleIcon />
                </Avatar>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        
        {/* Navigation */}
        {isSidebarNav ? (
          <>
            <SidebarNavigation />
            <Main open>
              <Toolbar /> {/* Spacer to push content below app bar */}
              {children}
            </Main>
          </>
        ) : (
          <Box component="main" sx={{ flexGrow: 1, p: 3, width: '100%' }}>
            <Toolbar /> {/* Spacer to push content below app bar */}
            <CardNavigation isOpen={isCardNavOpen} onClose={handleCardNavClose} />
            <Box sx={{ mt: 4 }}>
              {children}
            </Box>
          </Box>
        )}
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: theme.palette.background.paper,
          borderTop: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Box
              component="img"
              src="/images/logos/cbpp-logo-mark.png"
              alt="CBPP Logo"
              sx={{
                height: 30,
              }}
            />
            <Box
              component="img"
              src="/images/logos/bpp-logo.png"
              alt="BPP Logo"
              sx={{
                height: 30,
              }}
            />
          </Box>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Bureau of Public Procurement. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout; 