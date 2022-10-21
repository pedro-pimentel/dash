import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com'

const api = axios.create({
    baseURL: apiUrl,
    headers: {
      'Content-Type': 'application/json'
      }
  });
  
export default api;