'use client'; 
import React, { FormEvent, useState } from 'react';

import { useRouter } from 'next/navigation'; 
import { FiSearch } from 'react-icons/fi';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e: FormEvent) => {
    
    e.preventDefault();
    if (searchTerm.trim()) { 
      router.push(`/shop?query=${encodeURIComponent(searchTerm)}`); 
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for products..."
        className="w-[400px] px-4 py-2 focus:outline-none search-input" 
      />
      <button type="submit" className="search-button m-0"> 
        <FiSearch size={20} className="text-black font-bold" />
      </button>
    </form>
  );
};

export default Search;





