import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { TrendingUp as TrendingUpIcon } from '@mui/icons-material';

const ContractorContractPayments: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <TrendingUpIcon sx={{ mr: 1, fontSize: 32, color: 'primary.main' }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Contract Payments
        </Typography>
      </Box>
      
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Contract Payments (Coming Soon)
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            This page will display contract payment schedules, track payment status, 
            and allow contractors to submit payment requests and view transaction history.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContractorContractPayments; 