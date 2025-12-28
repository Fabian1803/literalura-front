import React from 'react';
import { BookOpen } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-[#2c241b] text-[#f4ecd8] p-4 border-b-4 border-[#8d6e63]">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-[#d7ccc8]" />
          <span className="text-3xl font-bold tracking-wider uppercase">Literalura</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
