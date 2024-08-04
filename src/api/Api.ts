import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '../const/localstorage.ts';

export const $api = axios.create({
    baseURL: 'https://test.v5.pryaniky.com',
});

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers['X-Auth'] = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
    }
    return config;
});
