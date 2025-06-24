import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { Receipt as ReceiptIcon } from '@mui/icons-material';

const ContractorPlatformPayments: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <ReceiptIcon sx={{ mr: 1, fontSize: 32, color: 'primary.main' }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Platform Payments
        </Typography>
      </Box>
      
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Platform Payments (Coming Soon)
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            This page will allow contractors to view platform fees, make payments, 
            and download payment receipts for platform services.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContractorPlatformPayments; 