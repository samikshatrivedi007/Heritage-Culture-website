import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    destination: { type: String, required: true },
    date: { type: Date, required: true },
    numberOfPeople: { type: Number, required: true },
    message: { type: String },
}, {
    timestamps: true,
});

export const Booking = mongoose.model('Booking', bookingSchema);
