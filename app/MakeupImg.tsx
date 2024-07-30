'use client'; // This component uses client-side features

import React from "react";
import Image from "next/image";
import Rectangle1 from "../public/images/Rectangle 15.jpg";
import Rectangle2 from "../public/images/Rectangle 16.jpg";
import Rectangle3 from "../public/images/Rectangle 18.jpg";
import trio_elegance from "../public/images/trio-of-elegance-diverse-women-gracefully-pose-2024-06-13-19-35-19-utc 1 (1).jpg";
import Link from "next/link"; // Import Link from next/link

const MakeupImg = () => {
  return (
    <>
      <div className="px-4 lg:px-0">
        <h1 className="text-center italic text-2xl font-bold mt-8">YEU EDIT</h1>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-3 mt-8">
          <div className="relative">
            <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-black hover:bg-opacity-0 duration-300 bg-opacity-30">
              <p className="uppercase text-2xl text-white">galm night</p>
            </div>
            <Image className="w-full" src={Rectangle1} alt="Rectangle1" layout="responsive" />
          </div>
          <div className="relative mt-5 sm:mt-0">
            <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-black hover:bg-opacity-0 duration-300 bg-opacity-30">
              <p className="uppercase text-2xl text-white">nude makeup</p>
            </div>
            <Image className="w-full" src={Rectangle2} alt="Rectangle2" layout="responsive" />
          </div>
          <div className="relative mt-5 sm:mt-0">
            <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-black hover:bg-opacity-0 duration-300 bg-opacity-30">
              <div className="w-full text-center">
                <p className="uppercase text-2xl text-white">paint</p>
                <p className="uppercase text-2xl text-white">it</p>
                <p className="uppercase text-2xl text-white bg-[#E8222E]">red</p>
              </div>
            </div>
            <Image className="w-full" src={Rectangle3} alt="Rectangle3" layout="responsive" />
          </div>
        </div>
      </div>

      <div className="px-4 md:px-0 py-8">
        <h1 className="text-center italic text-2xl font-bold sm:mt-10">ELITE ACCESS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 mt-7">
          <div className="md:col-span-3">
            <Image className="w-full" src={trio_elegance} alt="Trio Elegance" layout="responsive" />
          </div>
          <div className="md:col-span-2 bg-[#5B5C57] flex justify-center items-center">
            <div className="flex flex-col justify-center items-center h-full w-full p-4">
              <p className="text-xl text-[#FFFFFF] text-center italic font-[bembostd] mb-4">
                JOIN KU KU FM <br /> EXCLUSIVE MEMBERSHIP
              </p>
              <Link href="/sign-up">
                <span className="text-white p-0 border-b-2 inline-block cursor-pointer">
                  SIGN UP
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeupImg;
