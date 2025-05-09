import express from 'express';
import {
    getAllItems,
    getItemById,
    addItem,
    updateItem,
    deleteItem,
} from '../controllers/shoppingController';

const router = express.Router();

router.get('/', getAllItems);
router.get('/:id', getItemById);
router.post('/', addItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;
