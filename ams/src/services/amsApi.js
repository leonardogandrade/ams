import axios from 'axios';
import config from '../config/server_config';
import { getToken } from './auth';

const amsApi = axios.create({
    baseURL : `${config.apiBackend}`
});

amsApi.interceptors.request.use(async config => {
    const token = getToken();
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

export default amsApi;