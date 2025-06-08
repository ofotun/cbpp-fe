import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  useTheme,
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

interface BudgetAnalysisChartsProps {
  regionalBudget: Array<{
    region: string;
    allocated: number;
    spent: number;
    utilization: number;
  }>;
  sectorBudget: Array<{
    sector: string;
    allocated: number;
    spent: number;
    utilization: number;
  }>;
  monthlyTrends: Array<{
    month: string;
    allocated: number;
    spent: number;
    utilization: number;
  }>;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const BudgetAnalysisCharts: React.FC<BudgetAnalysisChartsProps> = ({
  regionalBudget,
  sectorBudget,
  monthlyTrends,
}) => {
  const theme = useTheme();

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <Paper sx={{ p: 1.2, border: '1px solid #ccc' }}>
          <Typography variant="subtitle2" sx={{ fontSize: '0.95rem' }}>{label}</Typography>
          {payload.map((entry: any, index: number) => (
            <Typography key={index} variant="body2" sx={{ color: entry.color, fontSize: '0.92rem' }}>
              {entry.name}: {formatCurrency(entry.value)}
            </Typography>
          ))}
        </Paper>
      );
    }
    return null;
  };

  return (
    <Grid container spacing={3}>
      {/* Regional Budget Comparison */}
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2.2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: '1.08rem', mb: 1 }} gutterBottom>
            Regional Budget Allocation vs Implementation
          </Typography>
          <Box sx={{ height: 340 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={regionalBudget}
                margin={{ top: 10, right: 20, left: 10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="region" tick={{ fontSize: 12 }} />
                <YAxis tickFormatter={(value) => formatCurrency(value)} tick={{ fontSize: 12 }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="allocated" name="Allocated" fill="#0088FE" />
                <Bar dataKey="spent" name="Spent" fill="#00C49F" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Paper>
      </Grid>

      {/* Monthly Trends */}
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2.2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: '1.08rem', mb: 1 }} gutterBottom>
            Monthly Budget Utilization Trend
          </Typography>
          <Box sx={{ height: 340 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={monthlyTrends}
                margin={{ top: 10, right: 20, left: 10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tickFormatter={(value) => `${value}%`} tick={{ fontSize: 12 }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Line
                  type="monotone"
                  dataKey="utilization"
                  name="Utilization Rate"
                  stroke="#8884D8"
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Paper>
      </Grid>

      {/* Sector Budget Distribution */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2.2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: '1.08rem', mb: 1 }} gutterBottom>
            Sector Budget Distribution
          </Typography>
          <Box sx={{ height: 340 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sectorBudget}
                  dataKey="allocated"
                  nameKey="sector"
                  cx="50%"
                  cy="50%"
                  outerRadius={110}
                  label={({ name, value }) => `${name}: ${formatCurrency(value)}`}
                >
                  {sectorBudget.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default BudgetAnalysisCharts; 