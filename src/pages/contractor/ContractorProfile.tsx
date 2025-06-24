import React from 'react';
import { Box, Typography, Card, CardContent, Paper } from '@mui/material';
import { Person as PersonIcon } from '@mui/icons-material';

const ContractorProfile: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <PersonIcon sx={{ mr: 1, fontSize: 32, color: 'primary.main' }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Profile Management
        </Typography>
      </Box>
      
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Profile Management (Coming Soon)
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            This page will allow contractors to manage their profile information, 
            update verification details, and upload required documents.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContractorProfile; 