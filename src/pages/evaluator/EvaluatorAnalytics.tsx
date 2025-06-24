import React from 'react';
import {
  Box,
  Typography,
  Alert,
  AlertTitle,
  Card,
  CardContent,
} from '@mui/material';
import { Analytics as AnalyticsIcon } from '@mui/icons-material';

const EvaluatorAnalytics: React.FC = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Evaluation Analytics
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          View evaluation analytics and reports
        </Typography>
      </Box>

      <Alert severity="info" sx={{ mb: 4 }}>
        <AlertTitle>Under Construction</AlertTitle>
        The Evaluation Analytics page is currently being developed. This page will include:
        <Box component="ul" sx={{ mt: 1, pl: 2 }}>
          <li>Evaluation performance metrics</li>
          <li>Scoring trend analysis</li>
          <li>Geographic distribution reports</li>
          <li>Contractor performance analytics</li>
          <li>Evaluation efficiency metrics</li>
          <li>Custom report generation</li>
          <li>Data visualization and charts</li>
        </Box>
      </Alert>

      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <AnalyticsIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h6">
              Evaluation Intelligence Platform
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            This module will provide comprehensive analytics and reporting tools for evaluating 
            bid assessment performance, trends, and outcomes across different criteria and regions.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EvaluatorAnalytics; 