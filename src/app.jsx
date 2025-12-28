import React, { useState, useEffect } from 'react';
import Layout from './shared/components/Layout';
import Loader from './shared/components/Loader';
import SearchBar from './features/books/components/SearchBar';
import FilterBar from './features/books/components/FilterBar';
import ResultsGrid from './features/books/components/ResultsGrid';
import { useBooks } from './features/books/hooks/useBooks';
import { useAuthors } from './features/books/hooks/useAuthors';

const App = () => {
  const [view, setView] = useState('books'); // 'books' or 'authors'
  
  const { 
    books, 
    loading: booksLoading, 
    error: booksError, 
    fetchAllBooks, 
    searchBook, 
    filterByLanguage 
  } = useBooks();

  const { 
    authors, 
    loading: authorsLoading, 
    error: authorsError, 
    fetchAllAuthors, 
    fetchLivingAuthors 
  } = useAuthors();

  // Initial load
  useEffect(() => {
    fetchAllBooks();
  }, [fetchAllBooks]);

  const handleSearch = (title) => {
    setView('books');
    searchBook(title);
  };

  const handleFilterLanguage = (language) => {
    setView('books');
    filterByLanguage(language);
  };

  const handleShowAllBooks = () => {
    setView('books');
    fetchAllBooks();
  };

  const handleShowAuthors = () => {
    setView('authors');
    fetchAllAuthors();
  };

  const handleFilterLivingAuthors = (year) => {
    setView('authors');
    fetchLivingAuthors(year);
  };

  const loading = booksLoading || authorsLoading;
  const error = booksError || authorsError;
  const items = view === 'books' ? books : authors;

  return (
    <Layout>
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-5xl font-bold text-[#3e2723] mb-2 font-serif tracking-tight">Literalura Catalog</h1>
        <p className="text-[#5d4037] italic text-lg">Discover books and authors from our collection</p>
      </div>

      <SearchBar onSearch={handleSearch} />

      <FilterBar
        onFilterLanguage={handleFilterLanguage}
        onFilterLivingAuthors={handleFilterLivingAuthors}
        onShowAllBooks={handleShowAllBooks}
        onShowAuthors={handleShowAuthors}
      />

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {loading ? (
        <Loader />
      ) : (
        <ResultsGrid items={items} type={view} />
      )}
    </Layout>
  );
};

export default App;