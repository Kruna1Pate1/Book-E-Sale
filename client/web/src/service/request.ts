import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 12400000,
  responseType: 'json',
  
});

export default request;
