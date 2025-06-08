import React, { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  useTheme,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  LocationCity as LocationCityIcon,
  Groups as GroupsIcon,
  Business as BusinessIcon,
  Engineering as EngineeringIcon,
} from '@mui/icons-material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { monthlyMetricsData } from '../../services/mockData';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type MetricType = 'totalProjects' | 'activeProjects' | 'completedProjects' | 'totalBudget' | 
                  'totalLGAs' | 'totalCBOs' | 'totalContractors' | 'activeContractors';

const OverviewDashboard: React.FC = () => {
  const theme = useTheme();
  const [selectedMetric, setSelectedMetric] = useState<MetricType>('totalProjects');
  const [datePeriod, setDatePeriod] = useState<string>('12');

  // Sample data for the metrics
  const metrics = [
    { id: 'totalProjects', title: 'Total Projects', value: '150', trend: '+12%', isPositive: true, icon: TrendingUpIcon },
    { id: 'activeProjects', title: 'Active Projects', value: '89', trend: '+5%', isPositive: true, icon: TrendingUpIcon },
    { id: 'completedProjects', title: 'Completed Projects', value: '61', trend: '-3%', isPositive: false, icon: TrendingUpIcon },
    { id: 'totalBudget', title: 'Total Budget', value: '₦2.5B', trend: '+8%', isPositive: true, icon: TrendingUpIcon },
    { id: 'totalLGAs', title: 'Total LGAs', value: '774', trend: '0%', isPositive: true, icon: LocationCityIcon },
    { id: 'totalCBOs', title: 'Total CBOs', value: '335', trend: '+15%', isPositive: true, icon: GroupsIcon },
    { id: 'totalContractors', title: 'Total Contractors', value: '2,010', trend: '+10%', isPositive: true, icon: BusinessIcon },
    { id: 'activeContractors', title: 'Active Contractors', value: '1,508', trend: '+8%', isPositive: true, icon: EngineeringIcon },
  ];

  const handleMetricClick = (metricId: MetricType) => {
    setSelectedMetric(metricId);
  };

  const handleDatePeriodChange = (event: SelectChangeEvent) => {
    setDatePeriod(event.target.value);
  };

  const getChartData = () => {
    const metricData = monthlyMetricsData[selectedMetric];
    const period = parseInt(datePeriod);
    const startIndex = 12 - period;
    
    return {
      labels: metricData.labels.slice(startIndex),
      datasets: [
        {
          label: metrics.find(m => m.id === selectedMetric)?.title || '',
          data: metricData.data.slice(startIndex),
          fill: false,
          borderColor: theme.palette.primary.main,
          tension: 0.4,
        },
      ],
    };
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: theme.palette.divider,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Overview Dashboard
      </Typography>

      {/* Metrics Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {metrics.map((metric) => (
          <Grid item xs={12} sm={6} md={3} key={metric.id}>
            <Card 
              onClick={() => handleMetricClick(metric.id as MetricType)}
              sx={{ 
                cursor: 'pointer',
                border: selectedMetric === metric.id ? `2px solid ${theme.palette.primary.main}` : 'none',
                transition: 'border 0.3s ease',
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <metric.icon sx={{ mr: 1, color: theme.palette.primary.main }} />
                  <Typography variant="h6" color="textSecondary">
                    {metric.title}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="h4">{metric.value}</Typography>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    color: metric.isPositive ? 'success.main' : 'error.main'
                  }}>
                    {metric.isPositive ? <TrendingUpIcon /> : <TrendingDownIcon />}
                    <Typography variant="body2" sx={{ ml: 0.5 }}>
                      {metric.trend}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Chart with Date Period Filter */}
      <Paper sx={{ 
        p: 3, 
        mb: 4,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 3,
          width: '100%'
        }}>
          <Typography variant="h6">
            {metrics.find(m => m.id === selectedMetric)?.title} Trend
          </Typography>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Period</InputLabel>
            <Select
              value={datePeriod}
              label="Period"
              onChange={handleDatePeriodChange}
              size="small"
            >
              <MenuItem value="3">Last 3 Months</MenuItem>
              <MenuItem value="6">Last 6 Months</MenuItem>
              <MenuItem value="12">Last 12 Months</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ 
          height: 400,
          width: '100%',
          position: 'relative',
          minHeight: '400px',
        }}>
          <Line 
            data={getChartData()} 
            options={chartOptions}
            style={{ width: '100%', height: '100%' }}
          />
        </Box>
      </Paper>

      {/* Additional Sections */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recent Activities
            </Typography>
            {/* Add recent activities content */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Key Performance Indicators
            </Typography>
            {/* Add KPI content */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OverviewDashboard; 