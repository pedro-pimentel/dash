import axios from 'axios';

const apiUrl = 'http://localhost:3000/os'

const api = axios.create({
    baseURL: apiUrl
})

export default api;