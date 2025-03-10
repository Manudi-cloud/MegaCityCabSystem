// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:9090';  // Spring Boot backend URL

export const getCustomers = () => {
  return axios.get(`${API_BASE_URL}/customers`);
};

export const addBooking = (bookingData) => {
  return axios.post(`${API_BASE_URL}/bookings`, bookingData);
};


