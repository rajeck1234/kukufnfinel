'use client'; // This component uses client-side features

import React from 'react';
import Image from 'next/image';
import lipstick from '../public/images/Rectangle 8.jpg'; 
import blush from '../public/images/Rectangle 9.jpg';
import mask from '../public/images/Rectangle21.jpg';
import Link from 'next/link';


const products = [
  {
    id: 1,
    image: mask, 
    name: 'Love Stories',
    description: 'Comfortable Rich Colour',
  },
  {
    id: 2,
    image: lipstick, 
    name: 'Romantics',
    description: 'Comfortable Rich Colour',
  },{
    id: 3,
    image: blush, 
    name: 'Happy Stories',
    description: 'Bouncy Blush, Creamy Buildable Formula, Radiant Finish',
  }
];

function HighlightedProducts() {
  return (
    <div className="w-full ">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-8 xl:px-[0px] px-[20px] w-full">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative flex items-center justify-center shadow-lg overflow-hidden rounded-lg"
            style={{ 
              width: '100%', 
              paddingBottom: '100%', 
              backgroundColor: '#f0f0f0', 
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-contain rounded-lg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 rounded-lg bg-opacity-75" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
              <h2 className="text-[40px] italic ">{product.name}</h2>
              <p className="mt-2">{product.description}</p>
              <Link href="/all-products">
                <span className="mt-4 border-2 border-white text-white px-6 py-2 inline-block hover:underline cursor-pointer">
                  View All
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HighlightedProducts;
