import express from 'express';
import {
    createBooking,
    deleteBooking,
    getAllBookings,
    getBookingById,
    updateBooking
} from '../controllers/bookingController';

const router = express.Router();

router.post('/', createBooking);
router.get('/', getAllBookings);
router.get('/:id', getBookingById);
router.delete('/:id', deleteBooking);
router.put('/:id', updateBooking);

export default router;
