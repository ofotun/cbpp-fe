import React, { useState, useMemo } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Tabs,
  Tab,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import {
  AccountBalance as AccountBalanceIcon,
  TrendingUp as TrendingUpIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  AttachMoney as AttachMoneyIcon,
} from '@mui/icons-material';
import { mockDashboardData } from '../../services/mockData';
import BudgetAnalysisCharts from '../../components/dashboard/BudgetAnalysisCharts';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface OverviewData {
  totalProjects: number;
  totalBudget: number;
  completedProjects: number;
  inProgressProjects: number;
  pendingProjects: number;
  averageProjectValue: number;
}

interface PerformanceData {
  completionRate: number;
  budgetUtilization: number;
  timelineAdherence: number;
  qualityScore: number;
}

interface DistributionData {
  region?: string;
  state?: string;
  sector?: string;
  type?: string;
  projects: number;
  budget: number;
  count?: number;
  completionRate?: number;
  budgetUtilization?: number;
}

interface PerformanceMetrics {
  cbo: string;
  projects: number;
  completionRate: number;
  rating: number;
}

interface InspectionData {
  category: string;
  passed: number;
  failed: number;
}

interface RegulatoryAction {
  type: string;
  count: number;
  resolved: number;
}

interface ComplianceMetrics {
  overallCompliance: number;
  financialCompliance: number;
  proceduralCompliance: number;
  documentationCompliance: number;
}

interface RegulatorsOverview {
  totalInspections: number;
  totalComplianceChecks: number;
  violationsDetected: number;
  resolvedViolations: number;
  pendingInvestigations: number;
}

interface BudgetAnalysisData {
  overview: {
    totalAllocated: number;
    totalSpent: number;
    utilizationRate: number;
    variance: number;
  };
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

interface DashboardData {
  overview: OverviewData | RegulatorsOverview;
  performance?: PerformanceData;
  complianceMetrics?: ComplianceMetrics;
  regionalDistribution?: DistributionData[];
  sectorDistribution?: DistributionData[];
  stateDistribution?: DistributionData[];
  sectorPerformance?: DistributionData[];
  projectTypes?: DistributionData[];
  cboPerformance?: PerformanceMetrics[];
  inspectionResults?: InspectionData[];
  regulatoryActions?: RegulatoryAction[];
}

interface FilterState {
  region: string;
  state: string;
  lga: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`dashboard-tabpanel-${index}`}
      aria-labelledby={`dashboard-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function ExecutiveDashboard() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [filters, setFilters] = useState<FilterState>({
    region: '',
    state: '',
    lga: '',
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    // Reset filters when changing tabs
    setFilters({ region: '', state: '', lga: '' });
  };

  const handleFilterChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setFilters(prev => ({
      ...prev,
      [name]: value,
      // Reset dependent filters
      ...(name === 'region' && { state: '', lga: '' }),
      ...(name === 'state' && { lga: '' }),
    }));
  };

  // Get unique regions from the data
  const regions = useMemo(() => {
    const uniqueRegions = new Set<string>();
    mockDashboardData.presidency.regionalDistribution?.forEach(item => {
      if (item.region) uniqueRegions.add(item.region);
    });
    return Array.from(uniqueRegions);
  }, []);

  // Get unique states from the data
  const states = useMemo(() => {
    const uniqueStates = new Set<string>();
    mockDashboardData.state.stateDistribution?.forEach(item => {
      if (item.state) uniqueStates.add(item.state);
    });
    return Array.from(uniqueStates);
  }, []);

  // Get filtered data based on current filters
  const getFilteredData = (data: DashboardData): DashboardData => {
    if (!data) return data;

    const filteredData = { ...data };

    // Filter regional distribution
    if (filters.region && filteredData.regionalDistribution) {
      filteredData.regionalDistribution = filteredData.regionalDistribution.filter(
        item => item.region === filters.region
      );
    }

    // Filter state distribution
    if (filters.state && filteredData.stateDistribution) {
      filteredData.stateDistribution = filteredData.stateDistribution.filter(
        item => item.state === filters.state
      );
    }

    // Filter project types (for LGA)
    if (filters.lga && filteredData.projectTypes) {
      filteredData.projectTypes = filteredData.projectTypes.filter(
        item => item.type === filters.lga
      );
    }

    return filteredData;
  };

  const getCurrentData = (): DashboardData | BudgetAnalysisData | null => {
    switch (value) {
      case 0:
        return getFilteredData(mockDashboardData.presidency as DashboardData);
      case 1:
        return getFilteredData(mockDashboardData.state as DashboardData);
      case 2:
        return getFilteredData(mockDashboardData.localGovernment as DashboardData);
      case 3:
        return mockDashboardData.regulators as DashboardData;
      case 4:
        return mockDashboardData.budgetAnalysis as BudgetAnalysisData;
      default:
        return null;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const renderOverviewCards = (data: DashboardData) => {
    if (!data?.overview) {
      return (
        <Typography variant="body1" color="error">
          No data available
        </Typography>
      );
    }

    if ('totalInspections' in data.overview) {
      // Render regulators overview
      return (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <AccountBalanceIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h6">Total Inspections</Typography>
                </Box>
                <Typography variant="h4">{data.overview.totalInspections}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Compliance Checks: {data.overview.totalComplianceChecks}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <CheckCircleIcon color="success" sx={{ mr: 1 }} />
                  <Typography variant="h6">Resolved Violations</Typography>
                </Box>
                <Typography variant="h4">{data.overview.resolvedViolations}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Pending: {data.overview.pendingInvestigations}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <TrendingUpIcon color="info" sx={{ mr: 1 }} />
                  <Typography variant="h6">Overall Compliance</Typography>
                </Box>
                <Typography variant="h4">{data.complianceMetrics?.overallCompliance}%</Typography>
                <Typography variant="body2" color="text.secondary">
                  Financial: {data.complianceMetrics?.financialCompliance}%
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <WarningIcon color="warning" sx={{ mr: 1 }} />
                  <Typography variant="h6">Compliance</Typography>
                </Box>
                <Typography variant="h4">{data.complianceMetrics?.proceduralCompliance}%</Typography>
                <Typography variant="body2" color="text.secondary">
                  Documentation: {data.complianceMetrics?.documentationCompliance}%
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      );
    }

    // Render standard overview
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AccountBalanceIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Total Projects</Typography>
              </Box>
              <Typography variant="h4">{data.overview.totalProjects}</Typography>
              <Typography variant="body2" color="text.secondary">
                Total Budget: {formatCurrency(data.overview.totalBudget)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CheckCircleIcon color="success" sx={{ mr: 1 }} />
                <Typography variant="h6">Completed</Typography>
              </Box>
              <Typography variant="h4">{data.overview.completedProjects}</Typography>
              <Typography variant="body2" color="text.secondary">
                In Progress: {data.overview.inProgressProjects}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingUpIcon color="info" sx={{ mr: 1 }} />
                <Typography variant="h6">Performance</Typography>
              </Box>
              <Typography variant="h4">{data.performance?.completionRate}%</Typography>
              <Typography variant="body2" color="text.secondary">
                Completion Rate
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <WarningIcon color="warning" sx={{ mr: 1 }} />
                <Typography variant="h6">Quality Score</Typography>
              </Box>
              <Typography variant="h4">{data.performance?.qualityScore}%</Typography>
              <Typography variant="body2" color="text.secondary">
                Average Project Quality
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  };

  const renderDistributionTable = (data: any[] | undefined, columns: string[]) => {
    if (!data || data.length === 0) {
      return (
        <Typography variant="body1" color="error">
          No data available
        </Typography>
      );
    }

    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column}>{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                {Object.values(row).map((value, i) => (
                  <TableCell key={i}>
                    {typeof value === 'number' && value > 1000000
                      ? formatCurrency(value)
                      : String(value)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const renderFilterControls = () => {
    return (
      <Box sx={{ mb: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        {value === 0 && (
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Region</InputLabel>
            <Select
              name="region"
              value={filters.region}
              onChange={handleFilterChange}
              label="Region"
            >
              <MenuItem value="">All Regions</MenuItem>
              {regions.map(region => (
                <MenuItem key={region} value={region}>
                  {region}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        {value === 1 && (
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>State</InputLabel>
            <Select
              name="state"
              value={filters.state}
              onChange={handleFilterChange}
              label="State"
            >
              <MenuItem value="">All States</MenuItem>
              {states.map(state => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        {value === 2 && (
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>LGA</InputLabel>
            <Select
              name="lga"
              value={filters.lga}
              onChange={handleFilterChange}
              label="LGA"
            >
              <MenuItem value="">All LGAs</MenuItem>
              {mockDashboardData.localGovernment.projectTypes?.map(type => (
                <MenuItem key={type.type} value={type.type}>
                  {type.type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </Box>
    );
  };

  const renderBudgetOverviewCards = (data: { totalAllocated: number; totalSpent: number; utilizationRate: number; variance: number }) => {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <AttachMoneyIcon color="primary" sx={{ mr: 1, fontSize: 22 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Total Allocated</Typography>
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.5rem' }}>{formatCurrency(data.totalAllocated)}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                Budget Allocation
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <CheckCircleIcon color="success" sx={{ mr: 1, fontSize: 22 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Total Spent</Typography>
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.5rem' }}>{formatCurrency(data.totalSpent)}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                Budget Implementation
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <TrendingUpIcon color="info" sx={{ mr: 1, fontSize: 22 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Utilization Rate</Typography>
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.5rem' }}>{data.utilizationRate}%</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                Budget Efficiency
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <WarningIcon color="warning" sx={{ mr: 1, fontSize: 22 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Variance</Typography>
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.5rem' }}>{formatCurrency(data.variance)}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                Remaining Budget
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  };

  // Add type guard functions
  const isDashboardData = (data: any): data is DashboardData => {
    return data && (
      'regionalDistribution' in data ||
      'stateDistribution' in data ||
      'projectTypes' in data ||
      'inspectionResults' in data
    );
  };

  const isBudgetAnalysisData = (data: any): data is BudgetAnalysisData => {
    return data && 'overview' in data && 'totalAllocated' in data.overview;
  };

  // Type guard for top-level budget analysis (has regionalBudget)
  const isTopLevelBudgetAnalysisData = (data: any): data is BudgetAnalysisData & { regionalBudget: any[] } => {
    return data && Array.isArray(data.regionalBudget);
  };

  // --- Budget Analysis Filters and Data Selection ---
  const budgetRegions = useMemo(() => {
    return mockDashboardData.budgetAnalysis.regions?.map((r: any) => r.name) || [];
  }, []);

  const selectedRegion = useMemo(() => {
    return mockDashboardData.budgetAnalysis.regions?.find((r: any) => r.name === filters.region);
  }, [filters.region]);

  const budgetStates = useMemo(() => {
    return selectedRegion?.states?.map((s: any) => s.name) || [];
  }, [selectedRegion]);

  const selectedState = useMemo(() => {
    return selectedRegion?.states?.find((s: any) => s.name === filters.state);
  }, [selectedRegion, filters.state]);

  const budgetLGAs = useMemo(() => {
    return selectedState?.lgas?.map((l: any) => l.name) || [];
  }, [selectedState]);

  const selectedLGA = useMemo(() => {
    return selectedState?.lgas?.find((l: any) => l.name === filters.lga);
  }, [selectedState, filters.lga]);

  // Get the correct data for cards and charts based on filter
  const budgetAnalysisData = useMemo(() => {
    if (selectedLGA) {
      return selectedLGA;
    } else if (selectedState) {
      return selectedState;
    } else if (selectedRegion) {
      return selectedRegion;
    } else {
      return mockDashboardData.budgetAnalysis;
    }
  }, [selectedRegion, selectedState, selectedLGA]);

  // --- Updated Filter Controls for Budget Analysis Tab ---
  const renderBudgetAnalysisFilters = () => (
    <Box sx={{ mb: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <FormControl sx={{ minWidth: 180 }}>
        <InputLabel>Region</InputLabel>
        <Select
          name="region"
          value={filters.region}
          onChange={handleFilterChange}
          label="Region"
        >
          <MenuItem value="">All Regions</MenuItem>
          {budgetRegions.map(region => (
            <MenuItem key={region} value={region}>{region}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {filters.region && (
        <FormControl sx={{ minWidth: 180 }}>
          <InputLabel>State</InputLabel>
          <Select
            name="state"
            value={filters.state}
            onChange={handleFilterChange}
            label="State"
          >
            <MenuItem value="">All States</MenuItem>
            {budgetStates.map(state => (
              <MenuItem key={state} value={state}>{state}</MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      {filters.region && filters.state && (
        <FormControl sx={{ minWidth: 180 }}>
          <InputLabel>LGA</InputLabel>
          <Select
            name="lga"
            value={filters.lga}
            onChange={handleFilterChange}
            label="LGA"
          >
            <MenuItem value="">All LGAs</MenuItem>
            {budgetLGAs.map(lga => (
              <MenuItem key={lga} value={lga}>{lga}</MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Box>
  );

  const currentData = getCurrentData();

  if (!currentData) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Executive Dashboard
        </Typography>
        <Typography variant="body1" color="error">
          No data available for the selected view
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Executive Dashboard
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Presidency" />
          <Tab label="State" />
          <Tab label="Local Government" />
          <Tab label="Regulators" />
          <Tab label="Budget Analysis" />
        </Tabs>
      </Box>

      {value === 4 ? renderBudgetAnalysisFilters() : renderFilterControls()}

      <TabPanel value={value} index={0}>
        {currentData && isDashboardData(currentData) && (
          <>
            {renderOverviewCards(currentData)}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Regional Distribution
              </Typography>
              {renderDistributionTable(currentData.regionalDistribution, ['Region', 'Projects', 'Budget'])}
            </Box>
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Sector Distribution
              </Typography>
              {renderDistributionTable(currentData.sectorDistribution, ['Sector', 'Projects', 'Budget'])}
            </Box>
          </>
        )}
      </TabPanel>

      <TabPanel value={value} index={1}>
        {currentData && isDashboardData(currentData) && (
          <>
            {renderOverviewCards(currentData)}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                State Distribution
              </Typography>
              {renderDistributionTable(currentData.stateDistribution, ['State', 'Projects', 'Budget'])}
            </Box>
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Sector Performance
              </Typography>
              {renderDistributionTable(currentData.sectorPerformance, ['Sector', 'Completion Rate', 'Budget Utilization'])}
            </Box>
          </>
        )}
      </TabPanel>

      <TabPanel value={value} index={2}>
        {currentData && isDashboardData(currentData) && (
          <>
            {renderOverviewCards(currentData)}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Project Types
              </Typography>
              {renderDistributionTable(currentData.projectTypes, ['Type', 'Count', 'Budget'])}
            </Box>
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                CBO Performance
              </Typography>
              {renderDistributionTable(currentData.cboPerformance, ['CBO', 'Projects', 'Completion Rate', 'Rating'])}
            </Box>
          </>
        )}
      </TabPanel>

      <TabPanel value={value} index={3}>
        {currentData && isDashboardData(currentData) && (
          <>
            {renderOverviewCards(currentData)}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Inspection Results
              </Typography>
              {renderDistributionTable(currentData.inspectionResults, ['Category', 'Passed', 'Failed'])}
            </Box>
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Regulatory Actions
              </Typography>
              {renderDistributionTable(currentData.regulatoryActions, ['Type', 'Count', 'Resolved'])}
            </Box>
          </>
        )}
      </TabPanel>

      <TabPanel value={value} index={4}>
        {budgetAnalysisData && budgetAnalysisData.overview && (
          <>
            {renderBudgetOverviewCards(budgetAnalysisData.overview)}
            <Box sx={{ mt: 4 }}>
              <BudgetAnalysisCharts
                regionalBudget={
                  isTopLevelBudgetAnalysisData(budgetAnalysisData)
                    ? budgetAnalysisData.regionalBudget
                    : []
                }
                sectorBudget={budgetAnalysisData.sectorBudget}
                monthlyTrends={budgetAnalysisData.monthlyTrends}
              />
            </Box>
          </>
        )}
      </TabPanel>
    </Container>
  );
} 