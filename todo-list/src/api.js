import axios from 'axios';

const api = axios.create({
    baseURL: 'http://react-todo.com/api/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    withCredentials: true
});

export default api;
