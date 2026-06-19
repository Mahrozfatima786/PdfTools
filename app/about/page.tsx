'use client';

import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
} from '@mui/material';

import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import DevicesIcon from '@mui/icons-material/Devices';

export default function AboutPage() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: 8,
          textAlign: 'center',
        }}
      >
        <PictureAsPdfIcon
          color="error"
          sx={{
            fontSize: 90,
            mb: 2,
          }}
        />

        <Typography
          variant="h3"
         sx={{ fontWeight:"bold"}}
        >
          About PDF Tools
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            mt: 2,
            maxWidth: 700,
            mx: 'auto',
          }}
        >
          PDF Tools provides free online utilities
          to Convert, Merge, Split, Rotate and
          Compress PDF files quickly and securely.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              textAlign: 'center',
              borderRadius: 3,
            }}
          >
            <SpeedIcon
              color="error"
              sx={{
                fontSize: 55,
                mb: 2,
              }}
            />

            <Typography
              variant="h6"
              sx={{ fontWeight:"bold"}}
            >
              Fast Processing
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              Convert and manage PDF files within
              seconds.
            </Typography>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              textAlign: 'center',
              borderRadius: 3,
            }}
          >
            <SecurityIcon
              color="error"
              sx={{
                fontSize: 55,
                mb: 2,
              }}
            />

            <Typography
              variant="h6"
              sx={{ fontWeight:"bold"}}
            >
              Secure Files
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              Your files remain private and are
              processed securely.
            </Typography>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              textAlign: 'center',
              borderRadius: 3,
            }}
          >
            <DevicesIcon
              color="error"
              sx={{
                fontSize: 55,
                mb: 2,
              }}
            />

            <Typography
              variant="h6"
           sx={{ fontWeight:"bold"}}
            >
              Responsive Design
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              Works perfectly on Desktop, Tablet
              and Mobile devices.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box
        sx={{
          mt: 8,
          mb: 8,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight:"bold"}}
          gutterBottom
        >
          Our Mission
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            maxWidth: 800,
            mx: 'auto',
          }}
        >
          Our mission is to make PDF tools
          accessible to everyone through a simple,
          fast and user-friendly platform.
        </Typography>
      </Box>
    </Container>
  );
}