import axios from 'axios';

export const API_BE = () => axios.create({
    baseURL: process.env.REACT_APP_END_POINT,
    headers: {
        // Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 60000, // 1 mins
});

