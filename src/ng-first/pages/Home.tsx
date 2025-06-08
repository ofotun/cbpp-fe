import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Accordion, AccordionSummary, AccordionDetails, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SecurityIcon from '@mui/icons-material/Security';
import PeopleIcon from '@mui/icons-material/People';
import GavelIcon from '@mui/icons-material/Gavel';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const policyPoints = [
  {
    title: 'Prioritizing Local Content',
    description: 'The policy prioritizes locally made goods and homegrown solutions in all government procurements.'
  },
  {
    title: 'Revised Procurement Guidelines',
    description: 'The Bureau of Public Procurement (BPP) will revise and enforce procurement guidelines to favor local suppliers.'
  },
  {
    title: 'Local Content Compliance Framework',
    description: 'A framework will be created to ensure compliance with local content requirements in all government procurements.'
  },
  {
    title: 'Register of Local Suppliers',
    description: 'A register of high-quality Nigerian manufacturers and service providers will be maintained by the BPP.'
  },
  {
    title: 'No Foreign Procurement Without Justification',
    description: 'No procurement of foreign goods or services will be allowed without justification and a written waiver from the BPP.'
  },
  {
    title: 'Technology Transfer and Skills Development',
    description: 'Contracts for foreign goods or services must include provisions for technology transfer, local production, or skills development.'
  },
  {
    title: 'Audit and Revision of Procurement Plans',
    description: 'All Ministries, Departments, and Agencies (MDAs) must conduct an immediate audit of procurement plans and submit revised versions in line with the policy.'
  },
  {
    title: 'Sanctions for Non-Compliance',
    description: 'Breaches of the policy will attract sanctions, including cancellation of procurement and disciplinary action against responsible officers.'
  },
  {
    title: 'Promoting National Pride and Self-Belief',
    description: 'The policy aims to promote a new era of local enterprise, self-belief, and national pride.'
  },
  {
    title: 'Government-Led Initiative',
    description: 'The investment will be led by example by government in Nigerian industries and changing how it spends, procures, and builds.'
  }
];

const platforms = [
  {
    title: 'Community Based Procurement Platform (CBPP)',
    description: 'Enabling community-based organizations to participate in government procurement processes.',
    path: '/cbpp'
  },
  {
    title: 'Local Manufacturers and Service Providers Register Platform (LMSPR)',
    description: 'A comprehensive registry of qualified Nigerian manufacturers and service providers, facilitating easy access to local suppliers for government procurement.',
    path: '/hmpp'
  }
];

const backgroundImages = [
  '/images/about/community-empowerment.png',
  '/images/about/transparent-procurement.png',
  '/images/about/compliance-oversight.png',
  '/images/features/community-engagement.jpg',
  '/images/features/project-oversight.jpg',
  '/images/about/economic-growth.png',
  '/images/features/budget-management.jpg',
  '/images/features/secure-payments.jpg',
  '/images/about/community-empowerment.png',
  '/images/about/economic-growth.png'
];

const Home: React.FC = () => {
  const theme = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '80vh',
          minHeight: '600px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center'
        }}
      >
        {/* Background Images Carousel */}
        {backgroundImages.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: currentImageIndex === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `linear-gradient(135deg, ${theme.palette.primary.main}cc 0%, ${theme.palette.primary.dark}cc 100%)`,
                zIndex: 1,
              },
            }}
          >
            <Box
              component="img"
              src={image}
              alt={`Background ${index + 1}`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        ))}

        {/* Hero Content */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={3}>
              <Box
                component="img"
                src="/images/logos/coat-of-arms.png"
                alt="Nigerian Coat of Arms"
                sx={{
                  width: '100%',
                  maxWidth: '300px',
                  height: 'auto'
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '3rem', md: '4.5rem' },
                  lineHeight: 1.2,
                  mb: 2,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  color: 'white'
                }}
              >
                The Nigeria First Policy
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  maxWidth: '800px',
                  mx: 'auto',
                  mb: 4,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  color: 'white'
                }}
              >
                A comprehensive framework for promoting local content and national development
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box
                component="img"
                src="/images/logos/bpp-logo-transparent.png"
                alt="Bureau of Public Procurement"
                sx={{
                  width: '100%',
                  maxWidth: '300px',
                  height: 'auto'
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Policy Points Section */}
      <Box sx={{ py: 8, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              Policy Points
            </Typography>
          </Box>

          {/* Policy Points - Accordion Layout */}
          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            {policyPoints.map((policy, index) => (
              <Accordion key={policy.title} sx={{ mb: 2 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    '&:hover': {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
                    {String(index + 1).padStart(2, '0')}. {policy.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" color="text.secondary">
                    {policy.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Platforms Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom>
          Our Platforms
        </Typography>
        <Grid container spacing={4}>
          {platforms.map((platform) => (
            <Grid item xs={12} md={6} key={platform.title}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {platform.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {platform.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 