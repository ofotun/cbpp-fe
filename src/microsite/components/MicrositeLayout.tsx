import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  Grid,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link as RouterLink, Outlet, useNavigate } from 'react-router-dom';
import LanguageSelector from '../../components/LanguageSelector';

const MicrositeLayout = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Processes', path: '/processes' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Partners', path: '/partners' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box
        component="img"
        src="/images/logos/cbpp-logo-mark.png"
        alt="CBPP Logo"
        sx={{
          height: 40,
          my: 2,
        }}
      />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={item.path}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <LanguageSelector />
          </Box>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => navigate('/signup')}
            sx={{ textAlign: 'center' }}
          >
            <ListItemText primary="Sign Up" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => navigate('/login')}
            sx={{ textAlign: 'center' }}
          >
            <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" color="default" elevation={1}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              {isMobile ? (
                <Box
                  component="img"
                  src="/images/logos/cbpp-logo-mark.png"
                  alt="CBPP Logo"
                  sx={{
                    height: 40,
                    mr: 1,
                  }}
                />
              ) : (
                <Box
                  component="img"
                  src="/images/logos/cbpp-full-logo.png"
                  alt="CBPP - Community-Based Procurement Platform"
                  sx={{
                    height: 40,
                    mr: 2,
                  }}
                />
              )}
            </Box>
            
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 'auto' }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', ml: 'auto' }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.label}
                    color="inherit"
                    component={RouterLink}
                    to={item.path}
                    sx={{ fontWeight: 600 }}
                  >
                    {item.label}
                  </Button>
                ))}
                <LanguageSelector />
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => navigate('/signup')}
                  sx={{ fontWeight: 600 }}
                >
                  Sign Up
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate('/login')}
                  sx={{ fontWeight: 600 }}
                >
                  Login
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>

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
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box
                  component="img"
                  src="/images/logos/cbpp-full-logo.png"
                  alt="CBPP - Community-Based Procurement Platform"
                  sx={{
                    width: 'auto',
                    height: 40,
                    objectFit: 'contain',
                    mb: 2,
                  }}
                />
                <Typography variant="body2" color="text.secondary">
                  Empowering communities through transparent and efficient procurement processes.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Quick Links
              </Typography>
              <List dense disablePadding>
                {menuItems.map((item) => (
                  <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
                    <ListItemButton
                      component={RouterLink}
                      to={item.path}
                      sx={{ p: 0 }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          variant: 'body2',
                          color: 'text.secondary',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Transform Your Community
              </Typography>
              <List dense disablePadding>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemButton
                    component={RouterLink}
                    to="/signup"
                    sx={{ p: 0 }}
                  >
                    <ListItemText
                      primary="Sign Up"
                      primaryTypographyProps={{
                        variant: 'body2',
                        color: 'text.secondary',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemButton
                    component={RouterLink}
                    to="/login"
                    sx={{ p: 0 }}
                  >
                    <ListItemText
                      primary="Login"
                      primaryTypographyProps={{
                        variant: 'body2',
                        color: 'text.secondary',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Box
            sx={{
              mt: 4,
              pt: 2,
              borderTop: `1px solid ${theme.palette.divider}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Bureau of Public Procurement. All rights reserved.
            </Typography>
            <Box
              component="a"
              href="https://www.bpp.gov.ng/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textDecoration: 'none' }}
            >
              <Box
                component="img"
                src="/images/logos/bpp-logo.png"
                alt="BPP Logo"
                sx={{
                  width: 'auto',
                  height: 30,
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export { MicrositeLayout }; 