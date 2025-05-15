// Shop.tsx
'use client';
import {useRouter} from "next/navigation";
import React from "react";

import Link from 'next/link';


type Product = {
    id: string;
    title: string;
    description: string;
    image: string;
    price: number;


};



const sampleProducts: Product[] = [
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "2",
        title: "Silk Saree",
        description: "Traditional silk saree from Banaras with fine zari work.",
        image: "https://source.unsplash.com/400x300/?saree,indian",
        price: 2499,
    },
    {
        id: "3",
        title: "Wooden Carving",
        description: "Decorative wall panel with intricate wood carving.",
        image: "https://source.unsplash.com/400x300/?woodcraft,indian",
        price: 1199,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    }, {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },
    {
        id: "1",
        title: "Handmade Pottery",
        description: "Beautifully crafted clay pot from Rajasthan.",
        image: "https://source.unsplash.com/400x300/?pottery,india",
        price: 799,
    },


];

const Shop: React.FC = () => {
    const handleAddToBag = (product: Product) => {
        alert(`Added "${product.title}" to bag!`);
    };

    const handleBuyNow = (product: Product) => {
        alert(`Proceed to buy "${product.title}"`);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Shop Cultural Items</h2>
            <div style={styles.grid}>
                {sampleProducts.map((product) => (
                    <div key={product.id} style={styles.card}>
                        <img src={product.image} alt={product.title} style={styles.image}/>
                        <h3 style={styles.title}>{product.title}</h3>
                        <p style={styles.description}>{product.description}</p>
                        <p style={styles.price}>₹{product.price}</p>
                        <div style={styles.buttonGroup}>
                            <button style={styles.button} onClick={() => handleAddToBag(product)}>
                                Add to Bag
                            </button>
                            <button style={{...styles.button, backgroundColor: "#2196f3"}}
                                    onClick={() => handleBuyNow(product)}>
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
        ;
};

const styles: {
    [key
    :
    string
        ]:
        React.CSSProperties
} = {
    container: {
        padding: "2rem",
        backgroundColor:
            "#f7f7f7",
    }
    ,
    heading: {
        textAlign: "center",
        marginBottom:
            "2rem",
        fontSize:
            "2rem",
        fontWeight:
            "bold",
    }
    ,
    grid: {
        display: "grid",
        gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
        gap:
            "1.5rem",
    }
    ,
    card: {
        backgroundColor: "#fff",
        borderRadius:
            "10px",
        padding:
            "1rem",
        boxShadow:
            "0 2px 8px rgba(0,0,0,0.1)",
        transition:
            "transform 0.2s",
    }
    ,
    image: {
        width: "100%",
        height:
            "180px",
        objectFit:
            "cover",
        borderRadius:
            "8px",
        marginBottom:
            "1rem",
    }
    ,
    title: {
        fontSize: "1.2rem",
        marginBottom:
            "0.5rem",
        color:
            "#333",
    }
    ,
    description: {
        fontSize: "0.95rem",
        color:
            "#666",
        marginBottom:
            "0.5rem",
    }
    ,
    price: {
        fontWeight: "bold",
        fontSize:
            "1.1rem",
        color:
            "#000",
        marginBottom:
            "1rem",
    }
    ,
    buttonGroup: {
        display: "flex",
        justifyContent:
            "space-between",
        gap:
            "0.5rem",
    }
    ,
    button: {
        flex: 1,
        padding:
            "0.6rem",
        borderRadius:
            "6px",
        backgroundColor:
            "#ff5722",
        color:
            "#fff",
        border:
            "none",
        cursor:
            "pointer",
    }
    ,
};

export default Shop;
