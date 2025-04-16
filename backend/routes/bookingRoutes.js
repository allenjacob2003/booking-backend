import express from 'express';
import { createBooking, getBookings, updateBooking, deleteBooking } from '../controllers/bookingController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Route to create a new booking
router.post('/', protect, createBooking);

// Route to get all bookings for a user
router.get('/', protect, getBookings);

// Route to update a specific booking
router.put('/:id', protect, updateBooking);

// Route to delete a specific booking
router.delete('/:id', protect, deleteBooking);

export default router;