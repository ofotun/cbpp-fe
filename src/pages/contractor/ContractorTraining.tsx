import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { School as SchoolIcon } from '@mui/icons-material';

const ContractorTraining: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <SchoolIcon sx={{ mr: 1, fontSize: 32, color: 'primary.main' }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Training Platform
        </Typography>
      </Box>
      
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Training (Coming Soon)
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            This page will provide access to training courses, allow enrollment, 
            track progress, and offer downloadable training materials.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContractorTraining; 