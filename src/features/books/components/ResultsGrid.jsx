import React from 'react';
import BookCard from './BookCard';
import AuthorCard from './AuthorCard';

const ResultsGrid = ({ items, type }) => {
  if (!items || items.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        <p className="text-xl">No results found.</p>
      </div>
    );
  }

  if (type === 'authors') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((author, index) => (
          <AuthorCard key={index} author={author} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

export default ResultsGrid;
