import React, { useState } from 'react';
import {
  Box,
  Typography,
  Alert,
  AlertTitle,
  Card,
  CardContent,
  Grid,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  Settings as SettingsIcon,
  Security as SecurityIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
  AdminPanelSettings as AdminPanelSettingsIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  Edit as EditIcon,
  VerifiedUser as VerifiedUserIcon,
  Lock as LockIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Business as BusinessIcon,
  Tune as TuneIcon,
  Cloud as CloudIcon,
} from '@mui/icons-material';

const SuperAdminSettings: React.FC = () => {
  const [editMode, setEditMode] = useState(false);
  const [settingsDialog, setSettingsDialog] = useState(false);

  // Mock settings data
  const mockSettings = {
    profile: {
      firstName: 'Dr. Sarah',
      surname: 'Johnson',
      email: 'sarah.johnson@cbpp.gov.ng',
      phone: '08012345678',
      organization: 'Community-Based Procurement Platform',
      department: 'System Administration',
    },
    security: {
      twoFactorAuth: true,
      sessionTimeout: 30,
      passwordExpiry: 90,
      loginAttempts: 5,
      ipWhitelist: ['192.168.1.0/24', '10.0.0.0/8'],
    },
    notifications: {
      emailAlerts: true,
      smsAlerts: false,
      systemAlerts: true,
      securityAlerts: true,
      complianceAlerts: true,
      performanceAlerts: true,
    },
    system: {
      autoBackup: true,
      backupFrequency: 'daily',
      retentionPeriod: 30,
      maintenanceMode: false,
      debugMode: false,
      apiRateLimit: 1000,
    },
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
  };

  const handleSaveSettings = () => {
    setEditMode(false);
    setSettingsDialog(false);
    // In a real app, this would save to the backend
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setSettingsDialog(false);
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Settings
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Manage your account and system configuration settings
        </Typography>
      </Box>

      {/* Under Construction Alert */}
      <Alert severity="info" sx={{ mb: 4 }}>
        <AlertTitle>Under Construction</AlertTitle>
        The Settings page is currently being developed. This page will include:
        <Box component="ul" sx={{ mt: 1, pl: 2 }}>
          <li>Comprehensive account management and profile settings</li>
          <li>Advanced security configuration and authentication options</li>
          <li>Notification preferences and alert management</li>
          <li>System configuration and performance settings</li>
          <li>Permission management and access control</li>
          <li>Data export and backup configuration</li>
        </Box>
      </Alert>

      <Grid container spacing={3}>
        {/* Profile Settings */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <PersonIcon sx={{ color: 'primary.main', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Profile Settings
                </Typography>
                <Button
                  startIcon={<EditIcon />}
                  onClick={() => setEditMode(true)}
                  sx={{ ml: 'auto' }}
                  size="small"
                >
                  Edit
                </Button>
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    value={mockSettings.profile.firstName}
                    disabled={!editMode}
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Surname"
                    value={mockSettings.profile.surname}
                    disabled={!editMode}
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    value={mockSettings.profile.email}
                    disabled={!editMode}
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    value={mockSettings.profile.phone}
                    disabled={!editMode}
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Organization"
                    value={mockSettings.profile.organization}
                    disabled={!editMode}
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Department"
                    value={mockSettings.profile.department}
                    disabled={!editMode}
                    size="small"
                  />
                </Grid>
              </Grid>

              {editMode && (
                <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<SaveIcon />}
                    onClick={handleSaveSettings}
                  >
                    Save Changes
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<CancelIcon />}
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* Security Settings */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <SecurityIcon sx={{ color: 'primary.main', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Security Settings
                </Typography>
              </Box>

              <FormControlLabel
                control={
                  <Switch
                    checked={mockSettings.security.twoFactorAuth}
                    disabled={!editMode}
                  />
                }
                label="Two-Factor Authentication"
              />

              <FormControl fullWidth size="small" sx={{ mt: 2 }}>
                <InputLabel>Session Timeout (minutes)</InputLabel>
                <Select
                  value={mockSettings.security.sessionTimeout}
                  label="Session Timeout (minutes)"
                  disabled={!editMode}
                >
                  <MenuItem value={15}>15 minutes</MenuItem>
                  <MenuItem value={30}>30 minutes</MenuItem>
                  <MenuItem value={60}>1 hour</MenuItem>
                  <MenuItem value={120}>2 hours</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth size="small" sx={{ mt: 2 }}>
                <InputLabel>Password Expiry (days)</InputLabel>
                <Select
                  value={mockSettings.security.passwordExpiry}
                  label="Password Expiry (days)"
                  disabled={!editMode}
                >
                  <MenuItem value={30}>30 days</MenuItem>
                  <MenuItem value={60}>60 days</MenuItem>
                  <MenuItem value={90}>90 days</MenuItem>
                  <MenuItem value={180}>180 days</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth size="small" sx={{ mt: 2 }}>
                <InputLabel>Max Login Attempts</InputLabel>
                <Select
                  value={mockSettings.security.loginAttempts}
                  label="Max Login Attempts"
                  disabled={!editMode}
                >
                  <MenuItem value={3}>3 attempts</MenuItem>
                  <MenuItem value={5}>5 attempts</MenuItem>
                  <MenuItem value={10}>10 attempts</MenuItem>
                </Select>
              </FormControl>

              <Button
                variant="outlined"
                startIcon={<LockIcon />}
                sx={{ mt: 2 }}
                fullWidth
              >
                Change Password
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Notification Settings */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <NotificationsIcon sx={{ color: 'primary.main', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Notification Preferences
                </Typography>
              </Box>

              <FormControlLabel
                control={
                  <Switch
                    checked={mockSettings.notifications.emailAlerts}
                    disabled={!editMode}
                  />
                }
                label="Email Alerts"
              />

              <FormControlLabel
                control={
                  <Switch
                    checked={mockSettings.notifications.smsAlerts}
                    disabled={!editMode}
                  />
                }
                label="SMS Alerts"
              />

              <FormControlLabel
                control={
                  <Switch
                    checked={mockSettings.notifications.systemAlerts}
                    disabled={!editMode}
                  />
                }
                label="System Alerts"
              />

              <FormControlLabel
                control={
                  <Switch
                    checked={mockSettings.notifications.securityAlerts}
                    disabled={!editMode}
                  />
                }
                label="Security Alerts"
              />

              <FormControlLabel
                control={
                  <Switch
                    checked={mockSettings.notifications.complianceAlerts}
                    disabled={!editMode}
                  />
                }
                label="Compliance Alerts"
              />

              <FormControlLabel
                control={
                  <Switch
                    checked={mockSettings.notifications.performanceAlerts}
                    disabled={!editMode}
                  />
                }
                label="Performance Alerts"
              />
            </CardContent>
          </Card>
        </Grid>

        {/* System Settings */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <TuneIcon sx={{ color: 'primary.main', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  System Configuration
                </Typography>
              </Box>

              <FormControlLabel
                control={
                  <Switch
                    checked={mockSettings.system.autoBackup}
                    disabled={!editMode}
                  />
                }
                label="Automatic Backup"
              />

              <FormControl fullWidth size="small" sx={{ mt: 2 }}>
                <InputLabel>Backup Frequency</InputLabel>
                <Select
                  value={mockSettings.system.backupFrequency}
                  label="Backup Frequency"
                  disabled={!editMode}
                >
                  <MenuItem value="hourly">Hourly</MenuItem>
                  <MenuItem value="daily">Daily</MenuItem>
                  <MenuItem value="weekly">Weekly</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth size="small" sx={{ mt: 2 }}>
                <InputLabel>Retention Period (days)</InputLabel>
                <Select
                  value={mockSettings.system.retentionPeriod}
                  label="Retention Period (days)"
                  disabled={!editMode}
                >
                  <MenuItem value={7}>7 days</MenuItem>
                  <MenuItem value={30}>30 days</MenuItem>
                  <MenuItem value={90}>90 days</MenuItem>
                </Select>
              </FormControl>

              <FormControlLabel
                control={
                  <Switch
                    checked={mockSettings.system.maintenanceMode}
                    disabled={!editMode}
                  />
                }
                label="Maintenance Mode"
                sx={{ mt: 2 }}
              />

              <FormControlLabel
                control={
                  <Switch
                    checked={mockSettings.system.debugMode}
                    disabled={!editMode}
                  />
                }
                label="Debug Mode"
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Permissions */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <AdminPanelSettingsIcon sx={{ color: 'primary.main', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Administrative Permissions
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {mockSettings.permissions.map((permission, index) => (
                  <Chip 
                    key={index}
                    icon={<VerifiedUserIcon />}
                    label={permission}
                    color="success"
                    variant="outlined"
                  />
                ))}
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                These permissions are automatically granted to Super Administrators and cannot be modified.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SuperAdminSettings; 