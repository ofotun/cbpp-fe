import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { Notifications as NotificationsIcon } from '@mui/icons-material';

const ContractorNotifications: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <NotificationsIcon sx={{ mr: 1, fontSize: 32, color: 'primary.main' }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Notifications
        </Typography>
      </Box>
      
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Notifications (Coming Soon)
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            This page will display system notifications, allow contractors to manage preferences, 
            and provide notification history with read/unread status tracking.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContractorNotifications; 