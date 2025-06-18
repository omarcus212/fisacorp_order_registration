import axios from "axios";

const API_URL = import.meta.env.REACT_APP_BASE_URL_API || 'http://127.0.0.1:8000/api';

const api = axios.create({
  baseURL: API_URL
});

export default api;