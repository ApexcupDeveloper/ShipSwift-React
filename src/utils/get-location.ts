import axios from 'axios';
import { IPSTACK_URL, IPSTACK_KEY } from './auth0-token';

export const getLocation = (ip: string) => {
    return axios({
        method: 'GET',
        url: `${IPSTACK_URL}/${ip}?access_key=${IPSTACK_KEY}`
    })
};