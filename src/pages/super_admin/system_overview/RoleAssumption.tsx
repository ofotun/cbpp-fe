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
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
} from '@mui/material';
import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Person as PersonIcon,
  Business as BusinessIcon,
  Group as GroupIcon,
  Assignment as AssignmentIcon,
  Security as SecurityIcon,
  Assessment as AssessmentIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Schedule as ScheduleIcon,
  PlayArrow as PlayArrowIcon,
  Stop as StopIcon,
  History as HistoryIcon,
} from '@mui/icons-material';

const RoleAssumption: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [assumptionDialog, setAssumptionDialog] = useState(false);
  const [currentAssumption, setCurrentAssumption] = useState<any>(null);

  // Mock data for role assumption
  const mockRoles = [
    {
      id: 'bpp_admin',
      title: 'BPP Admin',
      description: 'Bureau of Public Procurement Administration',
      icon: AdminPanelSettingsIcon,
      color: '#1976d2',
      permissions: ['Tender Management', 'Quota Configuration', 'System Configuration', 'LLM Reports'],
      activeUsers: 12,
    },
    {
      id: 'procurement_officer',
      title: 'Procurement Officer',
      description: 'Procurement process management and oversight',
      icon: PersonIcon,
      color: '#ed6c02',
      permissions: ['Procurement Management', 'Tender Processing', 'Contract Oversight', 'Reporting'],
      activeUsers: 45,
    },
    {
      id: 'cbo_manager',
      title: 'CBO Manager',
      description: 'Community-Based Organization management',
      icon: GroupIcon,
      color: '#9c27b0',
      permissions: ['Member Management', 'Project Oversight', 'Community Engagement', 'Reporting'],
      activeUsers: 89,
    },
    {
      id: 'project_manager',
      title: 'Project Manager',
      description: 'Project planning and execution management',
      icon: AssignmentIcon,
      color: '#2e7d32',
      permissions: ['Project Planning', 'Timeline Management', 'Resource Allocation', 'Progress Tracking'],
      activeUsers: 34,
    },
    {
      id: 'contractor',
      title: 'Contractor',
      description: 'Contractor dashboard and procurement access',
      icon: BusinessIcon,
      color: '#1565c0',
      permissions: ['Tender Access', 'Contract Management', 'Payment Tracking', 'Reporting'],
      activeUsers: 156,
    },
    {
      id: 'regulator',
      title: 'Regulator',
      description: 'Regulatory compliance and oversight',
      icon: SecurityIcon,
      color: '#d32f2f',
      permissions: ['Compliance Monitoring', 'Audit Management', 'Regulatory Oversight', 'Reporting'],
      activeUsers: 23,
    },
    {
      id: 'evaluator',
      title: 'Evaluator',
      description: 'Bid evaluation and scoring system',
      icon: AssessmentIcon,
      color: '#ff6f00',
      permissions: ['Bid Evaluation', 'Scoring Management', 'Assessment Tools', 'Analytics'],
      activeUsers: 67,
    },
  ];

  const mockAssumptionHistory = [
    {
      id: 'assumption-001',
      role: 'BPP Admin',
      user: 'Mr. Ibrahim Mohammed',
      startTime: '2024-01-15T14:30:00Z',
      endTime: '2024-01-15T16:45:00Z',
      duration: '2h 15m',
      status: 'completed',
      actions: ['Tender configuration updated', 'Quota settings modified', 'System report generated'],
    },
    {
      id: 'assumption-002',
      role: 'Procurement Officer',
      user: 'Mrs. Fatima Ahmed',
      startTime: '2024-01-15T10:15:00Z',
      endTime: '2024-01-15T11:30:00Z',
      duration: '1h 15m',
      status: 'completed',
      actions: ['Procurement process reviewed', 'Contract terms verified', 'Approval workflow checked'],
    },
    {
      id: 'assumption-003',
      role: 'CBO Manager',
      user: 'Mr. John Doe',
      startTime: '2024-01-15T09:00:00Z',
      endTime: null,
      duration: 'Ongoing',
      status: 'active',
      actions: ['Member registration assisted', 'Project status reviewed'],
    },
  ];

  const handleRoleAssumption = (roleId: string) => {
    setSelectedRole(roleId);
    setAssumptionDialog(true);
  };

  const confirmAssumption = () => {
    const role = mockRoles.find(r => r.id === selectedRole);
    setCurrentAssumption({
      role: role?.title,
      startTime: new Date().toISOString(),
      status: 'active',
    });
    setAssumptionDialog(false);
  };

  const stopAssumption = () => {
    setCurrentAssumption(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'success';
      case 'completed':
        return 'primary';
      default:
        return 'default';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <PlayArrowIcon />;
      case 'completed':
        return <CheckCircleIcon />;
      default:
        return <ScheduleIcon />;
    }
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Role Assumption
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Switch to any user role for administrative purposes and troubleshooting
        </Typography>
      </Box>

      {/* Under Construction Alert */}
      <Alert severity="info" sx={{ mb: 4 }}>
        <AlertTitle>Under Construction</AlertTitle>
        The Role Assumption page is currently being developed. This page will include:
        <Box component="ul" sx={{ mt: 1, pl: 2 }}>
          <li>Seamless role switching with complete functionality access</li>
          <li>Action tracking and comprehensive audit logging</li>
          <li>Permission elevation controls and safeguards</li>
          <li>User impersonation with safety measures</li>
          <li>Role assumption history and activity monitoring</li>
          <li>Advanced security controls and approval workflows</li>
        </Box>
      </Alert>

      {/* Current Assumption Status */}
      {currentAssumption && (
        <Alert severity="warning" sx={{ mb: 4 }}>
          <AlertTitle>Active Role Assumption</AlertTitle>
          You are currently assuming the role of <strong>{currentAssumption.role}</strong>.
          <Box sx={{ mt: 2 }}>
            <Button
              variant="outlined"
              color="error"
              startIcon={<StopIcon />}
              onClick={stopAssumption}
            >
              Stop Role Assumption
            </Button>
          </Box>
        </Alert>
      )}

      {/* Available Roles */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {mockRoles.map((role) => (
          <Grid item xs={12} sm={6} md={4} key={role.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: role.color, mr: 2 }}>
                    <role.icon />
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {role.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {role.description}
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  <strong>Active Users:</strong> {role.activeUsers}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  <strong>Key Permissions:</strong>
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                  {role.permissions.slice(0, 2).map((permission, index) => (
                    <Chip 
                      key={index}
                      label={permission}
                      size="small"
                      variant="outlined"
                    />
                  ))}
                  {role.permissions.length > 2 && (
                    <Chip 
                      label={`+${role.permissions.length - 2} more`}
                      size="small"
                      variant="outlined"
                    />
                  )}
                </Box>

                <Button
                  variant="contained"
                  startIcon={<PlayArrowIcon />}
                  fullWidth
                  onClick={() => handleRoleAssumption(role.id)}
                  disabled={currentAssumption !== null}
                >
                  Assume Role
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Assumption History */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Recent Role Assumptions
          </Typography>
          <List>
            {mockAssumptionHistory.map((assumption, index) => (
              <React.Fragment key={assumption.id}>
                <ListItem>
                  <ListItemIcon>
                    {getStatusIcon(assumption.status)}
                  </ListItemIcon>
                  <ListItemText 
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                          {assumption.role}
                        </Typography>
                        <Chip 
                          icon={getStatusIcon(assumption.status)}
                          label={assumption.status}
                          color={getStatusColor(assumption.status) as any}
                          size="small"
                        />
                      </Box>
                    }
                    secondary={
                      <Box sx={{ mt: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                          <strong>User:</strong> {assumption.user} | <strong>Duration:</strong> {assumption.duration}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <strong>Start:</strong> {new Date(assumption.startTime).toLocaleString()}
                        </Typography>
                        {assumption.actions.length > 0 && (
                          <Box sx={{ mt: 1 }}>
                            <Typography variant="body2" color="text.secondary">
                              <strong>Actions:</strong> {assumption.actions.join(', ')}
                            </Typography>
                          </Box>
                        )}
                      </Box>
                    }
                  />
                </ListItem>
                {index < mockAssumptionHistory.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Role Assumption Dialog */}
      <Dialog open={assumptionDialog} onClose={() => setAssumptionDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          Confirm Role Assumption
        </DialogTitle>
        <DialogContent>
          {selectedRole && (
            <Box>
              <Typography variant="body1" sx={{ mb: 2 }}>
                You are about to assume the role of{' '}
                <strong>{mockRoles.find(r => r.id === selectedRole)?.title}</strong>.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                This will give you access to all functions and permissions of this role.
                All your actions will be logged for audit purposes.
              </Typography>
              <Alert severity="warning" sx={{ mb: 2 }}>
                <strong>Important:</strong> Use this feature responsibly and only for legitimate administrative purposes.
              </Alert>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAssumptionDialog(false)}>
            Cancel
          </Button>
          <Button onClick={confirmAssumption} variant="contained" color="primary">
            Confirm Assumption
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default RoleAssumption; 