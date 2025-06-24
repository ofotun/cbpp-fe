import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { Assignment as AssignmentIcon } from '@mui/icons-material';

const CBOManagerProjects: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <AssignmentIcon sx={{ mr: 1, fontSize: 32, color: 'primary.main' }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Project Management
        </Typography>
      </Box>
      
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Project Management (Coming Soon)
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            This page will allow CBO managers to track and manage community projects.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CBOManagerProjects; 