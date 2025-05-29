import { Grid, Container } from '@mui/material';
import EventCard from './EventCard';

const EventGrid = ({ events, onGetTickets }) => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Grid container spacing={4} justifyContent="center">
        {events.map((event) => (
          <Grid
            key={event._id || event.title}
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <EventCard event={event} onGetTickets={onGetTickets} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default EventGrid;