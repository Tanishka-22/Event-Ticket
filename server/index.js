require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const initScheduler = require('./utils/scheduler');
const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});


app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://sydney-events-ticket.vercel.app'
  ],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

connectDB();

initScheduler();

app.use('/api/events', eventRoutes);
app.use('/api/users', userRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
