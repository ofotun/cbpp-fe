import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

const About: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section with Logo */}
      <Grid container spacing={4} alignItems="center" sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            About Nigeria First Initiative
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Empowering Communities Through Local Development
          </Typography>
          <Typography variant="body1" paragraph>
            The Nigeria First Initiative is a groundbreaking program designed to transform local communities 
            through sustainable development and community-driven projects. Our mission is to empower 
            communities to take charge of their development while ensuring transparency and accountability 
            in the use of public resources.
          </Typography>
          <Typography variant="body1" paragraph>
            Through our innovative platforms and partnerships with key government agencies, we provide 
            communities with the tools, resources, and support they need to identify, plan, and implement 
            projects that address their most pressing needs.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/images/ng-first/ng-first-logo.jpg"
            alt="Nigeria First Logo"
            sx={{
              width: '100%',
              height: '400px',
              objectFit: 'contain'
            }}
          />
        </Grid>
      </Grid>

      {/* Mission and Vision */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
          Our Mission & Vision
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
              Mission
            </Typography>
            <Typography variant="body1" paragraph>
              To empower local communities through sustainable development initiatives, fostering 
              self-reliance and creating lasting positive impact across Nigeria. We strive to 
              build stronger communities by providing the necessary tools, resources, and support 
              for community-driven development.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
              Vision
            </Typography>
            <Typography variant="body1" paragraph>
              To be the leading force in community development across Nigeria, creating a future 
              where every community has the capacity and resources to drive its own sustainable 
              development. We envision a Nigeria where local communities are empowered to create 
              lasting positive change.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Core Values */}
      <Box>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
          Our Core Values
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
              Community First
            </Typography>
            <Typography variant="body1" paragraph>
              We prioritize the needs and aspirations of local communities, ensuring that all 
              development initiatives are community-driven and sustainable.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
              Transparency
            </Typography>
            <Typography variant="body1" paragraph>
              We maintain the highest standards of transparency and accountability in all our 
              operations, building trust with communities and stakeholders.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
              Innovation
            </Typography>
            <Typography variant="body1" paragraph>
              We embrace innovative solutions and technologies to enhance community development 
              and create lasting positive impact.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About; 