const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Import routes
const authRoutes = require('./routes/auth');
const compensationRoutes = require('./routes/compensation');
const applicationRoutes = require('./routes/application');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/compensation', compensationRoutes);
app.use('/api/application', applicationRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/intern-management', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.error(err));
