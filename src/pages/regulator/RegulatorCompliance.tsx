import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { Gavel as GavelIcon } from '@mui/icons-material';

const RegulatorCompliance: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <GavelIcon sx={{ mr: 1, fontSize: 32, color: 'primary.main' }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Compliance Management
        </Typography>
      </Box>
      
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Compliance Management (Coming Soon)
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            This page will allow regulators to manage compliance checks and audits.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RegulatorCompliance; 