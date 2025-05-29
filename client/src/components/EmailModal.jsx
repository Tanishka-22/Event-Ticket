import { useState } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';

const EmailModal = ({ isOpen, onClose, onSubmit, eventTitle }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email);
    setEmail('');
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="email-modal-title"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
      }}>
        <Typography id="email-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
          Get Tickets for {eventTitle}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)'
            }}
          >
            Continue to Tickets
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default EmailModal;