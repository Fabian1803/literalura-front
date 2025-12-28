import React from 'react';
import { Download, Globe, User } from 'lucide-react';

const BookCard = ({ book }) => {
  const title = book.title || 'Unknown Title';
  const author = book.authors || 'Unknown Author'; 
  const language = book.languages || 'Unknown';
  const downloads = book.download_count || 0;

  return (
    <div className="bg-[#fdfbf7] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full border-l-4 border-[#8d6e63] p-2">
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2 line-clamp-2 text-[#3e2723] font-serif" title={title}>{title}</h3>
          <div className="flex items-center text-[#5d4037] mb-1">
            <User className="h-4 w-4 mr-2" />
            <span className="text-sm line-clamp-1 italic">{author}</span>
          </div>
          <div className="flex items-center text-[#5d4037] mb-1">
            <Globe className="h-4 w-4 mr-2" />
            {/* Convertimos a mayúsculas para que se vea bonito (es -> ES) */}
            <span className="text-sm uppercase tracking-widest">{language}</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-[#d7ccc8] flex items-center text-[#8d6e63]">
          <Download className="h-4 w-4 mr-2" />
          <span className="text-sm">{downloads} Downloads</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;