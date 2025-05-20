import express from "express";
import mongoose from 'mongoose';


import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';



import authRoutes from './src/routes/authRoutes';
import travelRoutes from './src/routes/travelRoutes';
import shoppingRoutes from './src/routes/shoppingRoutes';
import bookingRoutes from './src/routes/bookingRoutes';
import { errorHandler } from './src/middleware/errorHandler';
// import { connectToDatabase } from './src/libs/mongoose';  // If you want to use this, only use it here.

dotenv.config();

const app = express();

// Middlewares - first
app.use(cors.default());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/shop', shoppingRoutes);
app.use('/api/travel', travelRoutes);
app.use('/api/bookings', bookingRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to Indian Heritage Culture API');
});

// Error middleware - last after routes
app.use(errorHandler);

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/indian-culture';

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('✅ MongoDB connected');
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('❌ MongoDB connection error:', err);
    });
