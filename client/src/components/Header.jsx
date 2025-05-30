import React, { useState } from 'react';
import {
  AppBar,
  Typography,
  Container,
  Box,
  InputBase,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Stack,
  Link,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Header = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const [helpOpen, setHelpOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [email, setEmail] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(search);
  };

  const handleHelpOpen = () => setHelpOpen(true);
  const handleHelpClose = () => setHelpOpen(false);

  const handleSendQuery = () => {
    // You can add your logic to send the query here
    setHelpOpen(false);
    setQuery('');
    setEmail('');
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: 'white', // previous background color
        boxShadow: '0 2px 8px 0 rgba(33, 150, 243, 0.10)',
        mb: 4,
      }}
    >
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          {/* Left: Title */}
          <Typography
            variant="h4"
            color="#1976d2"
            sx={{ fontWeight: 700, mr: 4, letterSpacing: 1 }}
          >
            Sydney Events
          </Typography>

          {/* Center: Search Bar */}
          <Box
            component="form"
            onSubmit={handleSearch}
            sx={{
              flex: 1,
              mx: 2,
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #1976d2',
              borderRadius: 5,
              maxWidth: 500,
              minWidth: 200,
            }}
          >
            <InputBase
              placeholder="Search events by name…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ ml: 2, flex: 1, color: '#1976d2' }}
              inputProps={{ 'aria-label': 'search events' }}
            />
            <IconButton
              type="submit"
              sx={{ p: 1, mr: 1 }}
              aria-label="search"
              style={{ color: '#1976d2' }}
            >
              <SearchIcon />
            </IconButton>
          </Box>

          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              startIcon={<HelpOutlineIcon />}
              sx={{
                fontWeight: 500,
                textTransform: 'none',
                color: '#1976d2',
                borderRadius: 2,
                '&:hover': { background: 'rgba(33,150,243,0.18)' },
              }}
              onClick={handleHelpOpen}
            >
              Help Center
            </Button>
          </Stack>
        </Box>
      </Container>

     
      <Dialog open={helpOpen} onClose={handleHelpClose}>
        <DialogTitle>Help Center</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              label="Your Query"
              multiline
              minRows={2}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              fullWidth
            />
            <TextField
              label="Your Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleHelpClose}>Cancel</Button>
          <Button
            onClick={handleSendQuery}
            variant="contained"
            disabled={!query || !email}
          >
            Send Query
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
};

export default Header;