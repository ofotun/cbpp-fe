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
  Card,
  CardContent,
} from '@mui/material';
import { useAppContext } from '../../contexts/AppContext';
import { mockApi } from '../../services/mockApi';

const steps = [
  'Personal Information',
  'Qualifications',
  'Training & Certification',
  'LGA Assignment',
  'Document Upload',
];

const PCORegistration: React.FC = () => {
  const { user } = useAppContext();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
      state: '',
      lga: '',
    },
    qualifications: [],
    trainings: [],
    assignments: [],
    documents: [],
  });

  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      try {
        await mockApi.createPCO(formData);
        // Handle successful registration
      } catch (error) {
        console.error('Error creating PCO:', error);
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
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Full Name"
                value={formData.personalInfo.name}
                onChange={(e) =>
                  handleInputChange('personalInfo', {
                    ...formData.personalInfo,
                    name: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                value={formData.personalInfo.email}
                onChange={(e) =>
                  handleInputChange('personalInfo', {
                    ...formData.personalInfo,
                    email: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone Number"
                value={formData.personalInfo.phone}
                onChange={(e) =>
                  handleInputChange('personalInfo', {
                    ...formData.personalInfo,
                    phone: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                value={formData.personalInfo.address}
                onChange={(e) =>
                  handleInputChange('personalInfo', {
                    ...formData.personalInfo,
                    address: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>State</InputLabel>
                <Select
                  value={formData.personalInfo.state}
                  label="State"
                  onChange={(e) =>
                    handleInputChange('personalInfo', {
                      ...formData.personalInfo,
                      state: e.target.value,
                    })
                  }
                >
                  <MenuItem value="lagos">Lagos</MenuItem>
                  <MenuItem value="abuja">Abuja</MenuItem>
                  {/* Add more states */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>LGA</InputLabel>
                <Select
                  value={formData.personalInfo.lga}
                  label="LGA"
                  onChange={(e) =>
                    handleInputChange('personalInfo', {
                      ...formData.personalInfo,
                      lga: e.target.value,
                    })
                  }
                >
                  <MenuItem value="ikeja">Ikeja</MenuItem>
                  <MenuItem value="abuja-municipal">Abuja Municipal</MenuItem>
                  {/* Add more LGAs */}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Professional Qualifications
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Bachelor's Degree in Procurement"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Professional Certification in Procurement"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Project Management Certification"
                />
              </Grid>
            </Grid>
          </Box>
        );
      case 2:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Training & Certification
            </Typography>
            <Alert severity="info" sx={{ mb: 2 }}>
              Please complete the required training modules before proceeding.
            </Alert>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="subtitle1">Basic Procurement Training</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Duration: 2 weeks
                    </Typography>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Completed"
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="subtitle1">Advanced Procurement Training</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Duration: 4 weeks
                    </Typography>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Completed"
                    />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        );
      case 3:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              LGA Assignment
            </Typography>
            <Alert severity="info" sx={{ mb: 2 }}>
              Select the LGAs you are willing to work in.
            </Alert>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Preferred LGAs</InputLabel>
                  <Select
                    multiple
                    value={formData.assignments}
                    label="Preferred LGAs"
                    onChange={(e) => handleInputChange('assignments', e.target.value)}
                  >
                    <MenuItem value="ikeja">Ikeja</MenuItem>
                    <MenuItem value="abuja-municipal">Abuja Municipal</MenuItem>
                    {/* Add more LGAs */}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        );
      case 4:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Required Documents
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Academic Certificates"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Professional Certificates"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Training Certificates"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Identification Documents"
                />
              </Grid>
            </Grid>
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
          PCO Registration
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

export default PCORegistration; 