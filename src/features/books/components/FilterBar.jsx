import React, { useState } from 'react';
import { Filter, Users, BookOpen, Calendar } from 'lucide-react';

const FilterBar = ({
  onFilterLanguage,
  onFilterLivingAuthors,
  onShowAllBooks,
  onShowAuthors,
}) => {
  const [year, setYear] = useState('');
  const [language, setLanguage] = useState('');

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    if (lang) onFilterLanguage(lang);
  };

  const handleLivingAuthorsSubmit = (e) => {
    e.preventDefault();
    if (year) onFilterLivingAuthors(year);
  };

  return (
    <div className="bg-[#fdfbf7] p-6 mb-8 flex flex-col md:flex-row gap-6 items-center justify-between border-t-2 border-b-2 border-[#8d6e63]">
      <div className="flex flex-col md:flex-row gap-6 items-center w-full md:w-auto">
        {/* Language Filter */}
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <Filter className="h-5 w-5 text-[#5d4037]" />
          <select
            className="bg-transparent border-b border-[#8d6e63] px-3 py-2 focus:outline-none text-[#3e2723] w-full md:w-auto"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="">Select Language</option>
            <option value="es">Spanish (ES)</option>
            <option value="en">English (EN)</option>
            <option value="fr">French (FR)</option>
            <option value="pt">Portuguese (PT)</option>
          </select>
        </div>

        {/* Living Authors Filter */}
        <form onSubmit={handleLivingAuthorsSubmit} className="flex items-center space-x-2 w-full md:w-auto">
          <Calendar className="h-5 w-5 text-[#5d4037]" />
          <input
            type="number"
            placeholder="Year"
            className="bg-transparent border-b border-[#8d6e63] px-3 py-2 w-full md:w-24 focus:outline-none text-[#3e2723] placeholder-[#8d6e63]"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#5d4037] text-[#f4ecd8] px-4 py-2 hover:bg-[#3e2723] transition-colors text-sm uppercase tracking-wider w-full md:w-auto"
          >
            Filter Living Authors
          </button>
        </form>
      </div>

      <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
        <button
          onClick={onShowAllBooks}
          className="flex items-center justify-center space-x-2 bg-[#d7ccc8] text-[#3e2723] px-4 py-2 hover:bg-[#bcaaa4] transition-colors w-full md:w-auto"
        >
          <BookOpen className="h-4 w-4" />
          <span>All Books</span>
        </button>
        <button
          onClick={onShowAuthors}
          className="flex items-center justify-center space-x-2 bg-[#d7ccc8] text-[#3e2723] px-4 py-2 hover:bg-[#bcaaa4] transition-colors w-full md:w-auto"
        >
          <Users className="h-4 w-4" />
          <span>All Authors</span>
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
