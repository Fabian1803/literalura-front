import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <input
          type="text"
          className="w-full px-6 py-4 border-b-2 border-[#8d6e63] bg-transparent focus:border-[#3e2723] focus:outline-none text-lg pl-12 text-[#3e2723] placeholder-[#8d6e63]"
          placeholder="Search for a book by title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Search className="absolute left-4 text-[#8d6e63] h-6 w-6" />
        <button
          type="submit"
          className="absolute right-2 bg-[#3e2723] text-[#f4ecd8] px-6 py-2 hover:bg-[#5d4037] transition-colors font-medium uppercase tracking-wider text-sm"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
