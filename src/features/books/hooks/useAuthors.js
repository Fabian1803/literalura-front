import { useState, useCallback } from 'react';
import { getAllAuthors, getLivingAuthorsByYear } from '../services/apiService';

export const useAuthors = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAllAuthors = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllAuthors();
      setAuthors(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch authors');
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchLivingAuthors = useCallback(async (year) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getLivingAuthorsByYear(year);
      setAuthors(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch living authors');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    authors,
    loading,
    error,
    fetchAllAuthors,
    fetchLivingAuthors,
  };
};
