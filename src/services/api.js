import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.hml.pay1.com/v1/',
});

export default api;
