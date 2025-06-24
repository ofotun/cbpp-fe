import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';

const ProcurementOfficerProcurement: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <ShoppingCartIcon sx={{ mr: 1, fontSize: 32, color: 'primary.main' }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Procurement Management
        </Typography>
      </Box>
      
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Procurement Management (Coming Soon)
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            This page will allow procurement officers to manage procurement processes, tenders, and contracts.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProcurementOfficerProcurement; 