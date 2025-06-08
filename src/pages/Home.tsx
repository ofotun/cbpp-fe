import { Typography, Box, Grid, Paper, Card, CardContent, LinearProgress } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GroupsIcon from '@mui/icons-material/Groups';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';
import { useAppContext } from '../contexts/AppContext';
import { formatCurrency } from '../utils/formatters';

function Home() {
  const { user, cbos, projects, procurements } = useAppContext();

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome, {user?.name}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        {user?.role} - {user?.department}
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {/* CBO Summary */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Community-Based Organizations
            </Typography>
            <Grid container spacing={2}>
              {cbos.map((cbo) => (
                <Grid item xs={12} md={6} key={cbo.id}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">{cbo.name}</Typography>
                      <Typography color="text.secondary">
                        Registration: {cbo.registrationNumber}
                      </Typography>
                      <Typography variant="body2">
                        Location: {cbo.location} - {cbo.lga}
                      </Typography>
                      <Box sx={{ mt: 1 }}>
                        <Typography variant="body2">
                          Category: {cbo.category}
                        </Typography>
                        <Typography variant="body2">
                          Capacity: {cbo.capacity}
                        </Typography>
                        <Typography variant="body2">
                          Projects: {cbo.projects}
                        </Typography>
                        <Typography variant="body2">
                          Rating: {cbo.rating}/5
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* Quick Actions */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Quick Actions
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={3}>
                <Paper sx={{ p: 2, textAlign: 'center', cursor: 'pointer' }}>
                  <AccountBalanceIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                  <Typography variant="h6" gutterBottom>
                    Dashboard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    View platform overview
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Paper sx={{ p: 2, textAlign: 'center', cursor: 'pointer' }}>
                  <GroupsIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                  <Typography variant="h6" gutterBottom>
                    CBOs
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Manage organizations
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Paper sx={{ p: 2, textAlign: 'center', cursor: 'pointer' }}>
                  <AssignmentIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                  <Typography variant="h6" gutterBottom>
                    Projects
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    View and manage projects
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Paper sx={{ p: 2, textAlign: 'center', cursor: 'pointer' }}>
                  <SettingsIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                  <Typography variant="h6" gutterBottom>
                    Settings
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Configure preferences
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Active Projects */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Active Projects
            </Typography>
            <Grid container spacing={2}>
              {projects.items.map((project) => (
                <Grid item xs={12} key={project.id}>
                  <Paper sx={{ p: 2 }}>
                    <Grid container alignItems="center">
                      <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1">
                          {project.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {project.location} - {project.lga}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Typography variant="body2">
                          Budget: {formatCurrency(project.budget, project.currency)}
                        </Typography>
                        <Typography variant="body2">
                          Status: {project.status}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box sx={{ width: '100%' }}>
                          <Typography variant="body2" gutterBottom>
                            Progress: {project.progress}%
                          </Typography>
                          <LinearProgress
                            variant="determinate"
                            value={project.progress}
                            sx={{ height: 10, borderRadius: 5 }}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home; 