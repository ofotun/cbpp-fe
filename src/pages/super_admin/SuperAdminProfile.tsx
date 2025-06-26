import React from 'react';
import {
  Box,
  Typography,
  Alert,
  AlertTitle,
  Card,
  CardContent,
  Grid,
  Avatar,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Business as BusinessIcon,
  Security as SecurityIcon,
  AdminPanelSettings as AdminPanelSettingsIcon,
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  VerifiedUser as VerifiedUserIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material';

const SuperAdminProfile: React.FC = () => {
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
    permissions: [
      'Full system access',
      'User management',
      'Role assumption',
      'System configuration',
      'Security management',
      'Compliance oversight',
      'Analytics access',
      'Audit management',
    ],
    activityLog: [
      {
        id: 'activity-001',
        action: 'Role assumption - BPP Admin',
        timestamp: '2024-01-15T14:30:00Z',
        status: 'completed',
      },
      {
        id: 'activity-002',
        action: 'System configuration updated',
        timestamp: '2024-01-15T13:45:00Z',
        status: 'completed',
      },
      {
        id: 'activity-003',
        action: 'User permissions modified',
        timestamp: '2024-01-15T12:20:00Z',
        status: 'completed',
      },
      {
        id: 'activity-004',
        action: 'Compliance audit initiated',
        timestamp: '2024-01-15T11:15:00Z',
        status: 'pending',
      },
    ],
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Super Admin Profile
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Manage your super admin profile and administrative settings
        </Typography>
      </Box>

      {/* Under Construction Alert */}
      <Alert severity="info" sx={{ mb: 4 }}>
        <AlertTitle>Under Construction</AlertTitle>
        The Super Admin profile page is currently being developed. This page will include:
        <Box component="ul" sx={{ mt: 1, pl: 2 }}>
          <li>Comprehensive profile management with enhanced security features</li>
          <li>Administrative permissions and access control management</li>
          <li>Role assumption history and audit trails</li>
          <li>System activity logging and monitoring</li>
          <li>Advanced security settings and authentication options</li>
          <li>Administrative action history and compliance tracking</li>
        </Box>
      </Alert>

      <Grid container spacing={3}>
        {/* Profile Information */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    bgcolor: 'primary.main',
                    fontSize: '2rem',
                    mr: 3,
                  }}
                >
                  {mockSuperAdminUser.firstName.charAt(0)}
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    {mockSuperAdminUser.firstName} {mockSuperAdminUser.surname}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>
                    {mockSuperAdminUser.specialization}
                  </Typography>
                  <Chip 
                    icon={<AdminPanelSettingsIcon />} 
                    label="Super Administrator" 
                    color="primary" 
                    variant="outlined"
                  />
                </Box>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <EmailIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      Email Address
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {mockSuperAdminUser.email}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PhoneIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      Phone Number
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {mockSuperAdminUser.phone}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <BusinessIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      Organization
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {mockSuperAdminUser.organization}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PersonIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      Department
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {mockSuperAdminUser.department}
                  </Typography>
                </Grid>
              </Grid>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" gutterBottom>
                Administrative Permissions
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {mockSuperAdminUser.permissions.map((permission, index) => (
                  <Chip 
                    key={index}
                    icon={<VerifiedUserIcon />}
                    label={permission}
                    color="success"
                    variant="outlined"
                    size="small"
                  />
                ))}
              </Box>

              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="outlined"
                  startIcon={<EditIcon />}
                >
                  Edit Profile
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<SecurityIcon />}
                >
                  Security Settings
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Activity Log */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Activity
              </Typography>
              <List dense>
                {mockSuperAdminUser.activityLog.map((activity) => (
                  <ListItem key={activity.id}>
                    <ListItemIcon>
                      <ScheduleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={activity.action}
                      secondary={new Date(activity.timestamp).toLocaleString()}
                    />
                    <Chip 
                      label={activity.status}
                      color={activity.status === 'completed' ? 'success' : 'warning'}
                      size="small"
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SuperAdminProfile; 