import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { Assignment as AssignmentIcon } from '@mui/icons-material';

const ContractorTenders: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <AssignmentIcon sx={{ mr: 1, fontSize: 32, color: 'primary.main' }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Available Tenders
        </Typography>
      </Box>
      
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Tenders (Coming Soon)
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            This page will display available tenders, allow contractors to filter and search, 
            and submit applications for procurement opportunities.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContractorTenders; 