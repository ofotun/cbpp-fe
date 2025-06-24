import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { Person as PersonIcon } from '@mui/icons-material';

const RegulatorProfile: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <PersonIcon sx={{ mr: 1, fontSize: 32, color: 'primary.main' }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Profile
        </Typography>
      </Box>
      
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Profile Management (Coming Soon)
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            This page will allow regulators to manage their profile information and settings.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RegulatorProfile; 