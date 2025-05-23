import * as dotenv from 'dotenv';
dotenv.config();

import express from "express";
import mongoose from 'mongoose';

import * as cors from 'cors';
import * as bodyParser from 'body-parser';

import authRoutes from './routes/authRoutes';
import shoppingRoutes from './routes/shoppingRoutes';
import bookingRoutes from './routes/bookingRoutes';
import { errorHandler } from './middleware/errorHandler';
import blogRoutes from "./routes/blogRoutes";


const app = express();

// Middlewares - first
app.use(cors.default());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/shop', shoppingRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/bookings', bookingRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to Indian Heritage Culture API');
});

// Error middleware - last after routes
app.use(errorHandler);

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://samikshatrivedi007:Samiksha123@cluster0.mvzm1nn.mongodb.net/';
console.log(MONGO_URI);
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
