import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';

const CARD_WIDTH = 340;
const CARD_HEIGHT = 440;

const EventCard = ({ event, onGetTickets }) => {
  return (
    <Card
      sx={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 4,
        boxShadow: '0 4px 24px 0 rgba(33, 150, 243, 0.10)',
        background: '#fff',
        transition: '0.3s',
        '&:hover': {
          transform: 'translateY(-6px) scale(1.03)',
          boxShadow: '0 8px 32px 0 rgba(33, 150, 243, 0.18)'
        }
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={event.image || 'https://via.placeholder.com/400x200'}
        alt={event.title}
        sx={{ borderTopLeftRadius: 16, borderTopRightRadius: 16, objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', px: 2 }}>
        <Typography gutterBottom variant="h6" component="h2" sx={{ fontWeight: 700, color: '#1976d2' }}>
          {event.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {event.date}
        </Typography>
        <Typography variant="body2" color="#555" sx={{ mb: 2, flexGrow: 1 }}>
          {event.description?.slice(0, 80)}...
        </Typography>
        <Box sx={{ mt: 'auto' }}>
          <Button 
            variant="contained" 
            fullWidth 
            onClick={() => onGetTickets(event)}
            sx={{ 
              mt: 2,
              background: 'linear-gradient(90deg, #1976d2 0%, #21cbf3 100%)',
              color: '#fff',
              fontWeight: 600,
              borderRadius: 2,
              boxShadow: '0 2px 8px 0 rgba(33, 150, 243, 0.15)',
              '&:hover': {
                background: 'linear-gradient(90deg, #1565c0 0%, #00bcd4 100%)'
              }
            }}
          >
            Get Tickets
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EventCard;