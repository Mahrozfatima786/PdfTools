'use client';

import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
} from '@mui/material';

import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import GavelIcon from '@mui/icons-material/Gavel';
import SecurityIcon from '@mui/icons-material/Security';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

export default function DisclaimerPage() {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box
        sx={{
          py: 8,
          textAlign: 'center',
        }}
      >
        <WarningAmberIcon
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
          Disclaimer
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
          Please read this disclaimer carefully
          before using PDF Tools and its services.
        </Typography>
      </Box>

      {/* Cards */}
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            elevation={4}
            sx={{
              p: 4,
              borderRadius: 4,
              textAlign: 'center',
              height: '100%',
            }}
          >
            <InfoIcon
              color="error"
              sx={{ fontSize: 55, mb: 2 }}
            />

            <Typography
              variant="h6"
                        sx={{fontWeight:"bold"}}

            >
              General Information
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              The information and tools available
              on this website are provided for
              general informational purposes only.
            </Typography>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            elevation={4}
            sx={{
              p: 4,
              borderRadius: 4,
              textAlign: 'center',
              height: '100%',
            }}
          >
            <SecurityIcon
              color="error"
              sx={{ fontSize: 55, mb: 2 }}
            />

            <Typography
              variant="h6"
                  sx={{fontWeight:"bold"}}

            >
              No Warranty
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              We make no warranties regarding
              accuracy, reliability, availability,
              or performance of our services.
            </Typography>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            elevation={4}
            sx={{
              p: 4,
              borderRadius: 4,
              textAlign: 'center',
              height: '100%',
            }}
          >
            <GavelIcon
              color="error"
              sx={{ fontSize: 55, mb: 2 }}
            />

            <Typography
              variant="h6"
              sx={{              fontWeight:"bold"
}}
            >
              User Responsibility
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              Users are responsible for verifying
              files and results generated using our
              PDF tools.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Detailed Disclaimer */}
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
          gutterBottom
          sx={{fontWeight:"bold"}}
        >
          Limitation of Liability
        </Typography>

        <Typography
          color="text.secondary"
          
        >
          PDF Tools shall not be liable for any
          direct, indirect, incidental, special,
          consequential, or punitive damages arising
          from the use of our website or services.
        </Typography>

        <Typography
          color="text.secondary"
        >
          While we strive to provide reliable and
          secure services, we cannot guarantee that
          our website will always be error-free,
          uninterrupted, or completely secure.
        </Typography>

        <Typography
          color="text.secondary"
          
        >
          Users should maintain backups of important
          files before using any online document
          processing service.
        </Typography>
      </Paper>

      {/* External Links */}
      <Paper
        elevation={3}
        sx={{
          mt: 4,
          p: 5,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
          
          gutterBottom
                    sx={{fontWeight:"bold"}}

        >
          External Links Disclaimer
        </Typography>

        <Typography color="text.secondary">
          Our website may contain links to third-party
          websites. We are not responsible for the
          content, privacy practices, or accuracy of
          information on external websites.
        </Typography>
      </Paper>

      {/* Contact */}
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
        <ContactSupportIcon
          color="error"
          sx={{
            fontSize: 65,
            mb: 2,
          }}
        />

        <Typography
          variant="h4"
          gutterBottom
                    sx={{fontWeight:"bold"}}

        >
          Questions?
        </Typography>

        <Typography color="text.secondary">
          If you have any questions regarding this
          Disclaimer, please contact us:
        </Typography>

        <Typography
          sx={{
            mt: 2,
            fontWeight: 600,
          }}
        >
         Pdfconvertor77@gmail.com

        </Typography>

        <Typography>
          +91 9250225346
        </Typography>
      </Paper>
    </Container>
  );
}