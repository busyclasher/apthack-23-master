import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (siteURL: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <div className='flex justify-center mt-5 w-full'>
      <form onSubmit={handleSubmit} className="flex items-center flex-col sm:flex-row bg-black bg-opacity-30 rounded-lg p-4">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search Reviews"
          className="mb-3 sm:mb-0 sm:mr-2 p-2 rounded-md bg-black bg-opacity-50 text-indigo-100 border-2 border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-transparent w-full sm:w-full"
        />
        <button type="submit" className="py-2 px-4 font-bold bg-gradient-to-r from-indigo-400 to-indigo-300 text-gray-900 rounded-lg p-2 w-full sm:w-auto">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
