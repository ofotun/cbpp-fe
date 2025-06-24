import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { Description as DescriptionIcon } from '@mui/icons-material';

const ContractorContracts: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <DescriptionIcon sx={{ mr: 1, fontSize: 32, color: 'primary.main' }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          My Contracts
        </Typography>
      </Box>
      
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Contract Management (Coming Soon)
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            This page will display awarded contracts, allow contractors to track progress, 
            submit reports, and manage project milestones.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContractorContracts; 