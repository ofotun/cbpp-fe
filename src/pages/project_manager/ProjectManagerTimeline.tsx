import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { Timeline as TimelineIcon } from '@mui/icons-material';

const ProjectManagerTimeline: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <TimelineIcon sx={{ mr: 1, fontSize: 32, color: 'primary.main' }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Project Timeline
        </Typography>
      </Box>
      
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Project Timeline (Coming Soon)
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            This page will allow project managers to view project timelines and milestones.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProjectManagerTimeline; 