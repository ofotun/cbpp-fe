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
} from '@mui/material';
import {
  Assignment as AssignmentIcon,
  Group as GroupIcon,
  Report as ReportIcon,
  Tune as TuneIcon,
  TrendingUp as TrendingUpIcon,
  Schedule as ScheduleIcon,
  CheckCircle as CheckCircleIcon,
  Pending as PendingIcon,
  Warning as WarningIcon,
  Campaign as CampaignIcon,
} from '@mui/icons-material';

const BPPAdminDashboard: React.FC = () => {
  // Mock data for BPP admin dashboard
  const mockData = {
    totalTenders: 156,
    activeTenders: 89,
    pendingApproval: 23,
    genderQuotaMet: 78,
    lgaQuotaMet: 92,
    llmReportsGenerated: 45,
    systemConfigurations: 12,
    lastTenderCreated: '2024-01-15T14:30:00Z',
    recentTenders: [
      {
        id: 'tender-001',
        title: 'Community Health Center Construction',
        status: 'active',
        genderQuota: '30%',
        lgaQuota: 'Local',
        date: '2024-01-15',
      },
      {
        id: 'tender-002',
        title: 'Rural Road Rehabilitation Project',
        status: 'pending',
        genderQuota: '25%',
        lgaQuota: 'Regional',
        date: '2024-01-14',
      },
      {
        id: 'tender-003',
        title: 'Solar Power Installation Initiative',
        status: 'active',
        genderQuota: '35%',
        lgaQuota: 'National',
        date: '2024-01-13',
      },
    ],
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'success';
      case 'pending':
        return 'warning';
      case 'draft':
        return 'info';
      default:
        return 'default';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircleIcon />;
      case 'pending':
        return <PendingIcon />;
      case 'draft':
        return <ScheduleIcon />;
      default:
        return <WarningIcon />;
    }
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          BPP Admin Dashboard
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Tender management and system configuration overview
        </Typography>
      </Box>

      {/* Under Construction Alert */}
      <Alert severity="info" sx={{ mb: 4 }}>
        <AlertTitle>Under Construction</AlertTitle>
        The BPP Admin dashboard is currently being developed. This page will include:
        <Box component="ul" sx={{ mt: 1, pl: 2 }}>
          <li>Comprehensive tender management and configuration tools</li>
          <li>Gender and LGA quota setting and monitoring</li>
          <li>LLM report generation and analysis</li>
          <li>System configuration management</li>
          <li>Advanced analytics and performance metrics</li>
          <li>User management and access control</li>
        </Box>
      </Alert>

      {/* Key Metrics */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AssignmentIcon sx={{ color: 'primary.main', mr: 1 }} />
                <Typography variant="h6" component="div">
                  Total Tenders
                </Typography>
              </Box>
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                {mockData.totalTenders}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                All time
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CheckCircleIcon sx={{ color: 'success.main', mr: 1 }} />
                <Typography variant="h6" component="div">
                  Active Tenders
                </Typography>
              </Box>
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'success.main' }}>
                {mockData.activeTenders}
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
                <GroupIcon sx={{ color: 'info.main', mr: 1 }} />
                <Typography variant="h6" component="div">
                  Gender Quota Met
                </Typography>
              </Box>
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'info.main' }}>
                {mockData.genderQuotaMet}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Target achievement
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <ReportIcon sx={{ color: 'secondary.main', mr: 1 }} />
                <Typography variant="h6" component="div">
                  LLM Reports
                </Typography>
              </Box>
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
                {mockData.llmReportsGenerated}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Generated this month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Progress Overview */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Quota Compliance
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Gender Quota</Typography>
                  <Typography variant="body2">{mockData.genderQuotaMet}%</Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={mockData.genderQuotaMet}
                  sx={{ height: 8, borderRadius: 4, mb: 2 }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">LGA Quota</Typography>
                  <Typography variant="body2">{mockData.lgaQuotaMet}%</Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={mockData.lgaQuotaMet}
                  sx={{ height: 8, borderRadius: 4 }}
                />
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Chip 
                  icon={<CheckCircleIcon />} 
                  label={`${mockData.genderQuotaMet}% Gender`} 
                  color="success" 
                  variant="outlined"
                />
                <Chip 
                  icon={<CheckCircleIcon />} 
                  label={`${mockData.lgaQuotaMet}% LGA`} 
                  color="success" 
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
                Recent Activity
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <CampaignIcon color="success" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="New tender created"
                    secondary="Community Health Center Construction"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TuneIcon color="info" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="System configuration updated"
                    secondary="Gender quota settings modified"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ReportIcon color="warning" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="LLM report generated"
                    secondary="Monthly procurement analysis"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Recent Tenders */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Recent Tenders
          </Typography>
          <List>
            {mockData.recentTenders.map((tender, index) => (
              <React.Fragment key={tender.id}>
                <ListItem>
                  <ListItemIcon>
                    {getStatusIcon(tender.status)}
                  </ListItemIcon>
                  <ListItemText
                    primary={tender.title}
                    secondary={`Date: ${tender.date} | Gender Quota: ${tender.genderQuota} | LGA Quota: ${tender.lgaQuota}`}
                  />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Chip 
                      label={tender.status} 
                      color={getStatusColor(tender.status) as any}
                      size="small"
                      variant="outlined"
                    />
                  </Box>
                </ListItem>
                {index < mockData.recentTenders.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BPPAdminDashboard; 