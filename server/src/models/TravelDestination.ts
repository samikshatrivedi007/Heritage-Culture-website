import mongoose from 'mongoose';

export interface ITravelDestination extends mongoose.Document {
    name: string;
    state: string;
    description: string;
    imageUrl: string;
    createdAt: Date;
}

const travelDestinationSchema = new mongoose.Schema<ITravelDestination>({
    name: { type: String, required: true },
    state: { type: String, required: true },
    description: { type: String, default: '' },
    imageUrl: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now },
});

const TravelDestination = mongoose.model<ITravelDestination>(
    'TravelDestination',
    travelDestinationSchema
);

export default TravelDestination;
