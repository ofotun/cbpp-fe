import React from 'react';
import {
  Box,
  Typography,
  Alert,
  AlertTitle,
  Card,
  CardContent,
} from '@mui/material';
import { LocationOn as LocationIcon } from '@mui/icons-material';

const EvaluatorGeolocation: React.FC = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Geographic Analysis
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Analyze bids using geographic criteria
        </Typography>
      </Box>

      <Alert severity="info" sx={{ mb: 4 }}>
        <AlertTitle>Under Construction</AlertTitle>
        The Geographic Analysis page is currently being developed. This page will include:
        <Box component="ul" sx={{ mt: 1, pl: 2 }}>
          <li>Interactive maps and geospatial visualization</li>
          <li>Local government area analysis</li>
          <li>Distance-based evaluation criteria</li>
          <li>Geographic distribution reports</li>
          <li>Location-based contractor matching</li>
          <li>Regional development impact analysis</li>
          <li>Geographic equity assessment tools</li>
        </Box>
      </Alert>

      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <LocationIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h6">
              Geospatial Evaluation Platform
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            This module will provide comprehensive geographic analysis tools for evaluating bids 
            based on location, regional development goals, and geographic equity considerations.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EvaluatorGeolocation; 