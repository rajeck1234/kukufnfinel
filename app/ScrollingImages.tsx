'use client'; // This component uses client-side features

import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import image1 from "../public/images/image 1.jpg";
import image2 from "../public/images/image 2.jpg";
import image3 from "../public/images/image 3.jpg";
import image4 from "../public/images/image 4.jpg";
import image5 from "../public/images/image 5.jpg";
import Rectangleimages from "../public/images/Rectangle 20.jpg";
import instagram from "../public/images/instagram (1) 1.png";
import youtube from "../public/images/youtube 1.png";
import socialimg from "../public/images/social 1.png";

const ScrollingImages = () => {
  return (
    <>
      <h1 className="text-center italic text-2xl mt-10 font-bold">Featured In</h1>
      <div className="flex w-full flex-col my-9">
        <Marquee autoFill pauseOnHover>
          <div className="cursor-pointer">
            <Image className="w-full px-5 sm:px-3 md:px-5" src={image1} alt="Rectangle1" layout="responsive" />
          </div>
          <div className="cursor-pointer">
            <Image className="w-full px-5 sm:px-3 md:px-5" src={image2} alt="Rectangle2" layout="responsive" />
          </div>
          <div className="cursor-pointer">
            <Image className="w-full px-5 sm:px-3 md:px-5" src={image3} alt="Rectangle3" layout="responsive" />
          </div>
          <div className="cursor-pointer">
            <Image className="w-full px-5 sm:px-3 md:px-5" src={image4} alt="Rectangle4" layout="responsive" />
          </div>
          <div className="cursor-pointer">
            <Image className="w-full px-5 sm:px-3 md:px-5" src={image5} alt="Rectangle5" layout="responsive" />
          </div>
        </Marquee>
      </div>

      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center italic font-bold mb-8">Our story</h1>
        <div className="relative hoverEffectt w-full">
          <Image src={Rectangleimages} alt="" className="w-full" layout="responsive" />
          <div className="absolute inset-0 custom-overlay flex justify-center items-center">
            <p className="text-center text-[8px] sm:text-[16px] text-white px-4 sm:px-8 md:px-16 z-10">
              Personal, confident, sexy, bold, proficient, sophisticated and adept.
              <br />
              We know exactly what you’re looking for and we’re ready to deliver it to you!
            </p>
          </div>
        </div>
      </div>

      <div className='mt-9'>
        <SocialMedia />
      </div>
    </>
  );
};

const SocialMedia = () => {
  const items = [
    {
      content: "follow us",
      url: instagram
    },
    {
      content: "follow us",
      url: youtube
    },
    {
      content: "follow us",
      url: socialimg
    },
  ];

  return (
    <div className='pt-9 xl:px-[0px] px-[20px]'>
      <h1 className='text-xl md:text-2xl lg:text-3xl text-center italic font-bold mb-8'>INSPIRED AND GET INSPIRED</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 md:px-0 px-4 gap-5'>
        {
          items.map((data, i) => (
            <div key={i} className='bg-[#D9D9D9] parentzoom md:h-[300px] py-5 md:py-0 lg:py-0 flex flex-col justify-center items-center'>
              <Image src={data.url} alt="" className='drop-shadow-lg saclezoom' />
              <span className='text-base md:text-lg lg:text-xl font-bold pt-4'>{data.content}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ScrollingImages;
