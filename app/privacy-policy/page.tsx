'use client';

import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
} from '@mui/material';

import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import SecurityIcon from '@mui/icons-material/Security';
import CookieIcon from '@mui/icons-material/Cookie';
import StorageIcon from '@mui/icons-material/Storage';
import GppGoodIcon from '@mui/icons-material/GppGood';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export default function PrivacyPolicyPage() {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box
        sx={{
          py: 8,
          textAlign: 'center',
        }}
      >
        <PrivacyTipIcon
          color="error"
          sx={{
            fontSize: 90,
            mb: 2,
          }}
        />

        <Typography
          variant="h3"
                  sx={{fontWeight:"bold"}}

        >
          Privacy Policy
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            mt: 2,
            maxWidth: 800,
            mx: 'auto',
            fontSize: 18,
          }}
        >
          Your privacy is important to us. This
          Privacy Policy explains how PDF Tools
          collects, uses, and protects information
          when you use our website and services.
        </Typography>
      </Box>

      {/* Policy Cards */}
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            elevation={4}
            sx={{
              p: 4,
              borderRadius: 4,
              height: '100%',
            }}
          >
            <SecurityIcon
              color="error"
              sx={{
                fontSize: 50,
                mb: 2,
              }}
            />

            <Typography
              variant="h5"
                     sx={{fontWeight:"bold"}}

              gutterBottom
            >
              File Security
            </Typography>

            <Typography color="text.secondary">
              Uploaded files are processed only for
              the requested PDF operation. We do not
              permanently store your files on our
              servers.
            </Typography>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            elevation={4}
            sx={{
              p: 4,
              borderRadius: 4,
              height: '100%',
            }}
          >
            <StorageIcon
              color="error"
              sx={{
                fontSize: 50,
                mb: 2,
              }}
            />

            <Typography
              variant="h5"
                  sx={{fontWeight:"bold"}}

              gutterBottom
            >
              Information Collection
            </Typography>

            <Typography color="text.secondary">
              We may collect basic usage statistics,
              browser information, and analytics data
              to improve our services and user
              experience.
            </Typography>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            elevation={4}
            sx={{
              p: 4,
              borderRadius: 4,
              height: '100%',
            }}
          >
            <CookieIcon
              color="error"
              sx={{
                fontSize: 50,
                mb: 2,
              }}
            />

            <Typography
              variant="h5"
    
              gutterBottom
                        sx={{fontWeight:"bold"}}

            >
              Cookies & Analytics
            </Typography>

            <Typography color="text.secondary">
              Our website may use cookies and
              analytics services to understand user
              behavior and improve website
              performance.
            </Typography>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            elevation={4}
            sx={{
              p: 4,
              borderRadius: 4,
              height: '100%',
            }}
          >
            <GppGoodIcon
              color="error"
              sx={{
                fontSize: 50,
                mb: 2,
              }}
            />

            <Typography
              variant="h5"
                      sx={{fontWeight:"bold"}}

              gutterBottom
            >
              Third-Party Services
            </Typography>

            <Typography color="text.secondary">
              We may use trusted third-party services
              such as Google Analytics and Google
              AdSense. These services may collect
              information according to their own
              privacy policies.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Detailed Policy */}
      <Paper
        elevation={3}
        sx={{
          mt: 6,
          p: 5,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
                   sx={{fontWeight:"bold"}}

          gutterBottom
        >
          Your Rights
        </Typography>

        <Typography
          color="text.secondary"
         
        >
          You have the right to know how your
          information is used and to contact us with
          any privacy-related concerns.
        </Typography>

        <Typography
          color="text.secondary"
          
        >
          We do not sell, trade, or rent personal
          information to third parties.
        </Typography>

        <Typography
          color="text.secondary"
          
        >
          By continuing to use our website, you
          agree to the practices described in this
          Privacy Policy.
        </Typography>
      </Paper>

      {/* Contact Section */}
      <Paper
        elevation={3}
        sx={{
          mt: 6,
          mb: 8,
          p: 5,
          borderRadius: 4,
          textAlign: 'center',
        }}
      >
        <ContactMailIcon
          color="error"
          sx={{
            fontSize: 60,
            mb: 2,
          }}
        />

        <Typography
          variant="h4"
                 sx={{fontWeight:"bold"}}

          gutterBottom
        >
          Contact Us
        </Typography>

        <Typography color="text.secondary">
          If you have questions regarding this
          Privacy Policy, please contact us at:
        </Typography>

        <Typography
          sx={{
            mt: 2,
            fontWeight: 600,
          }}
        >
          Pdfconvertor@gmail.com
        </Typography>

        <Typography>
          +91 9250225346
        </Typography>
      </Paper>
    </Container>
  );
}