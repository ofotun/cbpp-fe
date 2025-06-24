import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Alert,
  AlertTitle,
} from '@mui/material';
import { Build as BuildIcon } from '@mui/icons-material';

const ProcurementOfficerDashboard: React.FC = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
          Procurement Officer Dashboard
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Overview of procurement activities and key metrics
        </Typography>
      </Box>

      <Card>
        <CardContent>
          <Alert 
            severity="info" 
            icon={<BuildIcon />}
            sx={{ 
              '& .MuiAlert-message': { width: '100%' },
              '& .MuiAlert-icon': { fontSize: '2rem' }
            }}
          >
            <AlertTitle sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
              Under Construction
            </AlertTitle>
            <Typography variant="body1" sx={{ mt: 1 }}>
              The Procurement Officer Dashboard is currently under development. 
              This page will include:
            </Typography>
            <Box component="ul" sx={{ mt: 2, pl: 2 }}>
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                Procurement activity overview and key metrics
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                Tender management and evaluation tools
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                Contract award tracking and monitoring
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                Vendor performance analytics
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                Compliance monitoring and reporting
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
              Expected completion: Phase 2 of development
            </Typography>
          </Alert>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProcurementOfficerDashboard; 