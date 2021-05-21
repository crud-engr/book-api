const express = require('express');

const connectDB = require('./config/db');
const indexRoute = require('./routes/indexRoute');
const bookRoute = require('./routes/bookRoutes');
require('dotenv').config();

// Connect to database
connectDB();

// Start express app
const app = express();

app.use(express.json());

// Main routes
app.use('/api/v1/', indexRoute);
app.use('/api/v1/books', bookRoute);

// Set PORT
const port = process.env.PORT || 3000;

// Listen to requests
app.listen(port, () => console.log(`Server started on port ${port}`));
