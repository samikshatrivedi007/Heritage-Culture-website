'use client';
import React from 'react';
import Link from 'next/link';


const blogPosts = [
    {
        slug: 'diverse-cultural-landscape',
        title: 'The Diverse Cultural Landscape of India',
        summary: 'Explore India’s unmatched cultural diversity, traditions, festivals, and cuisines.',
        image: '/images/diwali.jpg',
    },
    {
        slug: 'heritage-sites-you-must-visit',
        title: 'Heritage Sites You Must Visit',
        summary: 'From Hampi to Khajuraho, explore India’s breathtaking heritage sites.',
        image: '/images/hampi.jpg',
    },
];

const BlogListPage: React.FC = () => {
    return (
        <main className="px-4 py-12 max-w-6xl mx-auto font-sans">
            <h1 className="text-4xl font-bold text-center mb-10 text-orange-700">
                Cultural & Heritage Blog
            </h1>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                {blogPosts.map((post) => (
                    <Link href={`/pages/blogpage/${post.slug}`} key={post.slug}>
                        <div className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition">
                            <img src={post.image} alt={post.title} className="w-full h-60 object-cover" />
                            <div className="p-4">
                                <h2 className="text-2xl font-bold text-green-700">{post.title}</h2>
                                <p className="text-gray-600 mt-2">{post.summary}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
};

export default BlogListPage;
