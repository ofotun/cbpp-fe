import React from 'react';
import {
  Box,
  Typography,
  Alert,
  AlertTitle,
  Card,
  CardContent,
} from '@mui/material';
import { Score as ScoreIcon } from '@mui/icons-material';

const EvaluatorScoring: React.FC = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Scoring System
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Access weighted scoring systems and criteria
        </Typography>
      </Box>

      <Alert severity="info" sx={{ mb: 4 }}>
        <AlertTitle>Under Construction</AlertTitle>
        The Scoring System page is currently being developed. This page will include:
        <Box component="ul" sx={{ mt: 1, pl: 2 }}>
          <li>Weighted scoring algorithms</li>
          <li>Socio-economic criteria integration</li>
          <li>Custom scoring templates</li>
          <li>Multi-criteria decision analysis</li>
          <li>Scoring validation and quality checks</li>
          <li>Historical scoring data analysis</li>
          <li>Automated scoring recommendations</li>
        </Box>
      </Alert>

      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <ScoreIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h6">
              Advanced Scoring Engine
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            This module will provide sophisticated scoring tools including weighted criteria, 
            socio-economic factors, and automated scoring algorithms for fair and transparent bid evaluation.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EvaluatorScoring; 