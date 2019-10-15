import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.184.100.190:3333',
})

export default api;