import axios from 'axios';

// Replace with your backend base URL
const API_BASE_URL = 'https://yourbackenddomain.com/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,  // optional
    headers: {
        'Content-Type': 'application/json',
    },
});

// Example: login API call
export const loginUser = async (credentials) => {
    try {
        const response = await api.post('/login', credentials);
        return response.data;
    } catch (error) {
        throw error.response.data || error.message;
    }
};

// Example: get wallet overview
export const getWalletOverview = async (userId) => {
    try {
        const response = await api.get(`/wallet/${userId}`); // Properly enclosed template literal
        return response.data;
    } catch (error) {
        console.error("An error occurred while fetching the wallet overview:", error);
        throw error; // Propagate the error if necessary
    }
};

// Add other API calls here similarly
export default api;
