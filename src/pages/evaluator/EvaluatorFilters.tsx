import React from 'react';
import {
  Box,
  Typography,
  Alert,
  AlertTitle,
  Card,
  CardContent,
} from '@mui/material';
import { FilterList as FilterListIcon } from '@mui/icons-material';

const EvaluatorFilters: React.FC = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Advanced Filters
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Use dashboard filters including geotags
        </Typography>
      </Box>

      <Alert severity="info" sx={{ mb: 4 }}>
        <AlertTitle>Under Construction</AlertTitle>
        The Advanced Filters page is currently being developed. This page will include:
        <Box component="ul" sx={{ mt: 1, pl: 2 }}>
          <li>Geographic filtering with geotags</li>
          <li>Contractor category filters</li>
          <li>Project value range filters</li>
          <li>Evaluation status filters</li>
          <li>Custom filter combinations</li>
          <li>Saved filter presets</li>
          <li>Real-time filter results</li>
        </Box>
      </Alert>

      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <FilterListIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h6">
              Intelligent Filtering System
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            This module will provide advanced filtering capabilities including geographic analysis, 
            contractor categorization, and dynamic filter combinations for efficient bid evaluation.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EvaluatorFilters; 