
// axiosConfig.js

import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // replace with your API base URL
  timeout: 5000, // set your timeout
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `${localStorage.getItem('accessToken') || ''}`, // get token from local storage
  },
});

export default instance;
