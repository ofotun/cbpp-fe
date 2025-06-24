import React from 'react';
import {
  Container,
  Box,
  Grid,
  Typography,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
  Chip,
} from '@mui/material';
import {
  AdminPanelSettings as AdminIcon,
  Business as ContractorIcon,
  Person as PCOIcon,
  Group as CBOIcon,
  Assignment as ProjectManagerIcon,
  Security as RegulatorIcon,
  Assessment as AssessmentIcon,
  PlayArrow as PlayIcon,
  Lock as LockIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const demoRoles = [
  {
    id: 'admin',
    title: 'Demo Admin',
    description: 'Full platform administration and oversight',
    icon: AdminIcon,
    color: '#1976d2',
    active: true,
    path: '/app/dashboard',
  },
  {
    id: 'contractor',
    title: 'Demo Contractor',
    description: 'Contractor dashboard and procurement management',
    icon: ContractorIcon,
    color: '#2e7d32',
    active: true,
    path: '/contractor/dashboard',
  },
  {
    id: 'evaluator',
    title: 'Demo Evaluator',
    description: 'Bid evaluation and scoring system',
    icon: AssessmentIcon,
    color: '#ff6f00',
    active: true,
    path: '/evaluator/dashboard',
  },
  {
    id: 'procurement_officer',
    title: 'Demo PCO',
    description: 'Procurement officer workflow and management',
    icon: PCOIcon,
    color: '#ed6c02',
    active: false,
    path: '/procurement_officer/dashboard',
  },
  {
    id: 'cbo_manager',
    title: 'Demo CBO',
    description: 'Community-based organization management',
    icon: CBOIcon,
    color: '#9c27b0',
    active: false,
    path: '/cbo_manager/dashboard',
  },
  {
    id: 'project_manager',
    title: 'Demo PM',
    description: 'Project tracking and implementation oversight',
    icon: ProjectManagerIcon,
    color: '#d32f2f',
    active: false,
    path: '/project_manager/dashboard',
  },
  {
    id: 'regulator',
    title: 'Demo Regulator',
    description: 'Regulatory compliance and oversight tools',
    icon: RegulatorIcon,
    color: '#7b1fa2',
    active: false,
    path: '/regulator/dashboard',
  },
];

export const DemoPage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDemoLogin = (role: typeof demoRoles[0]) => {
    if (role.active) {
      // Create mock user data for the selected role
      const mockUserData = {
        id: `demo-${role.id}-001`,
        name: `Demo ${role.title.split(' ')[1]}`,
        email: `demo.${role.id}@cbpp.gov.ng`,
        role: role.title,
        userType: role.id,
        organization: 'Bureau of Public Procurement',
        department: role.id === 'admin' ? 'Administration' : 'Procurement Department',
        lastLogin: new Date().toISOString(),
      };
      
      // Store user in localStorage for authentication
      localStorage.setItem('user', JSON.stringify(mockUserData));
      
      // Navigate to the role-specific dashboard
      navigate(role.path);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={6} alignItems="center">
        {/* Left Side - Image and Writeup */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: isMobile ? 'center' : 'left' }}>
            <Typography 
              variant="h3" 
              component="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold',
                color: theme.palette.primary.main,
                mb: 3
              }}
            >
              Platform Demo
            </Typography>
            
            <Typography 
              variant="h5" 
              component="h2" 
              gutterBottom 
              sx={{ 
                color: theme.palette.text.secondary,
                mb: 3,
                lineHeight: 1.4
              }}
            >
              Experience the Community-Based Procurement Platform through interactive role-based demos
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4,
                lineHeight: 1.6,
                color: theme.palette.text.secondary
              }}
            >
              Explore different user roles and their unique dashboards, features, and workflows. 
              Each demo provides a comprehensive view of how different stakeholders interact with 
              the CBPP platform for transparent and efficient procurement processes.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
              <Chip 
                label="Interactive Demos" 
                color="primary" 
                variant="outlined"
                icon={<PlayIcon />}
              />
              <Chip 
                label="Role-Based Access" 
                color="secondary" 
                variant="outlined"
              />
              <Chip 
                label="Real Data" 
                color="success" 
                variant="outlined"
              />
            </Box>

            {/* Demo Image */}
            <Box
              component="img"
              src="/images/hero-illustration.png"
              alt="Platform Demo Illustration"
              sx={{
                width: '100%',
                maxWidth: 400,
                height: 'auto',
                borderRadius: 2,
                boxShadow: theme.shadows[4],
              }}
            />
          </Box>
        </Grid>

        {/* Right Side - Button Grid */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
            <Typography 
              variant="h4" 
              component="h2" 
              gutterBottom 
              sx={{ 
                textAlign: 'center',
                fontWeight: 'bold',
                mb: 4
              }}
            >
              Choose Your Demo Role
            </Typography>
            
            <Grid container spacing={2}>
              {demoRoles.map((role) => {
                const IconComponent = role.icon;
                return (
                  <Grid item xs={12} sm={6} key={role.id}>
                    <Button
                      variant={role.active ? "contained" : "outlined"}
                      fullWidth
                      size="large"
                      onClick={() => handleDemoLogin(role)}
                      disabled={!role.active}
                      sx={{
                        py: 3,
                        px: 2,
                        flexDirection: 'column',
                        gap: 1,
                        borderRadius: 2,
                        border: role.active ? 'none' : `2px solid ${theme.palette.grey[300]}`,
                        backgroundColor: role.active ? role.color : 'transparent',
                        color: role.active ? 'white' : theme.palette.text.secondary,
                        '&:hover': {
                          backgroundColor: role.active ? role.color : theme.palette.grey[100],
                          transform: role.active ? 'translateY(-2px)' : 'none',
                          boxShadow: role.active ? theme.shadows[4] : 'none',
                        },
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <IconComponent sx={{ fontSize: 32 }} />
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {role.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          textAlign: 'center',
                          opacity: 0.9,
                          fontSize: '0.75rem'
                        }}
                      >
                        {role.description}
                      </Typography>
                      
                      {!role.active && (
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                          }}
                        >
                          <LockIcon sx={{ fontSize: 16 }} />
                          <Typography variant="caption">Coming Soon</Typography>
                        </Box>
                      )}
                    </Button>
                  </Grid>
                );
              })}
            </Grid>

            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Demo accounts provide full access to role-specific features and data
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
                Inactive demos will be available in future updates
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}; 