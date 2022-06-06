import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:3004',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
});

export default service;
