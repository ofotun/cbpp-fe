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
  Assessment as AssessmentIcon,
  Score as ScoreIcon,
  FilterList as FilterListIcon,
  LocationOn as LocationIcon,
  TrendingUp as TrendingUpIcon,
  Schedule as ScheduleIcon,
  CheckCircle as CheckCircleIcon,
  Pending as PendingIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';

const EvaluatorDashboard: React.FC = () => {
  // Mock data for evaluator dashboard
  const mockData = {
    totalEvaluations: 24,
    completedEvaluations: 18,
    pendingEvaluations: 6,
    averageScore: 87.5,
    geographicCoverage: 12,
    lastEvaluation: '2024-01-15T10:30:00Z',
    recentEvaluations: [
      {
        id: 'eval-001',
        projectName: 'Community Health Center Construction',
        contractor: 'ABC Construction Ltd',
        score: 92,
        status: 'completed',
        date: '2024-01-15',
      },
      {
        id: 'eval-002',
        projectName: 'Rural Road Rehabilitation',
        contractor: 'XYZ Infrastructure Co',
        score: 78,
        status: 'pending',
        date: '2024-01-14',
      },
      {
        id: 'eval-003',
        projectName: 'Solar Power Installation',
        contractor: 'Green Energy Solutions',
        score: 95,
        status: 'completed',
        date: '2024-01-13',
      },
    ],
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'pending':
        return 'warning';
      case 'in_progress':
        return 'info';
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
      case 'in_progress':
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
          Evaluator Dashboard
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Bid evaluation and scoring overview
        </Typography>
      </Box>

      {/* Under Construction Alert */}
      <Alert severity="info" sx={{ mb: 4 }}>
        <AlertTitle>Under Construction</AlertTitle>
        The Evaluator dashboard is currently being developed. This page will include:
        <Box component="ul" sx={{ mt: 1, pl: 2 }}>
          <li>Real-time bid evaluation metrics and statistics</li>
          <li>Advanced filtering and geotag-based analysis tools</li>
          <li>Weighted scoring system with socio-economic criteria</li>
          <li>Geographic analysis and mapping features</li>
          <li>Evaluation workflow management</li>
          <li>Performance analytics and reporting</li>
        </Box>
      </Alert>

      {/* Key Metrics */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AssessmentIcon sx={{ color: 'primary.main', mr: 1 }} />
                <Typography variant="h6" component="div">
                  Total Evaluations
                </Typography>
              </Box>
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                {mockData.totalEvaluations}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This month
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
                  Completed
                </Typography>
              </Box>
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'success.main' }}>
                {mockData.completedEvaluations}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {Math.round((mockData.completedEvaluations / mockData.totalEvaluations) * 100)}% completion rate
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <ScoreIcon sx={{ color: 'info.main', mr: 1 }} />
                <Typography variant="h6" component="div">
                  Average Score
                </Typography>
              </Box>
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'info.main' }}>
                {mockData.averageScore}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Weighted scoring
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationIcon sx={{ color: 'secondary.main', mr: 1 }} />
                <Typography variant="h6" component="div">
                  Geographic Coverage
                </Typography>
              </Box>
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
                {mockData.geographicCoverage}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Local government areas
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
                Evaluation Progress
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Completion Rate</Typography>
                  <Typography variant="body2">
                    {Math.round((mockData.completedEvaluations / mockData.totalEvaluations) * 100)}%
                  </Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={(mockData.completedEvaluations / mockData.totalEvaluations) * 100}
                  sx={{ height: 8, borderRadius: 4 }}
                />
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Chip 
                  icon={<CheckCircleIcon />} 
                  label={`${mockData.completedEvaluations} Completed`} 
                  color="success" 
                  variant="outlined"
                />
                <Chip 
                  icon={<PendingIcon />} 
                  label={`${mockData.pendingEvaluations} Pending`} 
                  color="warning" 
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
                    <TrendingUpIcon color="success" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="High scoring evaluation completed"
                    secondary="Solar Power Installation - 95% score"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ScheduleIcon color="warning" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="New evaluation assigned"
                    secondary="Rural Road Rehabilitation project"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FilterListIcon color="info" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Geographic filter applied"
                    secondary="North Central region analysis"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Recent Evaluations */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Recent Evaluations
          </Typography>
          <List>
            {mockData.recentEvaluations.map((evaluation, index) => (
              <React.Fragment key={evaluation.id}>
                <ListItem>
                  <ListItemIcon>
                    {getStatusIcon(evaluation.status)}
                  </ListItemIcon>
                  <ListItemText
                    primary={evaluation.projectName}
                    secondary={`Contractor: ${evaluation.contractor} | Date: ${evaluation.date}`}
                  />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      Score:
                    </Typography>
                    <Chip 
                      label={`${evaluation.score}%`} 
                      color={evaluation.score >= 90 ? 'success' : evaluation.score >= 80 ? 'warning' : 'error'}
                      size="small"
                    />
                    <Chip 
                      label={evaluation.status} 
                      color={getStatusColor(evaluation.status) as any}
                      size="small"
                      variant="outlined"
                    />
                  </Box>
                </ListItem>
                {index < mockData.recentEvaluations.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EvaluatorDashboard; 