import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { Assessment as AssessmentIcon } from '@mui/icons-material';

const ContractorReports: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <AssessmentIcon sx={{ mr: 1, fontSize: 32, color: 'primary.main' }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Reports & Analytics
        </Typography>
      </Box>
      
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Reports (Coming Soon)
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            This page will provide contractor-specific reports including procurement activity, 
            contract performance, and financial analytics with export capabilities.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContractorReports; 