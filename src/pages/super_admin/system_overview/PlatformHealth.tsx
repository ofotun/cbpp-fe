import React from 'react';
import {
  Box,
  Typography,
  Alert,
  AlertTitle,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  Monitor as MonitorIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  TrendingUp as TrendingUpIcon,
  Memory as MemoryIcon,
  Storage as StorageIcon,
  Speed as SpeedIcon,
  Cloud as CloudIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';

const PlatformHealth: React.FC = () => {
  // Mock system health data
  const mockSystemHealth = {
    overallHealth: 98.5,
    components: [
      {
        name: 'Application Server',
        status: 'healthy',
        health: 99.2,
        responseTime: 45,
        uptime: 99.9,
      },
      {
        name: 'Database Server',
        status: 'healthy',
        health: 97.8,
        responseTime: 12,
        uptime: 99.8,
      },
      {
        name: 'API Gateway',
        status: 'warning',
        health: 85.5,
        responseTime: 120,
        uptime: 99.5,
      },
      {
        name: 'File Storage',
        status: 'healthy',
        health: 99.1,
        responseTime: 25,
        uptime: 99.9,
      },
      {
        name: 'Authentication Service',
        status: 'healthy',
        health: 98.9,
        responseTime: 35,
        uptime: 99.7,
      },
      {
        name: 'Email Service',
        status: 'error',
        health: 45.2,
        responseTime: 500,
        uptime: 85.2,
      },
    ],
    metrics: {
      cpuUsage: 45,
      memoryUsage: 62,
      diskUsage: 78,
      networkLatency: 12,
      activeConnections: 1247,
      requestsPerSecond: 89,
    },
    alerts: [
      {
        id: 'alert-001',
        severity: 'warning',
        title: 'High API Response Time',
        description: 'API Gateway response time is above normal threshold',
        timestamp: '2024-01-15T14:30:00Z',
      },
      {
        id: 'alert-002',
        severity: 'error',
        title: 'Email Service Down',
        description: 'Email service is not responding to requests',
        timestamp: '2024-01-15T13:45:00Z',
      },
      {
        id: 'alert-003',
        severity: 'info',
        title: 'Scheduled Maintenance',
        description: 'Database maintenance completed successfully',
        timestamp: '2024-01-15T12:20:00Z',
      },
    ],
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'success';
      case 'warning':
        return 'warning';
      case 'error':
        return 'error';
      default:
        return 'default';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return <CheckCircleIcon />;
      case 'warning':
        return <WarningIcon />;
      case 'error':
        return <ErrorIcon />;
      default:
        return <MonitorIcon />;
    }
  };

  const getAlertColor = (severity: string) => {
    switch (severity) {
      case 'error':
        return 'error';
      case 'warning':
        return 'warning';
      case 'info':
        return 'info';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Platform Health
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Real-time system health monitoring and performance metrics
        </Typography>
      </Box>

      {/* Under Construction Alert */}
      <Alert severity="info" sx={{ mb: 4 }}>
        <AlertTitle>Under Construction</AlertTitle>
        The Platform Health page is currently being developed. This page will include:
        <Box component="ul" sx={{ mt: 1, pl: 2 }}>
          <li>Real-time system health monitoring and alerting</li>
          <li>Performance metrics and resource utilization tracking</li>
          <li>Component health status and response time monitoring</li>
          <li>Automated health checks and diagnostic tools</li>
          <li>System alerts and notification management</li>
          <li>Historical health data and trend analysis</li>
        </Box>
      </Alert>

      {/* Overall Health Status */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <MonitorIcon sx={{ color: 'primary.main', mr: 1, fontSize: 32 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Overall System Health
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    {mockSystemHealth.overallHealth}%
                  </Typography>
                </Box>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={mockSystemHealth.overallHealth}
                sx={{ height: 12, borderRadius: 6 }}
              />
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                System is operating normally
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                System Metrics
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                      {mockSystemHealth.metrics.cpuUsage}%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      CPU Usage
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ color: 'info.main', fontWeight: 'bold' }}>
                      {mockSystemHealth.metrics.memoryUsage}%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Memory Usage
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ color: 'warning.main', fontWeight: 'bold' }}>
                      {mockSystemHealth.metrics.diskUsage}%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Disk Usage
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ color: 'success.main', fontWeight: 'bold' }}>
                      {mockSystemHealth.metrics.networkLatency}ms
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Network Latency
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Component Health */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Component Health Status
              </Typography>
              <List>
                {mockSystemHealth.components.map((component, index) => (
                  <React.Fragment key={component.name}>
                    <ListItem>
                      <ListItemIcon>
                        {getStatusIcon(component.status)}
                      </ListItemIcon>
                      <ListItemText 
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                              {component.name}
                            </Typography>
                            <Chip 
                              icon={getStatusIcon(component.status)}
                              label={component.status}
                              color={getStatusColor(component.status) as any}
                              size="small"
                            />
                          </Box>
                        }
                        secondary={
                          <Box sx={{ mt: 1 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                              <Typography variant="body2">Health Score</Typography>
                              <Typography variant="body2">{component.health}%</Typography>
                            </Box>
                            <LinearProgress 
                              variant="determinate" 
                              value={component.health}
                              sx={{ height: 6, borderRadius: 3, mb: 1 }}
                            />
                            <Box sx={{ display: 'flex', gap: 3 }}>
                              <Typography variant="body2" color="text.secondary">
                                Response: {component.responseTime}ms
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Uptime: {component.uptime}%
                              </Typography>
                            </Box>
                          </Box>
                        }
                      />
                    </ListItem>
                    {index < mockSystemHealth.components.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                System Alerts
              </Typography>
              <List dense>
                {mockSystemHealth.alerts.map((alert) => (
                  <ListItem key={alert.id}>
                    <ListItemIcon>
                      {alert.severity === 'error' ? <ErrorIcon color="error" /> :
                       alert.severity === 'warning' ? <WarningIcon color="warning" /> :
                       <CheckCircleIcon color="info" />}
                    </ListItemIcon>
                    <ListItemText 
                      primary={alert.title}
                      secondary={
                        <Box>
                          <Typography variant="body2" color="text.secondary">
                            {alert.description}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {new Date(alert.timestamp).toLocaleString()}
                          </Typography>
                        </Box>
                      }
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

export default PlatformHealth; 