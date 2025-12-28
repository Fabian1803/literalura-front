import { useState, useCallback } from 'react';
import { searchBookByTitle, getAllBooks, getBooksByLanguage } from '../services/apiService';

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAllBooks = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllBooks();
      setBooks(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch books');
    } finally {
      setLoading(false);
    }
  }, []);

  const searchBook = useCallback(async (title) => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchBookByTitle(title);
      setBooks(data ? [data] : []);
    } catch (err) {
      setError(err.message || 'Failed to search book');
    } finally {
      setLoading(false);
    }
  }, []);

  const filterByLanguage = useCallback(async (language) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getBooksByLanguage(language);
      setBooks(data);
    } catch (err) {
      setError(err.message || 'Failed to filter books');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    books,
    loading,
    error,
    fetchAllBooks,
    searchBook,
    filterByLanguage,
  };
};
