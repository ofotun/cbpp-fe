import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { People as PeopleIcon } from '@mui/icons-material';

const CBOManagerMembers: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <PeopleIcon sx={{ mr: 1, fontSize: 32, color: 'primary.main' }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Member Management
        </Typography>
      </Box>
      
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Member Management (Coming Soon)
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            This page will allow CBO managers to manage CBO members and contractors.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CBOManagerMembers; 