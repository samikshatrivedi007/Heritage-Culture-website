import { Request, Response } from 'express';
import Blog from '../models/blog';

// GET /api/travel
export const getAllBlog = async (_req: Request, res: Response) => {
    try {
        const destinations = await Blog.find();
        res.status(200).json(destinations);
    } catch (err) {
        res.status(500).json({ error: 'Failed to load blog' });
    }
};

// GET /api/travel/:id
export const getBlogById = async (req: Request, res: Response) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog)
            {
          res.status(404).json({error: 'Blog not found'})
        return;
        };
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json({ error: 'Failed to load Blog' });
    }
};

// POST /api/travel
export const addBlog = async (req: Request, res: Response) => {
    try {
        const newBlog = new Blog(req.body);
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (err) {
        res.status(400).json({ error: 'Failed to add Blog' });
    }
};

// PUT /api/travel/:id
export const updateBlog = async (req: Request, res: Response) => {
    try {
        const updated = await Blog.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updated){

       res.status(404).json({ error: 'Blog not found' });
       return
        };
        res.status(200).json(updated)
    } catch (err) {
        res.status(400).json({ error: 'Failed to update Blog' });
    }
};

// DELETE /api/travel/:id
export const deleteBlog = async (req: Request, res: Response) => {
    try {
        const deleted = await Blog.findByIdAndDelete(req.params.id);
        if (!deleted){
            res.status(404).json({ error: 'Blog not found' });
            return
       };
         res.status(200).json({ message: 'Blog deleted' })
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete Blog' });
    }
};
