import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Alert,
} from '@mui/material';
import { useAppContext } from '../../contexts/AppContext';
import { mockApi } from '../../services/mockApi';

const steps = [
  'Basic Information',
  'Organization Details',
  'Document Upload',
  'Capacity Assessment',
  'Payment',
];

const CBORegistration: React.FC = () => {
  const { user } = useAppContext();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    registrationNumber: '',
    type: '',
    contactPerson: {
      name: '',
      position: '',
      email: '',
      phone: '',
    },
    address: {
      street: '',
      city: '',
      lga: '',
      state: '',
    },
    documents: [],
    capacityAssessment: {
      score: 0,
      level: '',
    },
    bankDetails: {
      bankName: '',
      accountNumber: '',
      accountName: '',
    },
  });

  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      try {
        await mockApi.createCBO(formData);
        // Handle successful registration
      } catch (error) {
        console.error('Error creating CBO:', error);
      }
    }
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Organization Name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Registration Number"
                value={formData.registrationNumber}
                onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Organization Type</InputLabel>
                <Select
                  value={formData.type}
                  label="Organization Type"
                  onChange={(e) => handleInputChange('type', e.target.value)}
                >
                  <MenuItem value="cooperative">Cooperative</MenuItem>
                  <MenuItem value="association">Association</MenuItem>
                  <MenuItem value="ngo">NGO</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Contact Person Details
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                value={formData.contactPerson.name}
                onChange={(e) =>
                  handleInputChange('contactPerson', {
                    ...formData.contactPerson,
                    name: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Position"
                value={formData.contactPerson.position}
                onChange={(e) =>
                  handleInputChange('contactPerson', {
                    ...formData.contactPerson,
                    position: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                value={formData.contactPerson.email}
                onChange={(e) =>
                  handleInputChange('contactPerson', {
                    ...formData.contactPerson,
                    email: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone"
                value={formData.contactPerson.phone}
                onChange={(e) =>
                  handleInputChange('contactPerson', {
                    ...formData.contactPerson,
                    phone: e.target.value,
                  })
                }
              />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Required Documents
            </Typography>
            <FormControlLabel
              control={<Checkbox />}
              label="Registration Certificate"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Tax Clearance Certificate"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Financial Statements"
            />
          </Box>
        );
      case 3:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Capacity Assessment
            </Typography>
            <Alert severity="info">
              Your capacity will be assessed based on your organization's experience,
              resources, and capabilities.
            </Alert>
          </Box>
        );
      case 4:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Registration Fee Payment
            </Typography>
            <Alert severity="info">
              Registration fee: ₦50,000
            </Alert>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          CBO Registration
        </Typography>
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {renderStepContent(activeStep)}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            color="primary"
          >
            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default CBORegistration; 