import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Alert,
  AlertTitle,
  Chip,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
  Divider,
  Button,
  useTheme,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Group as GroupIcon,
  Assignment as AssignmentIcon,
  AccountBalance as AccountBalanceIcon,
  Security as SecurityIcon,
  Analytics as AnalyticsIcon,
  TrendingUp as TrendingUpIcon,
  Schedule as ScheduleIcon,
  CheckCircle as CheckCircleIcon,
  Pending as PendingIcon,
  Warning as WarningIcon,
  Campaign as CampaignIcon,
  Monitor as MonitorIcon,
  AdminPanelSettings as AdminPanelSettingsIcon,
  Business as BusinessIcon,
  Assessment as AssessmentIcon,
  Tune as TuneIcon,
} from '@mui/icons-material';

const SuperAdminDashboard: React.FC = () => {
  const theme = useTheme();

  // Mock data for Super Admin dashboard
  const mockData = {
    totalUsers: 1247,
    activeUsers: 892,
    totalOrganizations: 156,
    activeProcurements: 234,
    totalContracts: 567,
    systemHealth: 98.5,
    complianceRate: 94.2,
    budgetUtilization: 87.3,
    recentActivities: [
      {
        id: 'activity-001',
        type: 'user_registration',
        title: 'New CBO Manager registered',
        description: 'Community Development Initiative registered',
        timestamp: '2024-01-15T14:30:00Z',
        status: 'completed',
      },
      {
        id: 'activity-002',
        type: 'procurement_created',
        title: 'New procurement project created',
        description: 'Rural Infrastructure Development Project',
        timestamp: '2024-01-15T13:45:00Z',
        status: 'pending',
      },
      {
        id: 'activity-003',
        type: 'system_alert',
        title: 'System performance alert',
        description: 'High database load detected',
        timestamp: '2024-01-15T12:20:00Z',
        status: 'warning',
      },
      {
        id: 'activity-004',
        type: 'compliance_check',
        title: 'Compliance audit completed',
        description: 'Monthly compliance verification',
        timestamp: '2024-01-15T11:15:00Z',
        status: 'completed',
      },
    ],
    roleDistribution: [
      { role: 'BPP Admin', count: 12, percentage: 15 },
      { role: 'Procurement Officer', count: 45, percentage: 25 },
      { role: 'CBO Manager', count: 89, percentage: 30 },
      { role: 'Project Manager', count: 34, percentage: 18 },
      { role: 'Contractor', count: 156, percentage: 45 },
      { role: 'Regulator', count: 23, percentage: 12 },
      { role: 'Evaluator', count: 67, percentage: 22 },
    ],
    systemMetrics: {
      cpuUsage: 45,
      memoryUsage: 62,
      diskUsage: 78,
      networkLatency: 12,
      activeSessions: 234,
      apiRequests: 1247,
    },
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'pending':
        return 'warning';
      case 'warning':
        return 'error';
      default:
        return 'default';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIcon />;
      case 'pending':
        return <PendingIcon />;
      case 'warning':
        return <WarningIcon />;
      default:
        return <ScheduleIcon />;
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'user_registration':
        return <GroupIcon />;
      case 'procurement_created':
        return <AssignmentIcon />;
      case 'system_alert':
        return <WarningIcon />;
      case 'compliance_check':
        return <SecurityIcon />;
      default:
        return <CampaignIcon />;
    }
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Super Admin Dashboard
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Comprehensive platform overview and system administration
        </Typography>
      </Box>

      {/* Under Construction Alert */}
      <Alert severity="info" sx={{ mb: 4 }}>
        <AlertTitle>Under Construction</AlertTitle>
        The Super Admin dashboard is currently being developed. This page will include:
        <Box component="ul" sx={{ mt: 1, pl: 2 }}>
          <li>Comprehensive platform metrics and system health monitoring</li>
          <li>Cross-role analytics and performance tracking</li>
          <li>Advanced user management and role assumption capabilities</li>
          <li>System configuration and security management</li>
          <li>Compliance monitoring and audit management</li>
          <li>AI-powered insights and optimization recommendations</li>
        </Box>
      </Alert>

      {/* Key Metrics */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <GroupIcon sx={{ color: 'primary.main', mr: 1 }} />
                <Typography variant="h6" component="div">
                  Total Users
                </Typography>
              </Box>
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                {mockData.totalUsers.toLocaleString()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Across all roles
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AssignmentIcon sx={{ color: 'success.main', mr: 1 }} />
                <Typography variant="h6" component="div">
                  Active Procurements
                </Typography>
              </Box>
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'success.main' }}>
                {mockData.activeProcurements}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Currently running
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <MonitorIcon sx={{ color: 'info.main', mr: 1 }} />
                <Typography variant="h6" component="div">
                  System Health
                </Typography>
              </Box>
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'info.main' }}>
                {mockData.systemHealth}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Platform stability
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <SecurityIcon sx={{ color: 'secondary.main', mr: 1 }} />
                <Typography variant="h6" component="div">
                  Compliance Rate
                </Typography>
              </Box>
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
                {mockData.complianceRate}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Regulatory adherence
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* System Overview and Recent Activity */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                System Performance
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">CPU Usage</Typography>
                  <Typography variant="body2">{mockData.systemMetrics.cpuUsage}%</Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={mockData.systemMetrics.cpuUsage}
                  sx={{ height: 8, borderRadius: 4, mb: 2 }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Memory Usage</Typography>
                  <Typography variant="body2">{mockData.systemMetrics.memoryUsage}%</Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={mockData.systemMetrics.memoryUsage}
                  sx={{ height: 8, borderRadius: 4, mb: 2 }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Disk Usage</Typography>
                  <Typography variant="body2">{mockData.systemMetrics.diskUsage}%</Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={mockData.systemMetrics.diskUsage}
                  sx={{ height: 8, borderRadius: 4 }}
                />
              </Box>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Chip 
                  icon={<TrendingUpIcon />} 
                  label={`${mockData.systemMetrics.activeSessions} Active Sessions`} 
                  color="success" 
                  variant="outlined"
                />
                <Chip 
                  icon={<AnalyticsIcon />} 
                  label={`${mockData.systemMetrics.apiRequests} API Requests`} 
                  color="info" 
                  variant="outlined"
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Activities
              </Typography>
              <List dense>
                {mockData.recentActivities.map((activity) => (
                  <ListItem key={activity.id}>
                    <ListItemIcon>
                      {getActivityIcon(activity.type)}
                    </ListItemIcon>
                    <ListItemText 
                      primary={activity.title}
                      secondary={activity.description}
                    />
                    <Chip 
                      icon={getStatusIcon(activity.status)}
                      label={activity.status}
                      color={getStatusColor(activity.status) as any}
                      size="small"
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Role Distribution */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                User Role Distribution
              </Typography>
              <Grid container spacing={2}>
                {mockData.roleDistribution.map((role) => (
                  <Grid item xs={12} sm={6} md={4} key={role.role}>
                    <Box sx={{ p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                        {role.role}
                      </Typography>
                      <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                        {role.count}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {role.percentage}% of total
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Quick Actions
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button
                  variant="outlined"
                  startIcon={<AdminPanelSettingsIcon />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start' }}
                >
                  Role Management
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<MonitorIcon />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start' }}
                >
                  System Health
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<SecurityIcon />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start' }}
                >
                  Compliance Check
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<AnalyticsIcon />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start' }}
                >
                  Platform Analytics
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<TuneIcon />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start' }}
                >
                  System Configuration
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SuperAdminDashboard; 