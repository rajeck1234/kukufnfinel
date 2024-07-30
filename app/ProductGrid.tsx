'use client'; // This component uses client-side features

import React from 'react';
import Image from 'next/image';
import img1 from '../public/images/Rectangle 10.jpg';
import img2 from '../public/images/Rectangle 11.jpg';
import img3 from '../public/images/Rectangle 12.jpg';
import img4 from '../public/images/Rectangle 13.jpg';

const products = [
  {
    id: 1,
    image: img1,
    name: 'Type 1',
    price: 'Best',
  },
  {
    id: 2,
    image: img2,
    name: 'Type 2',
    price: 'Best',
  },
  {
    id: 3,
    image: img3,
    name: 'Type 3',
    price: 'Best',
  },
  {
    id: 4,
    image: img4,
    name: 'Type 4',
    price: 'Best',
  }
];

function ProductGrid() {
  const handlePlayAudio = () => {
    window.location.href = 'https://jmp.sh/s/aqcMsvG3vvbgqX4R63Co';
  };

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:px-[0px] px-[20px]">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative flex flex-col items-center shadow-lg overflow-hidden rounded-lg"
            style={{ 
              backgroundColor: '#f0f0f0',  
              // width: '300px',
              // height: '415px',
            }}
          >
            <div className="flex-shrink-0 w-full h-2/3">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
                // layout="fill"
                // objectFit="contain"
              />
            </div>
            <div className="w-full p-2 bg-white text-center h-1/3">
              <div>
                <h2 className="text-sm font-bold">{product.name}</h2>
                <p className="mt-1 text-gray-700">{product.price}</p>
              </div>
              <button 
                className="mt-1 bg-black text-white italic px-4 py-2 rounded-[20px] text-xs"
                onClick={handlePlayAudio}
              >
                Play Audio
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
