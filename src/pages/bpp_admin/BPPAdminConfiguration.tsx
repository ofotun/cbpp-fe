import React from 'react';
import {
  Box,
  Typography,
  Alert,
  AlertTitle,
  Card,
  CardContent,
} from '@mui/material';
import { Tune as TuneIcon } from '@mui/icons-material';

const BPPAdminConfiguration: React.FC = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          System Configuration
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Manage system settings and configuration
        </Typography>
      </Box>

      <Alert severity="info" sx={{ mb: 4 }}>
        <AlertTitle>Under Construction</AlertTitle>
        The System Configuration page is currently being developed. This page will include:
        <Box component="ul" sx={{ mt: 1, pl: 2 }}>
          <li>System-wide configuration settings</li>
          <li>Platform parameters and thresholds</li>
          <li>User access and permission management</li>
          <li>Workflow configuration and automation</li>
          <li>Integration settings and API management</li>
          <li>System performance and optimization</li>
          <li>Backup and recovery configuration</li>
        </Box>
      </Alert>

      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <TuneIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h6">
              System Administration Center
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            This module will provide comprehensive system configuration tools for managing 
            platform settings, user permissions, workflows, and system integrations.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BPPAdminConfiguration; 