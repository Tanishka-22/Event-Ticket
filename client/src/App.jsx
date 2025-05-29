import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CircularProgress, Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import EventGrid from './components/EventGrid';
import EmailModal from './components/EmailModal';
import axios from 'axios';

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    primary: {
      main: '#2196F3',
    },
  },
});

const API_URL = 'https://event-ticket-1.onrender.com';

function App() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []); // Add this useEffect hook to fetch events when component mounts

  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${API_URL}/api/events`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setEvents(response.data);
    } catch (error) {
      setError('Failed to load events. Please try again later.');
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGetTickets = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleEmailSubmit = async (email) => {
    try {
      await axios.post(`${API_URL}/api/users/subscribe`, { email }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      window.location.href = selectedEvent.link;
    } catch (error) {
      console.error('Error subscribing:', error);
    }
    setIsModalOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
          <CircularProgress size={60} />
        </Box>
      ) : error ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
          <p className="text-red-600">{error}</p>
        </Box>
      ) : (
        <EventGrid events={events} onGetTickets={handleGetTickets} />
      )}
      <EmailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleEmailSubmit}
        eventTitle={selectedEvent?.title}
      />
      <Footer/>
    </ThemeProvider> 
  );
}

export default App;
