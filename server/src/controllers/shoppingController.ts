import { Request, Response } from 'express';
import ShoppingItem from '../models/shoppingItem';

// Get all items
export const getAllItems = async (req: Request, res: Response) => {
    try {
        const items = await ShoppingItem.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch items' });
    }
};

// Get single item by ID
export const getItemById = async (req: Request, res: Response) => {
    try {
        const item = await ShoppingItem.findById(req.params.id);
        if (!item){
            res.status(404).json({ error: 'Item not found' })
            return
        };
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch item' });
    }
};

// Add new item
export const addItem = async (req: Request, res: Response) => {
    try {
        const newItem = new ShoppingItem(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ error: 'Failed to add item' });
    }
};

// Update item
export const updateItem = async (req: Request, res: Response) => {
    try {
        const updatedItem = await ShoppingItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem){
            res.status(404).json({ error: 'Item not found' })
            return
        };
        {
            res.status(200).json(updatedItem);
        }
    } catch (error) {
        res.status(400).json({ error: 'Failed to update item' });
    }
};

// Delete item
export const deleteItem = async (req: Request, res: Response) => {
    try {
        const deletedItem = await ShoppingItem.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            res.status(404).json({ error: 'Item not found' })
        return
        };
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete item' });
    }
};
