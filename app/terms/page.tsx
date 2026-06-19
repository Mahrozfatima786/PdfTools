'use client';

import {
  Container,
  Paper,
  Typography,
  Box,
} from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import GavelIcon from '@mui/icons-material/Gavel';
import SecurityIcon from '@mui/icons-material/Security';
import CopyrightIcon from '@mui/icons-material/Copyright';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export default function TermsPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f8fafc',
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={6}
          sx={{
            p: 5,
            borderRadius: 4,
          }}
        >
          <Box
            sx={{
              textAlign: 'center',
              mb: 5,
            }}
          >
            <GavelIcon
              color="error"
              sx={{
                fontSize: 70,
                mb: 2,
              }}
            />

            <Typography
              variant="h3"
              sx={{
                              fontWeight:"bold"

              }}
              gutterBottom
            >
              Terms & Conditions
            </Typography>

            <Typography color="text.secondary">
              Last Updated: June 2026
            </Typography>
          </Box>

          <Box sx={{mb:4}} >
            <Typography
              variant="h5"
                   sx={{fontWeight:"bold"}}
              gutterBottom
            >
              <DescriptionIcon
                sx={{
                  mr: 1,
                  verticalAlign: 'middle',
                }}
              />
              Acceptance of Terms
            </Typography>

            <Typography color="text.secondary">
              By accessing and using PDF Tools, you
              agree to comply with and be bound by
              these Terms and Conditions. If you do
              not agree with any part of these terms,
              please discontinue use of our website.
            </Typography>
          </Box>

          <Box  sx={{mb:4}} >
            <Typography
              variant="h5"
               sx={{fontWeight:"bold"}}
              gutterBottom
            >
              <SecurityIcon
                sx={{
                  mr: 1,
                  verticalAlign: 'middle',
                }}
              />
              Use of Services
            </Typography>

            <Typography color="text.secondary">
              Our tools are provided for personal and
              business use. You agree not to:
            </Typography>

            <ul>
              <li>
                Upload unlawful or harmful content.
              </li>
              <li>
                Attempt to disrupt or damage our
                services.
              </li>
              <li>
                Use automated systems to overload
                our servers.
              </li>
              <li>
                Violate any applicable laws or
                regulations.
              </li>
            </ul>
          </Box>

          <Box  sx={{mb:4}} >
            <Typography
              variant="h5"
             sx={{fontWeight:"bold"}}
              gutterBottom
            >
              <CopyrightIcon
                sx={{
                  mr: 1,
                  verticalAlign: 'middle',
                }}
              />
              Intellectual Property
            </Typography>

            <Typography color="text.secondary">
              All content, branding, logos, designs,
              and software used on this website are
              owned by PDF Tools and protected by
              intellectual property laws.
            </Typography>
          </Box>

          <Box sx={{mb:4}} >
            <Typography
              variant="h5"
              sx={{fontWeight:"bold"}}
              gutterBottom
            >
              <WarningAmberIcon
                sx={{
                  mr: 1,
                  verticalAlign: 'middle',
                }}
              />
              Limitation of Liability
            </Typography>

            <Typography color="text.secondary">
              PDF Tools shall not be liable for any
              direct, indirect, incidental, or
              consequential damages resulting from
              the use or inability to use our
              services. Users are responsible for
              maintaining backups of important files.
            </Typography>
          </Box>

          <Box sx={{mb:4}}>
            <Typography
              variant="h5"
              sx={{fontWeight:"bold"}}
              gutterBottom
            >
              Account & Security
            </Typography>

            <Typography color="text.secondary">
              If user accounts are introduced in the
              future, users will be responsible for
              maintaining the confidentiality of
              their account credentials and all
              activities occurring under their
              account.
            </Typography>
          </Box>

          <Box  sx={{mb:4}} >
            <Typography
              variant="h5"
               sx={{fontWeight:"bold"}}
              gutterBottom
            >
              Service Availability
            </Typography>

            <Typography color="text.secondary">
              We reserve the right to modify,
              suspend, or discontinue any service at
              any time without prior notice.
            </Typography>
          </Box>

          <Box  sx={{mb:4}} >
            <Typography
              variant="h5"
             sx={{fontWeight:"bold"}}
              gutterBottom
            >
              Changes to Terms
            </Typography>

            <Typography color="text.secondary">
              We may update these Terms &
              Conditions from time to time. Any
              changes will be posted on this page
              with an updated revision date.
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 5,
              p: 3,
              bgcolor: '#fef2f2',
              borderRadius: 3,
              border: '1px solid #fecaca',
            }}
          >
            <Typography
              variant="h6"
              color="error"
              gutterBottom
            >
              Contact Information
            </Typography>

            <Typography>
              Email: pdfconvertor@gmail.com
            </Typography>

            <Typography>
              Phone: +91 9250225346
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}