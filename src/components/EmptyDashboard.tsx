import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  useTheme,
} from '@mui/material';
import { useAppContext } from '../contexts/AppContext';

interface EmptyDashboardProps {
  role: string;
}

export const EmptyDashboard: React.FC<EmptyDashboardProps> = ({ role }) => {
  const theme = useTheme();
  const { user } = useAppContext();

  const getRoleDisplayName = (roleType: string) => {
    const roleMap: { [key: string]: string } = {
      contractor: 'Contractor',
      procurement_officer: 'Procurement Officer',
      cbo_manager: 'CBO Manager',
      project_manager: 'Project Manager',
      regulator: 'Regulator',
    };
    return roleMap[roleType] || roleType;
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {getRoleDisplayName(role)} Dashboard
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom sx={{ mb: 4 }}>
        Welcome, {user?.name || 'User'}
      </Typography>

      <Paper elevation={2} sx={{ p: 6, textAlign: 'center' }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            🚧 Dashboard Under Construction
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            The {getRoleDisplayName(role)} dashboard is currently being developed.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            This dashboard will provide {getRoleDisplayName(role).toLowerCase()}-specific features and functionality.
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: 2,
          mt: 4 
        }}>
          <Typography variant="h6" color="primary">
            Coming Soon Features:
          </Typography>
          <Box component="ul" sx={{ textAlign: 'left', pl: 0 }}>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>
              • Role-specific navigation and menu items
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>
              • Customized dashboard widgets and metrics
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>
              • Specialized workflows and processes
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>
              • Role-based permissions and access control
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 6, p: 3, backgroundColor: theme.palette.grey[50], borderRadius: 2 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Current Route:</strong> /{role}/dashboard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>User Role:</strong> {getRoleDisplayName(role)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>User ID:</strong> {user?.id || 'N/A'}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}; 