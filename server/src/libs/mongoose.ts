import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://samikshatrivedi:Samiksha007@cluster0.mvzm1nn.mongodb.net/?retryWrites=true&w=majority';

let isConnected = false;

export const connectToDatabase = async (): Promise<void> => {
    if (isConnected) {
        return;
    }

    try {
        await mongoose.connect(MONGODB_URI);
        isConnected = true;
        console.log('✅ MongoDB connected successfully');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
        process.exit(1);
    }
};
