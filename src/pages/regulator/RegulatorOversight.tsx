import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { Security as SecurityIcon } from '@mui/icons-material';

const RegulatorOversight: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <SecurityIcon sx={{ mr: 1, fontSize: 32, color: 'primary.main' }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Regulatory Oversight
        </Typography>
      </Box>
      
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Regulatory Oversight (Coming Soon)
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            This page will allow regulators to monitor compliance and regulatory requirements.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RegulatorOversight; 