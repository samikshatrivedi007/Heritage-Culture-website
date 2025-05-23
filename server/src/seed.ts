import mongoose from 'mongoose';
import { connectToDatabase } from './libs/mongoose';
import { User } from './models/user';
import  ShoppingItem  from './models/shoppingItem';
import Travel from './models/blog';


async function seed() {
    await connectToDatabase();

    // Clear old data
    await User.deleteMany({});
    await ShoppingItem.deleteMany({});
    await Travel.deleteMany({});

    // Seed Users
    const user = new User({
        name: 'Samiksha',
        email: 'samiksha431@gmail.com',
        password: '123456', // In real app, use hashed passwords
    });
    await user.save();

    // Seed Shopping Items
    const items = [
        { name: 'Madhubani Painting', description: 'Traditional folk art from Bihar', price: 1200, image: 'madhubani.jpg' },
        { name: 'Pashmina Shawl', description: 'Luxury shawl from Kashmir', price: 3500, image: 'pashmina.jpg' },
        { name: 'Terracotta Figurine', description: 'Handcrafted terracotta art from Bengal', price: 800, image: 'terracotta.jpg' }
    ];
    await ShoppingItem.insertMany(items);

    // Seed Travel Destinations
    const travels = [
        { city: 'Jaipur', state: 'Rajasthan', description: 'Pink City known for palaces and forts', image: 'jaipur.jpg' },
        { city: 'Varanasi', state: 'Uttar Pradesh', description: 'Spiritual capital of India on the Ganges', image: 'varanasi.jpg' },
        { city: 'Mysore', state: 'Karnataka', description: 'Cultural hub famous for Mysore Palace', image: 'mysore.jpg' }
    ];
    await Travel.insertMany(travels);

    console.log('✅ Database seeded successfully');
    mongoose.disconnect();
}

seed().catch((err) => {
    console.error('❌ Seeding failed:', err);
    mongoose.disconnect();
});
