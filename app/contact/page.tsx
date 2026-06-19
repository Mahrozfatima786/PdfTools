'use client';

import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
} from '@mui/material';

import ContactMailIcon from '@mui/icons-material/ContactMail';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function ContactPage() {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box
        sx={{
          py: 8,
          textAlign: 'center',
        }}
      >
        <ContactMailIcon
          color="error"
          sx={{
            fontSize: 90,
            mb: 2,
          }}
        />

        <Typography
          variant="h3"
          fontWeight="bold"
        >
          Contact Us
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            mt: 2,
            maxWidth: 700,
            mx: 'auto',
            fontSize: 18,
          }}
        >
          Need help with our PDF tools? Have a
          suggestion or business inquiry? Our team
          is ready to assist you.
        </Typography>
      </Box>

      {/* Contact Cards */}
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            elevation={4}
            sx={{
              p: 4,
              textAlign: 'center',
              borderRadius: 4,
              height: '100%',
            }}
          >
            <EmailIcon
              color="error"
              sx={{
                fontSize: 55,
                mb: 2,
              }}
            />

            <Typography
              variant="h6"
              fontWeight="bold"
            >
              Email Support
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              Pdfconvertor@gmail.com
            </Typography>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            elevation={4}
            sx={{
              p: 4,
              textAlign: 'center',
              borderRadius: 4,
              height: '100%',
            }}
          >
            <PhoneIcon
              color="error"
              sx={{
                fontSize: 55,
                mb: 2,
              }}
            />

            <Typography
              variant="h6"
              fontWeight="bold"
            >
              Phone Support
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              +91 9250225346
            </Typography>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            elevation={4}
            sx={{
              p: 4,
              textAlign: 'center',
              borderRadius: 4,
              height: '100%',
            }}
          >
            <AccessTimeIcon
              color="error"
              sx={{
                fontSize: 55,
                mb: 2,
              }}
            />

            <Typography
              variant="h6"
              fontWeight="bold"
            >
              Support Hours
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              Monday - Saturday
              <br />
              9:00 AM - 6:00 PM
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Support Section */}
      <Paper
        elevation={3}
        sx={{
          mt: 8,
          mb: 8,
          p: 5,
          borderRadius: 4,
          textAlign: 'center',
        }}
      >
        <SupportAgentIcon
          color="error"
          sx={{
            fontSize: 70,
            mb: 2,
          }}
        />

        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
        >
          We're Here To Help
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            maxWidth: 700,
            mx: 'auto',
            fontSize: 16,
          }}
        >
          If you experience any issues while using
          our PDF tools, please contact us via email
          or phone. We aim to respond to all support
          requests within 24-48 hours.
        </Typography>
      </Paper>
    </Container>
  );
}