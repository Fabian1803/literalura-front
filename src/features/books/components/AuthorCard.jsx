import React from 'react';
import { User } from 'lucide-react';

const AuthorCard = ({ author }) => {
  const name = author.nombre || author.name || 'Unknown Name';
  const birthYear = author.fechaNacimiento || author.birthYear || '?';
  const deathYear = author.fechaFallecimiento || author.deathYear || 'Present';

  return (
    <div className="bg-[#fdfbf7] shadow-sm p-4 flex items-center space-x-4 hover:bg-[#efebe9] transition-colors border-b-2 border-[#8d6e63]">
      <div className="bg-[#d7ccc8] p-3">
        <User className="h-6 w-6 text-[#5d4037]" />
      </div>
      <div>
        <h3 className="font-bold text-lg text-[#3e2723] font-serif">{name}</h3>
        <p className="text-sm text-[#5d4037] italic">
          {birthYear} - {deathYear}
        </p>
      </div>
    </div>
  );
};

export default AuthorCard;
