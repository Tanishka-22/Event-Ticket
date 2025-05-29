import React from 'react';
import { Box, Typography, Stack, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 3,
      px: 2,
      mt: 'auto',
      background: 'linear-gradient(90deg, #1976d2 0%, #21cbf3 100%)',
      textAlign: 'center',
      color: '#fff',
    }}
  >
    <Typography variant="body2" sx={{ mb: 1 }}>
      &copy; {new Date().getFullYear()} Event Ticket System. All rights reserved.
    </Typography>
    <Stack direction="row" spacing={2} justifyContent="center">
      <IconButton
        component={Link}
        href="https://facebook.com/"
        target="_blank"
        rel="noopener"
        aria-label="Facebook"
        sx={{ color: '#fff' }}
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        component={Link}
        href="https://linkedin.com/"
        target="_blank"
        rel="noopener"
        aria-label="LinkedIn"
        sx={{ color: '#fff' }}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        component={Link}
        href="https://instagram.com/"
        target="_blank"
        rel="noopener"
        aria-label="Instagram"
        sx={{ color: '#fff' }}
      >
        <InstagramIcon />
      </IconButton>
    </Stack>
  </Box>
);

export default Footer;