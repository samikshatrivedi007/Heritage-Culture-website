import express from 'express';
import {
    getAllBlog,
    getBlogById,
    addBlog,
    updateBlog,
    deleteBlog} from '../controllers/blogController';

const router = express.Router();

// List all destinations
router.get('/', getAllBlog);

// Get one destination
router.get('/:id', getBlogById);

// Add a new destination
router.post('/', addBlog);

// Update an existing destination
router.put('/:id', updateBlog);

// Delete a destination
router.delete('/:id', deleteBlog);

export default router;
