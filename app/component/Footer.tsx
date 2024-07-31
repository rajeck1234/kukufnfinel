import React from 'react';
import Link from 'next/link';
import { IoGlobeOutline, IoLocationSharp } from "react-icons/io5";
import { FaFacebookSquare, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-3 xl:px-0 px-[20px]  max-w-[1290px] ">
      <div className="grid grid-cols-1 md:grid-cols-5  gap-5">
        {/* Left Section */}
        <div className="space-y-4 col-span-2">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <IoGlobeOutline />
              <span className="text-sm">India | EN ₹</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm">Find a Store</span>
              <IoLocationSharp />
            </div>
          </div>
          <div className='flex flex-col justify-between md:h-[200px] md:items-center w-full'>
            <div>
              <p className="text-lg font-semibold mb-2">Sign up for updates from KU KU FM</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-[180px] p-2 border border-gray-300 rounded-l-md focus:outline-none"
                />
                <button
                  className="bg-black text-white text-[10px] px-4 m-0 py-2 rounded-r-md"
                >
                  SIGN UP
                </button>
              </form>
            </div>
          </div>
          <div className="flex space-x-4 text-2xl">
            <Link href="#" className="text-gray-600 hover:text-[#1877F2]">
              <FaFacebookSquare />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#E60023]">
              <FaPinterest />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#FF0000]">
              <FaYoutube />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#F56040]">
              <FaInstagram />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-3">
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            <div>
              
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">FAQ</Link>
                </li>
    
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">MY ACCOUNT</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">Create Account</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">Accounts</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">COMPANY</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">About Us</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">Careers</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">Investor Relations</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">Supply Chain Disclosure</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-black">Corporate Social Responsibility</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
