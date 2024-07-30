'use client'; // Add this if the component uses client-side hooks

import React from 'react';
import Navbar from './component/Navbar'; // Ensure this path is correct
import Image from 'next/image';
import heroSvg from '../public/images/hro 1.jpg'; // Adjust the path to your SVG
import Group from '../public/images/Group 20.png'; // Adjust the path to your SVG




import Link from 'next/link';
import HighlightedProducts from './HighlightedProducts'; // Ensure this path is correct
import ProductGrid from './ProductGrid'; // Ensure this path is correct
// import MakeupImg from './MakeupImg'; // Ensure this path is correct
import ScrollingImages from './ScrollingImages'; // Ensure this path is correct
import techosImg from '../public/images/Rectangle 14.jpg'; // Adjust the path to your image
import MakeupImg from './MakeupImg';
import Footer from './component/Footer';



export default function page() {
  return (
    <div>
      <div className="relative bg-white shadow-lg">
        <div className="relative" style={{ top: '20px' }}>
          <Navbar />
        </div>

        <div className="h-[90vh] flex items-center justify-center relative">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(270deg, #D8CCA6, #B7A880)' }}></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Image src={heroSvg} alt="Hero" className="h-4/5 object-contain" />
            <div className="absolute text-center">
              <h1 className="font-montserrat text-4xl text-white mb-4 italic">All Stories</h1>
            </div>
            <div className="absolute bottom-[130px] text-center">
              <button className="  text-white px-6 py-2">SCROLL DOWN</button>
              <Image src={Group} className='mx-auto pt-1' alt="" />
            </div>
          </div>
        </div>
      </div>


      <div className=" mx-auto py-8  w-full ">
        <div className='max-w-[1280px] mx-auto'>
          <HighlightedProducts />
        </div>
        <h1 className="text-2xl font-bold italic mt-8" style={{ textAlign: "center" }}>TOP PICKS</h1>
        <div className="max-w-[1280px] mx-auto">
          <ProductGrid />
        </div>

        <div className="text-center mt-8  ">
          <h1 className="text-2xl font-bold text-black">Best Stories</h1>
          <div className='mt-4 relative'>
            <div className="mt-4 max-w-[1280px] mx-auto">
              <Image src={techosImg} alt='techos' />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-white text-[32px]">Love Stories</h1>
              <Link href="/virtual-config" className="text-white hover:underline block mt-2">
                TRY IT ON
              </Link>
            </div>
          </div>
        </div>



        <div className='max-w-[1280px] mx-auto'>
          <MakeupImg />
        </div>

        <div className='max-w-[1280px] mx-auto'>
          <ScrollingImages />
        </div>
      </div>

      <div className='bg-[#F4F4F4] '>
        <div className=' mx-auto py-8  max-w-[1290px] '>
          <Footer />
        </div>
      </div>





    </div>
  )
}
