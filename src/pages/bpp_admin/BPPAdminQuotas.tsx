import React from 'react';
import {
  Box,
  Typography,
  Alert,
  AlertTitle,
  Card,
  CardContent,
} from '@mui/material';
import { Group as GroupIcon } from '@mui/icons-material';

const BPPAdminQuotas: React.FC = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Quota Management
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Set gender and LGA quotas
        </Typography>
      </Box>

      <Alert severity="info" sx={{ mb: 4 }}>
        <AlertTitle>Under Construction</AlertTitle>
        The Quota Management page is currently being developed. This page will include:
        <Box component="ul" sx={{ mt: 1, pl: 2 }}>
          <li>Gender quota configuration and monitoring</li>
          <li>LGA (Local Government Area) quota settings</li>
          <li>Quota compliance tracking and reporting</li>
          <li>Regional distribution management</li>
          <li>Quota adjustment and override tools</li>
          <li>Compliance analytics and dashboards</li>
          <li>Quota policy management</li>
        </Box>
      </Alert>

      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <GroupIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h6">
              Quota Configuration Platform
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            This module will provide comprehensive quota management tools for ensuring 
            equitable distribution of procurement opportunities across gender and geographic regions.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BPPAdminQuotas; 