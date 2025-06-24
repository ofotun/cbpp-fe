import React from 'react';
import {
  Box,
  Typography,
  Alert,
  AlertTitle,
  Card,
  CardContent,
} from '@mui/material';
import { Assignment as AssignmentIcon } from '@mui/icons-material';

const BPPAdminTenders: React.FC = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Tender Management
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Configure adverts and manage tenders
        </Typography>
      </Box>

      <Alert severity="info" sx={{ mb: 4 }}>
        <AlertTitle>Under Construction</AlertTitle>
        The Tender Management page is currently being developed. This page will include:
        <Box component="ul" sx={{ mt: 1, pl: 2 }}>
          <li>Create and configure new tender adverts</li>
          <li>Manage existing tender listings</li>
          <li>Set tender requirements and specifications</li>
          <li>Configure evaluation criteria</li>
          <li>Monitor tender status and progress</li>
          <li>Generate tender reports and analytics</li>
          <li>Manage tender approvals and workflows</li>
        </Box>
      </Alert>

      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <AssignmentIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h6">
              Tender Configuration System
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            This module will provide comprehensive tools for creating, managing, and monitoring 
            tender adverts with advanced configuration options and workflow management.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BPPAdminTenders; 