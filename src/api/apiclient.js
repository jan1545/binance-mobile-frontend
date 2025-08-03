import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://your-backend-api-domain.com/api',
    timeout: 10000,
});

export const getData = async (endpoint) => {
    try {
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('API fetch error:', error);
        throw error;
    }
};

// Usage in any component example:
// import { getData } from '../api/apiClient';
// useEffect(() => { getData('/transactions').then(...) }, []);
