import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development'
  ? process.env.REACT_APP_API_BASE_URL
  : process.env.REACT_APP_API_BASE_URL_PROD;

const api = axios.create({
  baseURL,
  timeout: 10000
});

export const getMessage = () => api.get('/api/message');
