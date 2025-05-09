import { Request, Response } from 'express';
import { Booking } from '../models/booking';

export const createBooking = async (req: Request, res: Response) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).json({ message: 'Booking successful', booking });
    } catch (error) {
        res.status(400).json({ error: 'Booking failed', details: error });
    }
};

export const getAllBookings = async (_req: Request, res: Response) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Could not retrieve bookings' });
    }
};
