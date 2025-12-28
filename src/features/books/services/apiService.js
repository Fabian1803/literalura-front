import axios from 'axios';

// Use environment variable if available, otherwise fallback to localhost
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const searchBookByTitle = async (title) => {
  try {
    const response = await apiClient.get(`/libros/${encodeURIComponent(title)}`);
    return response.data;
  } catch (error) {
    console.error('Error searching book:', error);
    throw error;
  }
};

export const getAllBooks = async () => {
  try {
    const response = await apiClient.get('/libros');
    return response.data;
  } catch (error) {
    console.error('Error fetching all books:', error);
    throw error;
  }
};

export const getBooksByLanguage = async (languageCode) => {
  try {
    const response = await apiClient.get(`/libros/idioma/${languageCode}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching books by language:', error);
    throw error;
  }
};

export const getAllAuthors = async () => {
  try {
    const response = await apiClient.get('/libros/autores');
    return response.data;
  } catch (error) {
    console.error('Error fetching authors:', error);
    throw error;
  }
};

export const getLivingAuthorsByYear = async (year) => {
  try {
    const response = await apiClient.get(`/libros/autores-vivos/${year}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching living authors:', error);
    throw error;
  }
};
