import mongoose, {Schema} from 'mongoose';

    export interface IBlog extends mongoose.Document {
    title: string;
    slug: string;
    content: string;
    coverImage: string;
    author: mongoose.Schema.Types.ObjectId;
    tags: string[];
    category: string;
    views: number;
    likes: number;
    comments: mongoose.Schema.Types.ObjectId[];
    published: boolean;
    publishedAt: Date;
    createdAt: Date;
    updatedAt: Date;
}

const BlogSchema: Schema = new Schema<IBlog>(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 150,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            index: true,
        },
        content: {
            type: String,
            required: true,
        },
        coverImage: {
            type: String,
            default: '',
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        tags: [
            {
                type: String,
                trim: true,
                lowercase: true,
            },
        ],
        category: {
            type: String,
            trim: true,
        },
        views: {
            type: Number,
            default: 0,
        },
        likes: {
            type: Number,
            default: 0,
        },
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment',
            },
        ],
        published: {
            type: Boolean,
            default: false,
        },
        publishedAt: {
            type: Date,
        },
    },
    {
        timestamps: true, // createdAt and updatedAt fields automatically added
    }
);

export default mongoose.model<IBlog>('Blog', BlogSchema);



