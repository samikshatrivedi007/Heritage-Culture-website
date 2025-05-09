import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './src/routes/authRoutes';
import travelRoutes from './src/routes/travelRoutes';
import shoppingRoutes from './src/routes/shoppingRoutes';
import bookingRoutes from './src/routes/bookingRoutes';
import { errorHandler } from './src/middleware/errorHandler';
import { connectToDatabase } from './src/libs/mongoose';
// Load environment variables from .env file
dotenv.config();

connectToDatabase();

// Initialize Express app
const app = express();

app.use('/api/shop', shoppingRoutes);
app.use('/api/travel', travelRoutes);
app.use('/api/bookings', bookingRoutes);

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Error middleware
app.use(errorHandler);

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/shop', shoppingRoutes);
app.use('/api/travel', travelRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to Indian Heritage Culture API');
});

// MongoDB connection and server start
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/indian-culture';

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log('✅ MongoDB connected');
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('❌ MongoDB connection error:', err);
    });
