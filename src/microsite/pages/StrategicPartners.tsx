import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  AccountBalance as AccountBalanceIcon,
  Business as BusinessIcon,
  Security as SecurityIcon,
  Groups as GroupsIcon,
  Cloud as CloudIcon,
  Shield as ShieldIcon,
  Code as CodeIcon,
  Handshake as HandshakeIcon,
} from '@mui/icons-material';

export const StrategicPartnersPage: React.FC = () => {
  const theme = useTheme();

  const partnerSections = [
    {
      title: 'Government Entities',
      icon: <AccountBalanceIcon sx={{ color: theme.palette.primary.main }} />,
      partners: [
        'Bureau of Public Procurement (BPP)',
        'Budget Office of the Federation (BOF)',
        'Federal Ministry of Finance',
        'Economic and Financial Crimes Commission (EFCC)',
        'Independent Corrupt Practices Commission (ICPC)',
        'National Information Technology Development Agency (NITDA)',
        'The Central Results Delivery Coordination Unit (CRDCU)',
      ],
    },
    {
      title: 'Financial Institutions',
      icon: <BusinessIcon sx={{ color: theme.palette.primary.main }} />,
      partners: [
        'Central Bank of Nigeria',
        'Commercial Banks',
        'Payment Service Providers',
      ],
    },
    {
      title: 'Technology Partners',
      icon: <CloudIcon sx={{ color: theme.palette.primary.main }} />,
      subcategories: [
        {
          title: 'Infrastructure',
          icon: <CloudIcon sx={{ color: theme.palette.primary.main }} />,
          partners: ['Cloud infrastructure providers'],
        },
        {
          title: 'Security',
          icon: <ShieldIcon sx={{ color: theme.palette.primary.main }} />,
          partners: ['Cybersecurity firms'],
        },
        {
          title: 'Innovation',
          icon: <CodeIcon sx={{ color: theme.palette.primary.main }} />,
          partners: ['Digital transformation experts'],
        },
      ],
    },
    {
      title: 'Community Organizations',
      icon: <GroupsIcon sx={{ color: theme.palette.primary.main }} />,
      partners: [
        'CBO Networks and Associations',
        'Civil Society Organizations',
      ],
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Strategic Partners
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary" sx={{ mb: 6 }}>
        Building Strong Partnerships for Community Development
      </Typography>

      <Grid container spacing={4}>
        {partnerSections.map((section, index) => (
          <Grid item xs={12} md={6} key={index}>
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
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box sx={{ mr: 2 }}>{section.icon}</Box>
                  <Typography variant="h5" component="h3">
                    {section.title}
                  </Typography>
                </Box>

                {section.subcategories ? (
                  <List>
                    {section.subcategories.map((subcategory, subIndex) => (
                      <React.Fragment key={subIndex}>
                        <ListItem>
                          <ListItemIcon>{subcategory.icon}</ListItemIcon>
                          <ListItemText
                            primary={subcategory.title}
                            primaryTypographyProps={{ variant: 'subtitle1', fontWeight: 'medium' }}
                          />
                        </ListItem>
                        <List component="div" disablePadding>
                          {subcategory.partners.map((partner, partnerIndex) => (
                            <ListItem key={partnerIndex} sx={{ pl: 4 }}>
                              <ListItemText primary={partner} />
                            </ListItem>
                          ))}
                        </List>
                      </React.Fragment>
                    ))}
                  </List>
                ) : (
                  <List>
                    {section.partners.map((partner, partnerIndex) => (
                      <ListItem key={partnerIndex}>
                        <ListItemIcon>
                          <HandshakeIcon sx={{ color: theme.palette.primary.main }} />
                        </ListItemIcon>
                        <ListItemText primary={partner} />
                      </ListItem>
                    ))}
                  </List>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Interested in Becoming a Partner?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Join our network of strategic partners and contribute to transforming public procurement in Nigeria.
        </Typography>
      </Box>
    </Container>
  );
}; 