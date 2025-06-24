import React from 'react';
import {
  Box,
  Typography,
  Alert,
  AlertTitle,
  Card,
  CardContent,
} from '@mui/material';
import { Person as PersonIcon } from '@mui/icons-material';

const BPPAdminProfile: React.FC = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Profile
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Manage your BPP admin profile and preferences
        </Typography>
      </Box>

      <Alert severity="info" sx={{ mb: 4 }}>
        <AlertTitle>Under Construction</AlertTitle>
        The BPP Admin profile page is currently being developed. This page will include:
        <Box component="ul" sx={{ mt: 1, pl: 2 }}>
          <li>Personal information management</li>
          <li>Administrative credentials and permissions</li>
          <li>Tender management preferences</li>
          <li>Quota configuration settings</li>
          <li>System access controls</li>
          <li>Account security settings</li>
        </Box>
      </Alert>

      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <PersonIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h6">
              Mr. Ibrahim Mohammed
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Tender Management & System Configuration Specialist
          </Typography>
          <Typography variant="body2">
            Bureau of Public Procurement - Administrative Department
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BPPAdminProfile; 