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
  Chip,
  OutlinedInput,
} from '@mui/material';
import { useAppContext } from '../../contexts/AppContext';
import { mockApi } from '../../services/mockApi';
import { mockCBOs } from '../../services/mockData';

const steps = [
  'Personal Information',
  'Company Information',
  'Business Registration',
  'Financial Information',
  'Tax Compliance',
  'Document Upload',
];

const states = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
  'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Federal Capital Territory',
  'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara',
  'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers',
  'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
];

const ContractorRegistration: React.FC = () => {
  const { user } = useAppContext();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: '',
      bvn: '',
      nin: '',
      phone: '',
      email: '',
      state: '',
      lga: '',
      address: '',
    },
    companyInfo: {
      name: '',
      registrationNumber: '',
      type: '',
      category: '',
      cboIds: [],
    },
    businessRegistration: {
      certificateNumber: '',
      issueDate: '',
      expiryDate: '',
      category: '',
    },
    financialInfo: {
      bankName: '',
      accountNumber: '',
      accountName: '',
      annualTurnover: '',
    },
    taxCompliance: {
      tin: '',
      taxClearance: '',
      complianceStatus: '',
    },
    documents: [],
  });

  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      try {
        await mockApi.createContractor(formData);
        // Handle successful registration
      } catch (error) {
        console.error('Error creating contractor:', error);
      }
    }
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleInputChange = (section: string, field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value,
      },
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
                label="First Name"
                value={formData.personalInfo.firstName}
                onChange={(e) =>
                  handleInputChange('personalInfo', 'firstName', e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                value={formData.personalInfo.lastName}
                onChange={(e) =>
                  handleInputChange('personalInfo', 'lastName', e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date of Birth"
                type="date"
                value={formData.personalInfo.dateOfBirth}
                onChange={(e) =>
                  handleInputChange('personalInfo', 'dateOfBirth', e.target.value)
                }
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select
                  value={formData.personalInfo.gender}
                  label="Gender"
                  onChange={(e) =>
                    handleInputChange('personalInfo', 'gender', e.target.value)
                  }
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="BVN"
                value={formData.personalInfo.bvn}
                onChange={(e) =>
                  handleInputChange('personalInfo', 'bvn', e.target.value)
                }
                inputProps={{ maxLength: 11 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="NIN"
                value={formData.personalInfo.nin}
                onChange={(e) =>
                  handleInputChange('personalInfo', 'nin', e.target.value)
                }
                inputProps={{ maxLength: 11 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone Number"
                value={formData.personalInfo.phone}
                onChange={(e) =>
                  handleInputChange('personalInfo', 'phone', e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={formData.personalInfo.email}
                onChange={(e) =>
                  handleInputChange('personalInfo', 'email', e.target.value)
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
                    handleInputChange('personalInfo', 'state', e.target.value)
                  }
                >
                  {states.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="LGA"
                value={formData.personalInfo.lga}
                onChange={(e) =>
                  handleInputChange('personalInfo', 'lga', e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                value={formData.personalInfo.address}
                onChange={(e) =>
                  handleInputChange('personalInfo', 'address', e.target.value)
                }
                multiline
                rows={2}
              />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Company Name"
                value={formData.companyInfo.name}
                onChange={(e) =>
                  handleInputChange('companyInfo', 'name', e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Registration Number"
                value={formData.companyInfo.registrationNumber}
                onChange={(e) =>
                  handleInputChange('companyInfo', 'registrationNumber', e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Company Type</InputLabel>
                <Select
                  value={formData.companyInfo.type}
                  label="Company Type"
                  onChange={(e) =>
                    handleInputChange('companyInfo', 'type', e.target.value)
                  }
                >
                  <MenuItem value="limited">Limited Liability</MenuItem>
                  <MenuItem value="partnership">Partnership</MenuItem>
                  <MenuItem value="sole">Sole Proprietorship</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={formData.companyInfo.category}
                  label="Category"
                  onChange={(e) =>
                    handleInputChange('companyInfo', 'category', e.target.value)
                  }
                >
                  <MenuItem value="construction">Construction</MenuItem>
                  <MenuItem value="supply">Supply</MenuItem>
                  <MenuItem value="consulting">Consulting</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Associated CBOs</InputLabel>
                <Select
                  multiple
                  value={formData.companyInfo.cboIds}
                  onChange={(e) =>
                    handleInputChange('companyInfo', 'cboIds', e.target.value)
                  }
                  input={<OutlinedInput label="Associated CBOs" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => {
                        const cbo = mockCBOs.find((c) => c.id === value);
                        return (
                          <Chip
                            key={value}
                            label={cbo?.name || value}
                            sx={{ m: 0.5 }}
                          />
                        );
                      })}
                    </Box>
                  )}
                >
                  {mockCBOs.map((cbo) => (
                    <MenuItem key={cbo.id} value={cbo.id}>
                      {cbo.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Business Registration Certificate Number"
                value={formData.businessRegistration.certificateNumber}
                onChange={(e) =>
                  handleInputChange('businessRegistration', 'certificateNumber', e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Issue Date"
                type="date"
                value={formData.businessRegistration.issueDate}
                onChange={(e) =>
                  handleInputChange('businessRegistration', 'issueDate', e.target.value)
                }
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Expiry Date"
                type="date"
                value={formData.businessRegistration.expiryDate}
                onChange={(e) =>
                  handleInputChange('businessRegistration', 'expiryDate', e.target.value)
                }
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={formData.businessRegistration.category}
                  label="Category"
                  onChange={(e) =>
                    handleInputChange('businessRegistration', 'category', e.target.value)
                  }
                >
                  <MenuItem value="Class A">Class A</MenuItem>
                  <MenuItem value="Class B">Class B</MenuItem>
                  <MenuItem value="Class C">Class C</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        );
      case 3:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Bank Name"
                value={formData.financialInfo.bankName}
                onChange={(e) =>
                  handleInputChange('financialInfo', 'bankName', e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Account Number"
                value={formData.financialInfo.accountNumber}
                onChange={(e) =>
                  handleInputChange('financialInfo', 'accountNumber', e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Account Name"
                value={formData.financialInfo.accountName}
                onChange={(e) =>
                  handleInputChange('financialInfo', 'accountName', e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Annual Turnover"
                value={formData.financialInfo.annualTurnover}
                onChange={(e) =>
                  handleInputChange('financialInfo', 'annualTurnover', e.target.value)
                }
              />
            </Grid>
          </Grid>
        );
      case 4:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Tax Identification Number (TIN)"
                value={formData.taxCompliance.tin}
                onChange={(e) =>
                  handleInputChange('taxCompliance', 'tin', e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Tax Clearance Certificate Number"
                value={formData.taxCompliance.taxClearance}
                onChange={(e) =>
                  handleInputChange('taxCompliance', 'taxClearance', e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Compliance Status</InputLabel>
                <Select
                  value={formData.taxCompliance.complianceStatus}
                  label="Compliance Status"
                  onChange={(e) =>
                    handleInputChange('taxCompliance', 'complianceStatus', e.target.value)
                  }
                >
                  <MenuItem value="compliant">Compliant</MenuItem>
                  <MenuItem value="pending">Pending</MenuItem>
                  <MenuItem value="non_compliant">Non-Compliant</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        );
      case 5:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Required Documents
              </Typography>
              <Alert severity="info" sx={{ mb: 3 }}>
                Please upload the following documents:
                <ul>
                  <li>Business Registration Certificate</li>
                  <li>Tax Clearance Certificate</li>
                  <li>Financial Statements</li>
                  <li>Company Profile</li>
                </ul>
              </Alert>
              {/* Document upload UI will be implemented here */}
            </Grid>
          </Grid>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Contractor Registration
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

export default ContractorRegistration; 