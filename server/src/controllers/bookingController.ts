import { Request, Response } from 'express';
import { Booking } from '../models/booking';
import ShoppingItem from "../models/shoppingItem";

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

export const getBookingById = async (req: Request, res: Response) => {
    try {
        const getBooking = await Booking.findById(req.params.id);
        if (!getBooking){
            res.status(404).json({ error: 'Booking not found' })
            return
        }
        res.status(200).json(getBooking);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch booking' });
    }
};

export const updateBooking = async (req: Request, res: Response) => {
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBooking){
            res.status(404).json({ error: 'Item not found' })
            return
        };
        {
            res.status(200).json(updatedBooking);
        }
    } catch (error) {
        res.status(400).json({ error: 'Failed to update item' });
    }
};

export const deleteBooking = async (req: Request, res: Response) => {
    try {
        const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
        if (!deletedBooking) {
            res.status(404).json({ error: 'Item not found' })
            return
        };
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete item' });
    }
};
