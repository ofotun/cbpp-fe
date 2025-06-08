import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  HowToReg as RegistrationIcon,
  AccountBalance as BudgetIcon,
  ShoppingCart as ProcurementIcon,
  Payment as PaymentIcon,
  CheckCircle as CheckIcon,
} from '@mui/icons-material';

export const ProcessesPage: React.FC = () => {
  const theme = useTheme();

  const processes = [
    {
      title: 'Registration & Qualification',
      icon: <RegistrationIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      description: 'Streamlined process for CBOs, PCOs, and contractors to join the platform',
      steps: [
        'Digital onboarding with tiered registration levels',
        'Document verification for credentials',
        'Geolocation tagging for operational verification',
        'Capacity assessment for procurement capability',
        'Registration fee processing with multiple payment options',
        'Approval workflow involving BPP and LGA authorities',
      ],
    },
    {
      title: 'Budget Management',
      icon: <BudgetIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      description: 'Efficient budget allocation and tracking for community projects',
      steps: [
        'API integration with national budget systems',
        'Budget allocation visibility at LGA level',
        'Project categorization based on budget line items',
        'Threshold management for different procurement categories',
        'Budget utilization tracking',
        'Real-time balance reporting',
      ],
    },
    {
      title: 'Procurement Process',
      icon: <ProcurementIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      description: 'Transparent and efficient procurement workflow',
      steps: [
        'Digital procurement plan creation and submission',
        'E-tendering portal with secure bid submission',
        'Transparent selection process with audit trails',
        'Contract award publication',
        'Grievance redressal mechanisms',
        'Performance monitoring against contract terms',
      ],
    },
    {
      title: 'Payment Processing',
      icon: <PaymentIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      description: 'Secure and efficient payment system for project implementation',
      steps: [
        'Milestone-based payment triggers',
        'Multi-level approval workflows',
        'Secure payment tracking and verification',
        'Financial compliance monitoring',
      ],
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Our Processes
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          Streamlined Workflows for Efficient Project Management
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto' }}>
          The CBPP platform follows a comprehensive process to ensure transparency, efficiency, and accountability in community-based procurement.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {processes.map((process, index) => (
          <Grid item xs={12} key={index}>
            <Accordion sx={{ bgcolor: 'background.paper' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ bgcolor: 'background.paper' }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  {process.icon}
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="h6">{process.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {process.description}
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  {process.steps.map((step, stepIndex) => (
                    <ListItem key={stepIndex}>
                      <ListItemIcon>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={step} />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Benefits of Our Process
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto' }}>
          Our streamlined processes ensure transparency, reduce bureaucracy, and enable efficient project implementation while maintaining strict compliance with government regulations.
        </Typography>
      </Box>
    </Container>
  );
}; 