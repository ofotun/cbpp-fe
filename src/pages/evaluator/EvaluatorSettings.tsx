import React from 'react';
import {
  Box,
  Typography,
  Alert,
  AlertTitle,
  Card,
  CardContent,
} from '@mui/material';
import { Settings as SettingsIcon } from '@mui/icons-material';

const EvaluatorSettings: React.FC = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Settings
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Configure system settings and preferences
        </Typography>
      </Box>

      <Alert severity="info" sx={{ mb: 4 }}>
        <AlertTitle>Under Construction</AlertTitle>
        The Settings page is currently being developed. This page will include:
        <Box component="ul" sx={{ mt: 1, pl: 2 }}>
          <li>Account and profile settings</li>
          <li>Evaluation preferences configuration</li>
          <li>Scoring criteria customization</li>
          <li>Notification preferences</li>
          <li>Security and privacy settings</li>
          <li>System interface customization</li>
          <li>Data export and backup options</li>
        </Box>
      </Alert>

      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <SettingsIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h6">
              System Configuration Center
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            This module will provide comprehensive settings management for evaluators, 
            including personal preferences, evaluation criteria, and system configuration options.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EvaluatorSettings; 