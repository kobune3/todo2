import axios from 'axios';

const API_HOST = process.env.REACT_APP_API_HOST || 'http://localhost:7771';

const http = axios.create({
  baseURL: API_HOST,
});

export default http;