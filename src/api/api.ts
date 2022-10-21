import axios from 'axios';

const apiUrl = 'http://localhost:3004'

const api = axios.create({
    baseURL: apiUrl,
    headers: {
      'Content-Type': 'application/json'
      }
  });
  
export default api;