import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Group as GroupIcon,
  AccountBalance as AccountBalanceIcon,
  Assignment as AssignmentIcon,
  Payment as PaymentIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CommunityIcon, BudgetIcon, ProjectIcon } from '../components/icons';

const heroImages = [
  '/images/hero/hero-1.png',
  '/images/hero/hero-2.png',
  '/images/hero/hero-3.png',
  '/images/hero/hero-4.png',
];

const featureImages = {
  community: '/images/features/community-engagement.jpg',
  budget: '/images/features/budget-management.jpg',
  project: '/images/features/project-oversight.jpg',
  payment: '/images/features/secure-payments.jpg',
};

export const HomePage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation('microsite');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <CommunityIcon />,
      title: t('home.features.items.communityEngagement.title'),
      description: t('home.features.items.communityEngagement.description'),
      image: featureImages.community,
    },
    {
      icon: <BudgetIcon />,
      title: t('home.features.items.budgetManagement.title'),
      description: t('home.features.items.budgetManagement.description'),
      image: featureImages.budget,
    },
    {
      icon: <ProjectIcon />,
      title: t('home.features.items.projectOversight.title'),
      description: t('home.features.items.projectOversight.description'),
      image: featureImages.project,
    },
    {
      icon: <PaymentIcon />,
      title: t('home.features.items.securePayments.title'),
      description: t('home.features.items.securePayments.description'),
      image: featureImages.payment,
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          height: { xs: '100vh', md: '80vh' },
          minHeight: '600px',
        }}
      >
        {/* Background Images Carousel */}
        {heroImages.map((image, index) => (
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
              alt={`Hero Image ${index + 1}`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        ))}

        {/* Content */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, height: '100%' }}>
          <Grid container spacing={4} alignItems="center" sx={{ height: '100%' }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2,
                  mb: 2,
                  color: 'white',
                }}
              >
                {t('home.hero.title')}
              </Typography>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  color: 'white',
                }}
              >
                {t('home.hero.subtitle')}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => navigate('/signup')}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                  }}
                >
                  {t('home.hero.signUp')}
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  onClick={() => navigate('/about')}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {t('home.hero.learnMore')}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 8, mt: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          {t('home.features.title')}
        </Typography>
        <Typography variant="h6" component="h3" align="center" color="text.secondary" sx={{ mb: 6 }}>
          {t('home.features.subtitle')}
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={feature.image}
                  alt={feature.title}
                  sx={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box
        sx={{
          bgcolor: theme.palette.background.paper,
          py: 8,
          borderTop: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            {t('home.cta.title')}
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 4 }}>
            {t('home.cta.subtitle')}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/signup')}
            >
              {t('home.hero.signUp')}
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage; 