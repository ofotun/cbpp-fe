import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import {
  Groups as GroupsIcon,
  Handshake as HandshakeIcon,
  TrendingUp as TrendingUpIcon,
  Gavel as GavelIcon,
} from '@mui/icons-material';

const sectionImages = {
  community: '/images/about/community-empowerment.png',
  procurement: '/images/about/transparent-procurement.png',
  growth: '/images/about/economic-growth.png',
  compliance: '/images/about/compliance-oversight.png',
};

export const AboutPage: React.FC = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <GroupsIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Community Empowerment',
      description: 'Enabling local communities to actively participate in government projects up to ₦50 million, creating opportunities for grassroots development.',
      image: sectionImages.community,
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Transparent Procurement',
      description: 'A fair and open system that ensures community-based organizations can compete for and win government contracts through a transparent process.',
      image: sectionImages.procurement,
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Economic Growth',
      description: 'Stimulating local economies by channeling government spending directly into communities, creating jobs and fostering sustainable development.',
      image: sectionImages.growth,
    },
    {
      icon: <GavelIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Compliance & Oversight',
      description: 'Ensuring all projects meet government standards with proper monitoring and evaluation to guarantee quality and accountability.',
      image: sectionImages.compliance,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          About the Platform
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          Transforming Community Development Through Transparent Procurement
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
          The Community-Based Procurement Platform (CBPP) is a groundbreaking initiative under President Bola Ahmed Tinubu's Renewed Hope Initiative. 
          It revolutionizes how government projects are implemented at the local level by directly involving communities in the procurement process.
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mb: 8 }}>
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
                {feature.icon}
                <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 2 }}>
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

      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Our Vision
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
          To create a more inclusive and transparent procurement system that empowers communities, 
          reduces poverty, and ensures government resources are effectively utilized for local development.
        </Typography>
      </Box>
    </Container>
  );
}; 