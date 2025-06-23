import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  useTheme,
  Divider,
} from '@mui/material';

export const PrivacyPolicyPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Privacy Policy
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary" sx={{ mb: 6 }}>
        Community-Based Procurement Platform
      </Typography>

      <Paper elevation={2} sx={{ p: { xs: 3, md: 6 } }}>
        <Typography variant="body1" paragraph>
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </Typography>

        <Typography variant="body1" paragraph>
          The Bureau of Public Procurement (BPP) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Community-Based Procurement Platform (CBPP).
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
          1. Information We Collect
        </Typography>
        
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 3, mb: 1 }}>
          1.1 Personal Information
        </Typography>
        <Typography variant="body1" paragraph>
          We collect personal information that you provide directly to us, including:
        </Typography>
        <Box component="ul" sx={{ pl: 4, mb: 2 }}>
          <Typography component="li" variant="body1" paragraph>
            Name, email address, and contact information
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            Bank Verification Number (BVN) and financial information
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            Business registration details and tax information
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            Geographic location and address information
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            Identity verification documents
          </Typography>
        </Box>

        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 3, mb: 1 }}>
          1.2 Automatically Collected Information
        </Typography>
        <Typography variant="body1" paragraph>
          We automatically collect certain information when you use our platform:
        </Typography>
        <Box component="ul" sx={{ pl: 4, mb: 2 }}>
          <Typography component="li" variant="body1" paragraph>
            Device information and IP addresses
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            Browser type and version
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            Usage patterns and platform interactions
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            Cookies and similar tracking technologies
          </Typography>
        </Box>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
          2. How We Use Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          We use the collected information for the following purposes:
        </Typography>
        <Box component="ul" sx={{ pl: 4, mb: 2 }}>
          <Typography component="li" variant="body1" paragraph>
            To provide and maintain the CBPP platform
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            To verify your identity and eligibility for procurement processes
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            To process and manage procurement applications and contracts
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            To communicate with you about platform updates and services
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            To ensure compliance with legal and regulatory requirements
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            To improve our services and user experience
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            To prevent fraud and ensure platform security
          </Typography>
        </Box>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
          3. Information Sharing and Disclosure
        </Typography>
        <Typography variant="body1" paragraph>
          We may share your information in the following circumstances:
        </Typography>
        <Box component="ul" sx={{ pl: 4, mb: 2 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Government Agencies:</strong> With relevant government bodies for regulatory compliance and oversight
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Service Providers:</strong> With trusted third-party service providers who assist in platform operations
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Public Records:</strong> Certain procurement information may be publicly accessible as required by transparency laws
          </Typography>
        </Box>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
          4. Data Security
        </Typography>
        <Typography variant="body1" paragraph>
          We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
        </Typography>
        <Box component="ul" sx={{ pl: 4, mb: 2 }}>
          <Typography component="li" variant="body1" paragraph>
            Encryption of sensitive data in transit and at rest
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            Regular security assessments and updates
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            Access controls and authentication mechanisms
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            Secure data centers and infrastructure
          </Typography>
        </Box>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
          5. Data Retention
        </Typography>
        <Typography variant="body1" paragraph>
          We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Procurement records are typically retained for a minimum of 7 years as required by Nigerian law.
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
          6. Your Rights and Choices
        </Typography>
        <Typography variant="body1" paragraph>
          You have the following rights regarding your personal information:
        </Typography>
        <Box component="ul" sx={{ pl: 4, mb: 2 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Access:</strong> Request access to your personal information
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Correction:</strong> Request correction of inaccurate information
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Portability:</strong> Request a copy of your data in a portable format
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Objection:</strong> Object to certain processing activities
          </Typography>
        </Box>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
          7. Cookies and Tracking Technologies
        </Typography>
        <Typography variant="body1" paragraph>
          We use cookies and similar technologies to enhance your experience on our platform. You can control cookie settings through your browser preferences, though disabling certain cookies may affect platform functionality.
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
          8. Third-Party Links
        </Typography>
        <Typography variant="body1" paragraph>
          Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
          9. Children's Privacy
        </Typography>
        <Typography variant="body1" paragraph>
          Our platform is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you believe we have collected such information, please contact us immediately.
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
          10. International Data Transfers
        </Typography>
        <Typography variant="body1" paragraph>
          Your information may be transferred to and processed in countries other than Nigeria. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
          11. Changes to This Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our platform and updating the "Last updated" date.
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
          12. Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
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

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
          13. Data Protection Officer
        </Typography>
        <Typography variant="body1" paragraph>
          For specific privacy concerns or to exercise your data protection rights, you may contact our Data Protection Officer at:
        </Typography>
        <Box sx={{ pl: 4, mb: 4 }}>
          <Typography variant="body1" paragraph>
            Email: dpo@bpp.gov.ng<br />
            Subject: CBPP Privacy Inquiry
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}; 