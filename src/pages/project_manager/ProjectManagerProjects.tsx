import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { Assignment as AssignmentIcon } from '@mui/icons-material';

const ProjectManagerProjects: React.FC = () => {
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
            This page will allow project managers to track and manage project implementation.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProjectManagerProjects; 