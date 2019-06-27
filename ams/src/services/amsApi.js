import axios from 'axios';
import config from '../config/server_config';

const amsApi = axios.create({
    baseURL : `${config.apiBackend}`
});

export default amsApi;