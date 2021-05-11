import axios from 'axios';

const apiUrl = axios.create({
  baseURL: 'http://127.0.0.1:3200'
});

export default apiUrl;