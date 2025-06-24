import React from 'react';
import {
  Box,
  Typography,
  Alert,
  AlertTitle,
  Card,
  CardContent,
} from '@mui/material';
import { Report as ReportIcon } from '@mui/icons-material';

const BPPAdminReports: React.FC = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          LLM Reports
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Monitor LLM reports and analytics
        </Typography>
      </Box>

      <Alert severity="info" sx={{ mb: 4 }}>
        <AlertTitle>Under Construction</AlertTitle>
        The LLM Reports page is currently being developed. This page will include:
        <Box component="ul" sx={{ mt: 1, pl: 2 }}>
          <li>LLM-generated procurement analysis reports</li>
          <li>Automated report generation and scheduling</li>
          <li>Report customization and filtering options</li>
          <li>Performance metrics and insights</li>
          <li>Report export and sharing capabilities</li>
          <li>Historical report archives</li>
          <li>AI-powered insights and recommendations</li>
        </Box>
      </Alert>

      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <ReportIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h6">
              LLM Analytics Platform
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            This module will provide AI-powered reporting and analytics using Large Language Models 
            to generate insights, trends, and recommendations for procurement optimization.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BPPAdminReports; 