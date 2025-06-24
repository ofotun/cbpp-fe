import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Button,
  Paper,
  Stack,
  useTheme,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Pending as PendingIcon,
  Warning as WarningIcon,
  Assignment as AssignmentIcon,
  Payment as PaymentIcon,
  TrendingUp as TrendingUpIcon,
  Notifications as NotificationsIcon,
  Business as BusinessIcon,
  AccountBalance as AccountBalanceIcon,
  School as SchoolIcon,
  Description as DescriptionIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material';
import {
  mockContractorUser,
  mockVerificationStatus,
  mockActiveContracts,
  mockPendingApplications,
  mockDashboardMetrics,
  mockNotifications,
} from '../../services/contractorMockData';

const ContractorDashboard: React.FC = () => {
  const theme = useTheme();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIcon sx={{ color: 'success.main' }} />;
      case 'pending':
        return <PendingIcon sx={{ color: 'warning.main' }} />;
      default:
        return <WarningIcon sx={{ color: 'error.main' }} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'pending':
        return 'warning';
      default:
        return 'error';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Box>
      {/* Welcome Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
          Welcome back, {mockContractorUser.firstName}!
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Here's what's happening with your account today
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Verification Status Card */}
        <Grid item xs={12} lg={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <BusinessIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Verification Status
                </Typography>
              </Box>
              
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Overall Completion</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    {mockVerificationStatus.overallCompletion}%
                  </Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={mockVerificationStatus.overallCompletion}
                  sx={{ height: 8, borderRadius: 4 }}
                />
              </Box>

              <Stack spacing={1}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="body2">BVN Verification</Typography>
                  {getStatusIcon(mockVerificationStatus.bvn.status)}
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="body2">Bank Details</Typography>
                  {getStatusIcon(mockVerificationStatus.bankDetails.status)}
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="body2">Ward Verification</Typography>
                  {getStatusIcon(mockVerificationStatus.ward.status)}
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="body2">CBO Membership</Typography>
                  {getStatusIcon(mockVerificationStatus.cboMembership.status)}
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="body2">Documents</Typography>
                  {getStatusIcon(mockVerificationStatus.documents.status)}
                </Box>
              </Stack>

              {mockVerificationStatus.documents.status === 'pending' && (
                <Button 
                  variant="outlined" 
                  size="small" 
                  sx={{ mt: 2, width: '100%' }}
                >
                  Complete Document Upload
                </Button>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* Key Metrics */}
        <Grid item xs={12} lg={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent sx={{ textAlign: 'center' }}>
                  <AssignmentIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 1 }} />
                  <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {mockDashboardMetrics.activeContracts}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Active Contracts
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent sx={{ textAlign: 'center' }}>
                  <PaymentIcon sx={{ fontSize: 40, color: theme.palette.success.main, mb: 1 }} />
                  <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {formatCurrency(mockDashboardMetrics.totalEarnings)}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Total Earnings
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent sx={{ textAlign: 'center' }}>
                  <TrendingUpIcon sx={{ fontSize: 40, color: theme.palette.warning.main, mb: 1 }} />
                  <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {mockDashboardMetrics.applicationsPending}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Pending Applications
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent sx={{ textAlign: 'center' }}>
                  <AccountBalanceIcon sx={{ fontSize: 40, color: theme.palette.info.main, mb: 1 }} />
                  <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {formatCurrency(mockDashboardMetrics.pendingPayments)}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Pending Payments
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Active Contracts */}
        <Grid item xs={12} lg={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Active Contracts
                </Typography>
                <Button variant="outlined" size="small">
                  View All
                </Button>
              </Box>
              
              <Stack spacing={2}>
                {mockActiveContracts.map((contract) => (
                  <Paper key={contract.id} sx={{ p: 2, border: 1, borderColor: 'divider' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                          {contract.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {contract.description}
                        </Typography>
                      </Box>
                      <Chip 
                        label={contract.status} 
                        color="success" 
                        size="small" 
                      />
                    </Box>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="body2">
                        Value: {formatCurrency(contract.value)}
                      </Typography>
                      <Typography variant="body2">
                        Progress: {contract.progress}%
                      </Typography>
                    </Box>
                    
                    <LinearProgress 
                      variant="determinate" 
                      value={contract.progress}
                      sx={{ height: 6, borderRadius: 3 }}
                    />
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {contract.location}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Due: {new Date(contract.endDate).toLocaleDateString()}
                      </Typography>
                    </Box>
                  </Paper>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Notifications */}
        <Grid item xs={12} lg={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <NotificationsIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Recent Notifications
                </Typography>
              </Box>
              
              <List sx={{ p: 0 }}>
                {mockNotifications.slice(0, 5).map((notification, index) => (
                  <React.Fragment key={notification.id}>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <Avatar 
                          sx={{ 
                            width: 24, 
                            height: 24, 
                            bgcolor: notification.type === 'success' ? 'success.main' : 
                                    notification.type === 'warning' ? 'warning.main' : 'info.main'
                          }}
                        >
                          <NotificationsIcon sx={{ fontSize: 14 }} />
                        </Avatar>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="body2" sx={{ fontWeight: notification.read ? 'normal' : 'bold' }}>
                            {notification.title}
                          </Typography>
                        }
                        secondary={
                          <Box>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                              {notification.message}
                            </Typography>
                            <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', mt: 0.5 }}>
                              {new Date(notification.date).toLocaleDateString()}
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                    {index < mockNotifications.slice(0, 5).length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
              
              <Button 
                variant="outlined" 
                size="small" 
                sx={{ mt: 2, width: '100%' }}
              >
                View All Notifications
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Pending Applications */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Pending Applications
                </Typography>
                <Button variant="outlined" size="small">
                  View All Applications
                </Button>
              </Box>
              
              <Grid container spacing={2}>
                {mockPendingApplications.map((application) => (
                  <Grid item xs={12} sm={6} md={4} key={application.id}>
                    <Paper sx={{ p: 2, border: 1, borderColor: 'divider' }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                          {application.tenderTitle}
                        </Typography>
                        <Chip 
                          label={application.status} 
                          color={application.status === 'shortlisted' ? 'success' : 'warning'} 
                          size="small" 
                        />
                      </Box>
                      
                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                        Value: {formatCurrency(application.value)}
                      </Typography>
                      
                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                        Location: {application.location}
                      </Typography>
                      
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Submitted: {new Date(application.submittedDate).toLocaleDateString()}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContractorDashboard; 