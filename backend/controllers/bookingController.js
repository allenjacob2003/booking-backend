import Booking from "../models/bookingModel.js";

export const createBooking = async (req, res) => {
    const { name, phone, seatNumber, startTime, endTime } = req.body;

    try {
        const newBooking = new Booking({ name, phone, seatNumber, startTime, endTime });
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.user.id });
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateBooking = async (req, res) => {
    const { id } = req.params;
    const { seatNumber, startTime, endTime } = req.body;

    try {
        const updatedBooking = await Booking.findByIdAndUpdate(id, { seatNumber, startTime, endTime }, { new: true });
        res.status(200).json(updatedBooking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteBooking = async (req, res) => {
    const { id } = req.params;

    try {
        await Booking.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};