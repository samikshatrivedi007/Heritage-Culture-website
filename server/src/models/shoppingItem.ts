import mongoose from 'mongoose';

const shoppingItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    id:{
        type : String,
    },
    description: String,
    price: {
        type: Number,
        required: true,
    },
    imageUrl: String,
    category: {
        type: String,
        enum: ['Handicraft', 'Textile', 'Jewelry', 'Decor', 'Other'],
        default: 'Other',
    },
    inStock: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const ShoppingItem = mongoose.model('ShoppingItem', shoppingItemSchema);
export default ShoppingItem;
