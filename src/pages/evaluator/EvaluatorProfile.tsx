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

const EvaluatorProfile: React.FC = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Profile
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Manage your evaluator profile and preferences
        </Typography>
      </Box>

      <Alert severity="info" sx={{ mb: 4 }}>
        <AlertTitle>Under Construction</AlertTitle>
        The Evaluator profile page is currently being developed. This page will include:
        <Box component="ul" sx={{ mt: 1, pl: 2 }}>
          <li>Personal information management</li>
          <li>Professional credentials and certifications</li>
          <li>Evaluation specialization settings</li>
          <li>Geographic coverage preferences</li>
          <li>Scoring criteria preferences</li>
          <li>Account security settings</li>
        </Box>
      </Alert>

      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <PersonIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h6">
              Dr. Fatima Ahmed
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Technical Evaluation & Scoring Specialist
          </Typography>
          <Typography variant="body2">
            Bureau of Public Procurement - Bid Evaluation Department
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EvaluatorProfile; 