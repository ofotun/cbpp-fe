import React, { useState } from 'react';
import {
  Container,
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const states = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
  'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Federal Capital Territory',
  'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara',
  'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers',
  'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
];

// Mock LGA data - in a real app, this would be fetched based on selected state
const lgasByState: { [key: string]: string[] } = {
  'Lagos': ['Agege', 'Ajeromi-Ifelodun', 'Alimosho', 'Amuwo-Odofin', 'Apapa', 'Badagry', 'Epe', 'Eti-Osa', 'Ibeju-Lekki', 'Ifako-Ijaiye', 'Ikeja', 'Ikorodu', 'Kosofe', 'Lagos Island', 'Lagos Mainland', 'Mushin', 'Ojo', 'Oshodi-Isolo', 'Shomolu', 'Surulere'],
  'Kano': ['Ajingi', 'Albasu', 'Bagwai', 'Bebeji', 'Bichi', 'Bunkure', 'Dala', 'Dambatta', 'Dawakin Kudu', 'Dawakin Tofa', 'Doguwa', 'Fagge', 'Gabasawa', 'Garko', 'Garum Mallam', 'Gaya', 'Gezawa', 'Gwale', 'Gwarzo', 'Kabo', 'Kano Municipal', 'Karaye', 'Kibiya', 'Kiru', 'Kumbotso', 'Kunchi', 'Kura', 'Madobi', 'Makoda', 'Minjibir', 'Nasarawa', 'Rano', 'Rimin Gado', 'Rogo', 'Shanono', 'Sumaila', 'Takai', 'Tarauni', 'Tofa', 'Tsanyawa', 'Tudun Wada', 'Ungogo', 'Warawa', 'Wudil'],
  'Rivers': ['Abua-Odual', 'Ahoada East', 'Ahoada West', 'Akuku-Toru', 'Andoni', 'Asari-Toru', 'Bonny', 'Degema', 'Eleme', 'Emohua', 'Etche', 'Gokana', 'Ikwerre', 'Khana', 'Obio-Akpor', 'Ogba-Egbema-Ndoni', 'Ogu-Bolo', 'Okrika', 'Omuma', 'Opobo-Nkoro', 'Oyigbo', 'Port Harcourt', 'Tai'],
  // Add more states as needed
};

const sectors = [
  'Construction',
  'Information Technology',
  'Healthcare',
  'Education',
  'Agriculture',
  'Manufacturing',
  'Transportation',
  'Energy',
  'Water & Sanitation',
  'Telecommunications',
  'Financial Services',
  'Real Estate',
  'Tourism & Hospitality',
  'Media & Entertainment',
  'Consulting Services',
  'Other'
];

const genders = [
  'Male',
  'Female',
  'Prefer not to say'
];

interface FormData {
  firstName: string;
  surname: string;
  businessName: string;
  cacNumber: string;
  dateOfIncorporation: string;
  sector: string;
  tin: string;
  gender: string;
  bvn: string;
  state: string;
  lga: string;
}

export const SignupPage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    surname: '',
    businessName: '',
    cacNumber: '',
    dateOfIncorporation: '',
    sector: '',
    tin: '',
    gender: '',
    bvn: '',
    state: '',
    lga: '',
  });
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Reset LGA when state changes
    if (name === 'state') {
      setFormData(prev => ({
        ...prev,
        state: value,
        lga: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // TODO: Implement signup logic with BVN verification
      console.log('Form submitted:', formData);
      // Navigate to success page or dashboard after successful signup
      navigate('/signup/success');
    } catch (error) {
      console.error('Signup failed:', error);
      setError('Signup failed. Please try again.');
    }
  };

  const availableLgas = formData.state ? (lgasByState[formData.state] || []) : [];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={6}>
        {/* Hero Illustration */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/images/sign-up-1.png"
            alt="Signup Illustration"
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: '600px',
              objectFit: 'contain',
            }}
          />
        </Grid>

        {/* Signup Form */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography variant="h4" component="h1" gutterBottom>
                Contractor Registration
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Register as a contractor to participate in community-based procurement projects
              </Typography>
            </Box>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                {/* Personal Information Section */}
                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                    Personal Information
                  </Typography>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Gender</InputLabel>
                    <Select
                      name="gender"
                      value={formData.gender}
                      label="Gender"
                      onChange={handleChange}
                    >
                      {genders.map((gender) => (
                        <MenuItem key={gender} value={gender}>
                          {gender}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="BVN"
                    name="bvn"
                    value={formData.bvn}
                    onChange={handleChange}
                    inputProps={{ maxLength: 11 }}
                    variant="outlined"
                    helperText="Enter your 11-digit Bank Verification Number"
                  />
                </Grid>

                {/* Business Information Section */}
                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', mt: 2 }}>
                    Business Information
                  </Typography>
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Business Name"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    variant="outlined"
                    helperText="Enter your registered business name"
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="CAC Number"
                    name="cacNumber"
                    value={formData.cacNumber}
                    onChange={handleChange}
                    variant="outlined"
                    helperText="Corporate Affairs Commission number"
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Date of Incorporation"
                    name="dateOfIncorporation"
                    type="date"
                    value={formData.dateOfIncorporation}
                    onChange={handleChange}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Sector</InputLabel>
                    <Select
                      name="sector"
                      value={formData.sector}
                      label="Sector"
                      onChange={handleChange}
                    >
                      {sectors.map((sector) => (
                        <MenuItem key={sector} value={sector}>
                          {sector}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="TIN (Optional)"
                    name="tin"
                    value={formData.tin}
                    onChange={handleChange}
                    variant="outlined"
                    helperText="Tax Identification Number"
                  />
                </Grid>

                {/* Location Information Section */}
                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', mt: 2 }}>
                    Location Information
                  </Typography>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required>
                    <InputLabel>State</InputLabel>
                    <Select
                      name="state"
                      value={formData.state}
                      label="State"
                      onChange={handleChange}
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
                  <FormControl fullWidth required>
                    <InputLabel>LGA</InputLabel>
                    <Select
                      name="lga"
                      value={formData.lga}
                      label="LGA"
                      onChange={handleChange}
                      disabled={!formData.state}
                    >
                      {availableLgas.map((lga) => (
                        <MenuItem key={lga} value={lga}>
                          {lga}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                
                {error && (
                  <Grid item xs={12}>
                    <Typography color="error" align="center">
                      {error}
                    </Typography>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    sx={{ mt: 2 }}
                  >
                    Register as Contractor
                  </Button>
                </Grid>
              </Grid>
            </form>

            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                By registering, you agree to our{' '}
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => navigate('/terms')}
                  sx={{ textDecoration: 'underline' }}
                >
                  Terms of Service
                </Link>
                {' '}and{' '}
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => navigate('/privacy')}
                  sx={{ textDecoration: 'underline' }}
                >
                  Privacy Policy
                </Link>
                .
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Additional information will be auto-populated during BVN verification.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}; 