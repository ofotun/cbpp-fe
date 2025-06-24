import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  useTheme,
  Divider,
} from '@mui/material';

export const TermsOfServicePage: React.FC = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Terms of Service
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary" sx={{ mb: 6 }}>
        Community-Based Procurement Platform
      </Typography>

      <Paper elevation={2} sx={{ p: { xs: 3, md: 6 } }}>
        <Typography variant="body1" paragraph>
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
          1. Acceptance of Terms
        </Typography>
        <Typography variant="body1" paragraph>
          By accessing and using the Community-Based Procurement Platform (CBPP), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
          2. Description of Service
        </Typography>
        <Typography variant="body1" paragraph>
          The CBPP is a digital platform designed to facilitate community-based procurement processes in Nigeria. The platform enables community-based organizations (CBOs), contractors, and procurement compliance officers (PCOs) to participate in government procurement processes up to ₦50 million in value.
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
          3. User Registration and Eligibility
        </Typography>
        <Typography variant="body1" paragraph>
          To use certain features of the platform, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
        </Typography>
        <Typography variant="body1" paragraph>
          You must be at least 18 years old to register for an account. By registering, you represent and warrant that you meet this age requirement.
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
          4. User Responsibilities
        </Typography>
        <Typography variant="body1" paragraph>
          You are responsible for:
        </Typography>
        <Box component="ul" sx={{ pl: 4, mb: 2 }}>
          <Typography component="li" variant="body1" paragraph>
            Maintaining the confidentiality of your account credentials
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            All activities that occur under your account
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            Providing accurate and truthful information
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            Complying with all applicable laws and regulations
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            Not using the platform for any illegal or unauthorized purpose
          </Typography>
        </Box>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
          5. Procurement Process Compliance
        </Typography>
        <Typography variant="body1" paragraph>
          Users participating in procurement processes must comply with:
        </Typography>
        <Box component="ul" sx={{ pl: 4, mb: 2 }}>
          <Typography component="li" variant="body1" paragraph>
            Nigerian Public Procurement Act
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            Bureau of Public Procurement (BPP) guidelines
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            Platform-specific rules and procedures
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            Anti-corruption and transparency requirements
          </Typography>
        </Box>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
          6. Data and Privacy
        </Typography>
        <Typography variant="body1" paragraph>
          Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the platform, to understand our practices regarding the collection and use of your personal information.
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
          7. Intellectual Property
        </Typography>
        <Typography variant="body1" paragraph>
          The platform and its original content, features, and functionality are owned by the Bureau of Public Procurement and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
          8. Disclaimers
        </Typography>
        <Typography variant="body1" paragraph>
          The platform is provided "as is" without warranties of any kind. We do not guarantee that the platform will be uninterrupted, secure, or error-free.
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
          9. Limitation of Liability
        </Typography>
        <Typography variant="body1" paragraph>
          In no event shall the Bureau of Public Procurement be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the platform.
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
          10. Termination
        </Typography>
        <Typography variant="body1" paragraph>
          We may terminate or suspend your account and access to the platform immediately, without prior notice, for any reason, including breach of these Terms of Service.
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
          11. Changes to Terms
        </Typography>
        <Typography variant="body1" paragraph>
          We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on the platform.
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
          12. Governing Law
        </Typography>
        <Typography variant="body1" paragraph>
          These terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
          13. Contact Information
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions about these Terms of Service, please contact us at:
        </Typography>
        <Box sx={{ pl: 4, mb: 4 }}>
          <Typography variant="body1" paragraph>
            Bureau of Public Procurement<br />
            No. 11 Suleiman Barau Crescent<br />
            Presidential Villa, Abuja<br />
            Email: ccspsupport@bpp.gov.ng<br />
            Tel: 08171217369, 08158162418
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}; 