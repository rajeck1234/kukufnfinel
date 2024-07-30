'use client';

import React, { useState } from 'react';
import { FiUser, FiSearch, FiShoppingCart, FiMenu } from 'react-icons/fi';
import { RxCross1, RxCross2 } from 'react-icons/rx';
import { FaRegHeart } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/Logo Of yeu 1.png';
import Search from './Search';
// import Search from './Search'; // Make sure this component is also correctly converted

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4 relative">
          
          {/* Hamburger menu for mobile */}
          <div className="md:hidden flex items-center">
            <button className="text-white hover:cursor-pointer" onClick={handleMenuToggle}>
              {isMenuOpen ? <RxCross1 size={20} /> : <FiMenu size={20} />}
            </button>
          </div>

          {/* Logo section */}
          <div className="flex items-center space-x-4 absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
            <Link href="/">
              <Image src={logo} alt="Logo" className="h-12" style={{ marginTop: "-1.6rem" }} />
            </Link>
          </div>

          {/* Main navigation links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/shop" className="text-white hover:text-gray-300 hover:cursor-pointer" style={{ fontWeight: 400 }}>
              
            </Link>
            <Link href="/our-story" className="text-white hover:text-gray-300 hover:cursor-pointer" style={{ fontWeight: 400 }}>
              Our Story
            </Link>
            <Link href="/book-look" className="text-white hover:text-gray-300 hover:cursor-pointer" style={{ fontWeight: 400 }}>
              Book Look
            </Link>
            <Link href="/membership" className="text-white hover:text-gray-300 hover:cursor-pointer" style={{ fontWeight: 400 }}>
              Membership
            </Link>
            <Link href="/blogs" className="text-white hover:text-gray-300 hover:cursor-pointer" style={{ fontWeight: 400 }}>
              Blogs
            </Link>
          </div>

          {/* User actions section */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-white hover:text-gray-300 hover:cursor-pointer">
              <FiUser size={20} />
            </Link>
            <Link href="/" className="text-white hover:text-gray-300 hover:cursor-pointer">
              <FaRegHeart size={20} />
            </Link>
            <button className="text-white hover:text-gray-300 hover:cursor-pointer" onClick={handleSearchToggle}>
              {isSearchOpen ? <RxCross2 size={20} /> : <FiSearch size={20} />}
            </button>
            <Link href="/" className="text-white hover:text-gray-300 hover:cursor-pointer">
              <FiShoppingCart size={20} />
            </Link>
          </div>

          {/* Mobile user actions section */}
          <div className="md:hidden flex items-center space-x-4">
            <Link href="/" className="text-white hover:text-gray-300 hover:cursor-pointer">
              <FiUser size={20} />
            </Link>
            <Link href="/" className="text-white hover:text-gray-300 hover:cursor-pointer">
              <FaRegHeart size={20} />
            </Link>
            <button className="text-white hover:text-gray-300 hover:cursor-pointer" onClick={handleSearchToggle}>
              {isSearchOpen ? <RxCross2 size={20} /> : <FiSearch size={20} />}
            </button>
            <Link href="/" className="text-white hover:text-gray-300 hover:cursor-pointer">
              <FiShoppingCart size={20} />
            </Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <Link href="/shop" className="block text-white hover:text-gray-300 py-2" style={{ fontWeight: 400 }} onClick={handleMenuToggle}>
              Shop
            </Link>
            <Link href="/our-story" className="block text-white hover:text-gray-300 py-2" style={{ fontWeight: 400 }} onClick={handleMenuToggle}>
              Our Story
            </Link>
            <Link href="/book-look" className="block text-white hover:text-gray-300 py-2" style={{ fontWeight: 400 }} onClick={handleMenuToggle}>
              Book Look
            </Link>
            <Link href="/membership" className="block text-white hover:text-gray-300 py-2" style={{ fontWeight: 400 }} onClick={handleMenuToggle}>
              Membership
            </Link>
            <Link href="/blogs" className="block text-white hover:text-gray-300 py-2" style={{ fontWeight: 400 }} onClick={handleMenuToggle}>
              Blogs
            </Link>
          </div>
        )}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 p-4">
            <Search />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
