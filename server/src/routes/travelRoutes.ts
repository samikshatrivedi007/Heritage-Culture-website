import express from 'express';
import {
    getAllDestinations,
    getDestinationById,
    addDestination,
    updateDestination,
    deleteDestination,
} from '../controllers/travelController';

const router = express.Router();

// List all destinations
router.get('/', getAllDestinations);

// Get one destination
router.get('/:id', getDestinationById);

// Add a new destination
router.post('/', addDestination);

// Update an existing destination
router.put('/:id', updateDestination);

// Delete a destination
router.delete('/:id', deleteDestination);

export default router;
