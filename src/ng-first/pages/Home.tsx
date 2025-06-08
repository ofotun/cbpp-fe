import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Divider, Accordion, AccordionSummary, AccordionDetails, useTheme, useMediaQuery, IconButton } from '@mui/material';
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

const Home: React.FC = () => {
  return (
    <Box>
      {/* Policy Points Section */}
      <Box sx={{ py: 8, backgroundColor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              The Nigeria First Policy
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
              A comprehensive framework for promoting local content and national development
            </Typography>
          </Box>

          {/* Policy Points - Two Column Layout */}
          <Box>
            {[
              {
                title: '01. Prioritizing Local Content',
                desc: 'The policy prioritizes locally made goods and homegrown solutions in all government procurements, ensuring that Nigerian businesses and industries are given preference in government contracts and purchases.',
                img: '/images/about/community-empowerment.png',
                alt: 'Prioritizing Local Content',
              },
              {
                title: '02. Revised Procurement Guidelines',
                desc: 'The Bureau of Public Procurement (BPP) will revise and enforce procurement guidelines to favor local suppliers, creating a more supportive environment for Nigerian businesses to participate in government procurement.',
                img: '/images/about/transparent-procurement.png',
                alt: 'Revised Procurement Guidelines',
              },
              {
                title: '03. Local Content Compliance Framework',
                desc: 'A comprehensive framework will be created to ensure compliance with local content requirements in all government procurements, establishing clear guidelines and monitoring mechanisms.',
                img: '/images/about/compliance-oversight.png',
                alt: 'Local Content Compliance Framework',
              },
              {
                title: '04. Register of Local Suppliers',
                desc: 'The BPP will maintain a register of high-quality Nigerian manufacturers and service providers, making it easier for government agencies to identify and engage with qualified local suppliers.',
                img: '/images/features/community-engagement.jpg',
                alt: 'Register of Local Suppliers',
              },
              {
                title: '05. No Foreign Procurement Without Justification',
                desc: 'Foreign goods or services will only be procured with proper justification and a written waiver from the BPP, ensuring that local alternatives are thoroughly considered first.',
                img: '/images/features/project-oversight.jpg',
                alt: 'Foreign Procurement Control',
              },
              {
                title: '06. Technology Transfer and Skills Development',
                desc: 'Contracts for foreign goods or services must include provisions for technology transfer, local production, or skills development, ensuring that Nigerian capabilities are enhanced through such partnerships.',
                img: '/images/about/economic-growth.png',
                alt: 'Technology Transfer',
              },
              {
                title: '07. Audit and Revision of Procurement Plans',
                desc: 'All Ministries, Departments, and Agencies (MDAs) must conduct an immediate audit of procurement plans and submit revised versions in line with the policy, ensuring full compliance with local content requirements.',
                img: '/images/features/budget-management.jpg',
                alt: 'Procurement Audit',
              },
              {
                title: '08. Sanctions for Non-Compliance',
                desc: 'Breaches of the policy will attract sanctions, including cancellation of procurement and disciplinary action against responsible officers, ensuring strict adherence to the policy guidelines.',
                img: '/images/features/secure-payments.jpg',
                alt: 'Policy Compliance',
              },
              {
                title: '09. Promoting National Pride and Self-Belief',
                desc: 'The policy aims to promote a new era of local enterprise, self-belief, and national pride, encouraging Nigerians to support and take pride in locally made products and services.',
                img: '/images/about/community-empowerment.png',
                alt: 'National Pride',
              },
              {
                title: '10. Government-Led Initiative',
                desc: 'The investment will be led by example by government in Nigerian industries and changing how it spends, procures, and builds, setting a standard for other sectors to follow.',
                img: '/images/about/economic-growth.png',
                alt: 'Government Leadership',
              },
            ].map((policy, idx) => (
              <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }} key={policy.title}>
                <Grid item xs={12} md={5}>
                  <Box
                    component="img"
                    src={policy.img}
                    alt={policy.alt}
                    sx={{
                      width: '100%',
                      height: { xs: 200, md: 260 },
                      objectFit: 'cover',
                      borderRadius: 2,
                      boxShadow: 3,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={7}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1 }}>
                    {policy.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {policy.desc}
                  </Typography>
                </Grid>
              </Grid>
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