require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const restaurantRoutes = require('./routes/restaurants');
const transactionRoutes = require('./routes/transactions');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser()); 

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));


app.use('/api/auth', authRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/transactions', transactionRoutes);

module.exports = app;
