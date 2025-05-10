'use client';
import { useParams } from 'next/navigation';
import React from 'react';

const blogContent: Record<string, { title: string; content: string }> = {
    'diverse-cultural-landscape': {
        title: 'The Diverse Cultural Landscape of India',
        content: `India, often described as a subcontinent... [same content from before]`,
    },
    'heritage-sites-you-must-visit': {
        title: 'Heritage Sites You Must Visit',
        content: `India is home to 40 UNESCO World Heritage Sites...`,
    },
};

const SingleBlogPage: React.FC = () => {
    const params = useParams();
    const slug = params.slug as string;

    const blog = blogContent[slug];

    if (!blog) {
        return <div className="p-10 text-center text-red-600">Blog not found</div>;
    }

    return (
        <main className="px-6 py-12 max-w-4xl mx-auto font-sans text-gray-800">
            <h1 className="text-4xl font-bold text-orange-700 mb-6">{blog.title}</h1>
            <p className="text-lg leading-relaxed whitespace-pre-line">{blog.content}</p>
        </main>
    );
};

export default SingleBlogPage;
