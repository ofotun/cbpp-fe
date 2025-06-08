import React from 'react';
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';

export const FAQPage: React.FC = () => {
  const theme = useTheme();

  const faqs = [
    {
      question: 'What is the Community-Based Procurement Platform (CBPP)?',
      answer: 'The CBPP is a digital platform that enables community-based organizations to participate in government procurement processes up to ₦50 million. It is part of President Bola Ahmed Tinubu\'s Renewed Hope Initiative and is designed to promote transparency, efficiency, and local economic development.',
    },
    {
      question: 'Who can participate in the platform?',
      answer: 'The platform is open to Community-Based Organizations (CBOs), Procurement Compliance Officers (PCOs), and qualified contractors. Each participant must go through a registration and qualification process to ensure they meet the necessary requirements.',
    },
    {
      question: 'What types of projects are available on the platform?',
      answer: 'The platform focuses on community development projects up to ₦50 million in value. These include infrastructure projects, social services, and other community initiatives that are categorized based on budget line items and sector-specific requirements.',
    },
    {
      question: 'How does the registration process work?',
      answer: 'The registration process involves digital onboarding, document verification, geolocation tagging, and capacity assessment. CBOs must provide necessary credentials, undergo verification by BPP and LGA authorities, and pay the required registration fees.',
    },
    {
      question: 'What is the role of Procurement Compliance Officers (PCOs)?',
      answer: 'PCOs are responsible for ensuring compliance with procurement regulations, monitoring project implementation, and providing guidance to CBOs. They undergo specialized training and certification to perform their oversight functions effectively.',
    },
    {
      question: 'How are payments processed on the platform?',
      answer: 'Payments are processed through a secure system that includes milestone-based triggers, multi-level approvals, and digital verification. The platform integrates with banking systems for direct disbursements and includes comprehensive financial reporting.',
    },
    {
      question: 'How secure is the platform?',
      answer: 'The platform implements industry-standard security measures including multi-factor authentication, end-to-end encryption, and secure verification for critical transactions. Regular security audits and penetration testing are conducted to maintain system integrity.',
    },
    {
      question: 'How is project progress monitored?',
      answer: 'Projects are monitored through real-time progress reporting, geo-tagged verification of physical implementation, quality assurance checklists, and community feedback integration. PCOs and regulatory agencies have access to comprehensive monitoring dashboards.',
    },
    {
      question: 'What support is available for platform users?',
      answer: 'The platform provides multiple support channels including a web-based ticketing system, email support, phone support for critical issues, in-app support chat, and a comprehensive knowledge base. Training programs and documentation are also available for different user roles.',
    },
    {
      question: 'How does the platform ensure transparency?',
      answer: 'Transparency is maintained through digital verification of transactions, public access to procurement information, transparent selection processes with audit trails, and comprehensive reporting mechanisms. All procurement activities are recorded securely for accountability.',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          Everything You Need to Know About the Platform
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto' }}>
          Find answers to common questions about the Community-Based Procurement Platform, its processes, and how to participate.
        </Typography>
      </Box>

      <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 2, bgcolor: 'background.paper' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ bgcolor: 'background.paper' }}
            >
              <Typography variant="h6" component="h3">
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Still Have Questions?
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto' }}>
          Contact our support team for additional information or assistance with the platform.
        </Typography>
      </Box>
    </Container>
  );
}; 