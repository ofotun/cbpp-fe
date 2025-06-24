import React from 'react';
import {
  Box,
  Typography,
  Alert,
  AlertTitle,
  Card,
  CardContent,
} from '@mui/material';
import { Assessment as AssessmentIcon } from '@mui/icons-material';

const EvaluatorEvaluations: React.FC = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Bid Evaluations
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Manage bid evaluations and assessments
        </Typography>
      </Box>

      <Alert severity="info" sx={{ mb: 4 }}>
        <AlertTitle>Under Construction</AlertTitle>
        The Bid Evaluations page is currently being developed. This page will include:
        <Box component="ul" sx={{ mt: 1, pl: 2 }}>
          <li>List of assigned bid evaluations</li>
          <li>Evaluation workflow management</li>
          <li>Bid document review interface</li>
          <li>Scoring and assessment tools</li>
          <li>Evaluation criteria management</li>
          <li>Collaborative evaluation features</li>
          <li>Evaluation history and tracking</li>
        </Box>
      </Alert>

      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <AssessmentIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h6">
              Evaluation Management System
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            This module will provide comprehensive tools for managing bid evaluations, 
            including document review, scoring, and assessment workflows.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EvaluatorEvaluations; 