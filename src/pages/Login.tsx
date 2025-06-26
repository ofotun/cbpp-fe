import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Paper,
  useTheme,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  useMediaQuery,
} from '@mui/material';
import { useAppContext } from '../contexts/AppContext';

const userTypes = [
  { value: 'admin', label: 'Administrator' },
  { value: 'super_admin', label: 'Super Admin' },
  { value: 'bpp_admin', label: 'BPP Admin' },
  { value: 'procurement_officer', label: 'Procurement Officer' },
  { value: 'cbo_manager', label: 'CBO Manager' },
  { value: 'project_manager', label: 'Project Manager' },
  { value: 'contractor', label: 'Contractor' },
  { value: 'regulator', label: 'Regulator' },
  { value: 'evaluator', label: 'Evaluator' }
];

const Login: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { setUser } = useAppContext();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [userType, setUserType] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication
    if (username && password && userType) {
      const userData = {
        id: 'user-123',
        name: username,
        email: `${username}@cbpp.gov.ng`,
        role: userTypes.find(type => type.value === userType)?.label || '',
        userType: userType, // Add userType for role-based routing
        organization: 'Bureau of Public Procurement',
        department: userType === 'admin' ? 'Administration' : userType === 'super_admin' ? 'System Administration' : 'Procurement Department',
        lastLogin: new Date().toISOString(),
      };
      
      // Store user in context
      setUser(userData);
      
      // Store in localStorage for auth persistence
      localStorage.setItem('user', JSON.stringify(userData));
      
      // Role-based routing
      if (userType === 'admin') {
        // Administrator goes to current dashboard
        navigate('/app/dashboard');
      } else if (userType === 'super_admin') {
        // Super Admin goes to super admin dashboard
        navigate('/super-admin/dashboard');
      } else {
        // All other users go to their role-specific routes
        navigate(`/${userType}/dashboard`);
      }
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          py: 8,
        }}
      >
        <Paper elevation={3} sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
            {isMobile ? (
              <Box
                component="img"
                src="/images/logos/cbpp-logo-mark.png"
                alt="CBPP Logo"
                sx={{
                  height: 48,
                }}
              />
            ) : (
              <Box
                component="img"
                src="/images/logos/cbpp-full-logo.png"
                alt="CBPP - Community-Based Procurement Platform"
                sx={{
                  height: 48,
                }}
              />
            )}
          </Box>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Login
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" align="center" sx={{ mb: 4 }}>
            Community-Based Procurement Platform
          </Typography>

          <form onSubmit={handleLogin}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>User Type</InputLabel>
                  <Select
                    value={userType}
                    label="User Type"
                    onChange={(e) => setUserType(e.target.value)}
                    required
                  >
                    {userTypes.map((type) => (
                      <MenuItem key={type.value} value={type.value}>
                        {type.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Grid>
              {error && (
                <Grid item xs={12}>
                  <Typography color="error" align="center">
                    {error}
                  </Typography>
                </Grid>
              )}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>

          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              <Link
                component="button"
                variant="body2"
                onClick={() => navigate('/')}
                sx={{ mr: 2 }}
              >
                Back to Home
              </Link>
              |
              <Link
                component="button"
                variant="body2"
                onClick={() => navigate('/demo')}
                sx={{ ml: 2, mr: 2 }}
              >
                Back to Demo
              </Link>
              |
              <Link
                component="button"
                variant="body2"
                onClick={() => navigate('/signup')}
                sx={{ ml: 2 }}
              >
                Create an Account
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login; 