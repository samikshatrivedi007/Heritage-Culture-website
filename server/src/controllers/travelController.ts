import { Request, Response } from 'express';
import TravelDestination from '../models/TravelDestination';

// GET /api/travel
export const getAllDestinations = async (_req: Request, res: Response) => {
    try {
        const destinations = await TravelDestination.find();
        res.status(200).json(destinations);
    } catch (err) {
        res.status(500).json({ error: 'Failed to load destinations' });
    }
};

// GET /api/travel/:id
export const getDestinationById = async (req: Request, res: Response) => {
    try {
        const dest = await TravelDestination.findById(req.params.id);
        if (!dest) return res.status(404).json({ error: 'Destination not found' });
        res.status(200).json(dest);
    } catch (err) {
        res.status(500).json({ error: 'Failed to load destination' });
    }
};

// POST /api/travel
export const addDestination = async (req: Request, res: Response) => {
    try {
        const newDest = new TravelDestination(req.body);
        await newDest.save();
        res.status(201).json(newDest);
    } catch (err) {
        res.status(400).json({ error: 'Failed to add destination' });
    }
};

// PUT /api/travel/:id
export const updateDestination = async (req: Request, res: Response) => {
    try {
        const updated = await TravelDestination.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updated) return res.status(404).json({ error: 'Destination not found' });
        res.status(200).json(updated);
    } catch (err) {
        res.status(400).json({ error: 'Failed to update destination' });
    }
};

// DELETE /api/travel/:id
export const deleteDestination = async (req: Request, res: Response) => {
    try {
        const deleted = await TravelDestination.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: 'Destination not found' });
        res.status(200).json({ message: 'Destination deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete destination' });
    }
};
