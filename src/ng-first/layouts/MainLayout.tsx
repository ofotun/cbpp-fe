import React, { useState } from 'react';
import { 
  Box, 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container,
  Menu,
  MenuItem,
  IconButton,
  Grid,
  Link,
  Divider
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { APP_URLS } from '../../config/urls';
import MenuIcon from '@mui/icons-material/Menu';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [platformsAnchor, setPlatformsAnchor] = useState<null | HTMLElement>(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);

  const handlePlatformsClick = (event: React.MouseEvent<HTMLElement>) => {
    setPlatformsAnchor(event.currentTarget);
  };

  const handlePlatformsClose = () => {
    setPlatformsAnchor(null);
  };

  const handleMobileMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const renderPlatformsMenu = () => (
    <Menu
      anchorEl={platformsAnchor}
      open={Boolean(platformsAnchor)}
      onClose={handlePlatformsClose}
      sx={{ mt: 1 }}
    >
      <MenuItem 
        component={RouterLink} 
        to={APP_URLS.CBPP}
        onClick={handlePlatformsClose}
      >
        CBPP
      </MenuItem>
      <MenuItem 
        component="a" 
        href="#"
        onClick={handlePlatformsClose}
      >
        LMSPR
      </MenuItem>
    </Menu>
  );

  const renderMobileMenu = () => (
    <Menu
      anchorEl={mobileMenuAnchor}
      open={Boolean(mobileMenuAnchor)}
      onClose={handleMobileMenuClose}
      sx={{ mt: 1 }}
    >
      <MenuItem component={RouterLink} to="/" onClick={handleMobileMenuClose}>
        Home
      </MenuItem>
      <MenuItem component={RouterLink} to="/about" onClick={handleMobileMenuClose}>
        About
      </MenuItem>
      <MenuItem component={RouterLink} to="/guidelines" onClick={handleMobileMenuClose}>
        Guidelines
      </MenuItem>
      <MenuItem onClick={handlePlatformsClick}>Platforms</MenuItem>
      <MenuItem 
        component="a" 
        href={APP_URLS.BPP}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleMobileMenuClose}
      >
        BPP
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 1 }}>
        <Toolbar sx={{ 
          minHeight: '120px',
          px: { xs: 2, md: 4 },
          py: 2
        }}>
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              flexGrow: 1,
              gap: 2
            }}
          >
            <img
              src="/images/logos/coat-of-arms.png"
              alt="Nigerian Coat of Arms"
              style={{
                height: '80px'
              }}
            />
            <img
              src="/images/ng-first/ng-first-badge.jpg"
              alt="Nigeria First Initiative"
              style={{
                height: '100px'
              }}
            />
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            gap: 3,
            ml: 4,
            alignItems: 'center'
          }}>
            <Button
              color="primary"
              component={RouterLink}
              to="/"
              size="large"
              sx={{ 
                fontSize: '1.1rem',
                fontWeight: 'bold',
                borderRadius: 0,
                px: 3,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}
            >
              Home
            </Button>
            <Button
              color="primary"
              component={RouterLink}
              to="/about"
              size="large"
              sx={{ 
                fontSize: '1.1rem',
                fontWeight: 'bold',
                borderRadius: 0,
                px: 3,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}
            >
              About
            </Button>
            <Button
              color="primary"
              component={RouterLink}
              to="/guidelines"
              size="large"
              sx={{ 
                fontSize: '1.1rem',
                fontWeight: 'bold',
                borderRadius: 0,
                px: 3,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}
            >
              Guidelines
            </Button>
            <Button
              color="primary"
              onClick={handlePlatformsClick}
              size="large"
              sx={{ 
                fontSize: '1.1rem',
                fontWeight: 'bold',
                borderRadius: 0,
                px: 3,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}
            >
              Platforms
            </Button>
            <Button
              color="primary"
              component="a"
              href={APP_URLS.BPP}
              target="_blank"
              rel="noopener noreferrer"
              size="large"
              sx={{ 
                fontSize: '1.1rem',
                fontWeight: 'bold',
                borderRadius: 0,
                px: 3,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}
            >
              BPP
            </Button>
            <Box
              component="a"
              href={APP_URLS.BPP}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                ml: 2
              }}
            >
              <img
                src="/images/logos/bpp-logo.png"
                alt="Bureau of Public Procurement"
                style={{
                  height: '60px'
                }}
              />
            </Box>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="primary"
            onClick={handleMobileMenuClick}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {renderPlatformsMenu()}
          {renderMobileMenu()}
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 6,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) => theme.palette.grey[100]
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" color="primary" gutterBottom>
                Nigeria First Initiative
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <img
                  src="/images/ng-first/ng-first-badge.jpg"
                  alt="Nigeria First Initiative"
                  style={{
                    height: '60px',
                    marginRight: '16px'
                  }}
                />
              </Box>
              <Typography variant="body2" color="text.secondary">
                Empowering communities through transparent procurement and sustainable development.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" color="primary" gutterBottom>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link component={RouterLink} to="/" color="inherit" underline="none">Home</Link>
                <Link component={RouterLink} to="/about" color="inherit" underline="none">About</Link>
                <Link component={RouterLink} to="/guidelines" color="inherit" underline="none">Guidelines</Link>
                <Link href={APP_URLS.CBPP} color="inherit" underline="none">CBPP</Link>
                <Link href="#" color="inherit" underline="none">LMSPR</Link>
                <Link href={APP_URLS.BPP} color="inherit" underline="none">BPP</Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" color="primary" gutterBottom>
                Contact
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Bureau of Public Procurement<br />
                No. 11 Suleiman Barau Crescent<br />
                Presidential Villa, Abuja<br />
                Tel: 08171217369, 08158162418<br />
                Fax: 09-6252379<br />
                Email: ccspsupport@bpp.gov.ng
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ my: 3 }} />
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Nigeria First Initiative. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout; 