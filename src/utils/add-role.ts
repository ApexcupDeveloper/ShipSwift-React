import axios from 'axios';
import { API_URL, getAuth0Token } from '.';

export const addRole = (role: any, userId: string) => {
    return getAuth0Token().then((res) => {
        return axios({
            method: 'POST',
            headers: {
                Authorization: `Bearer ${res.data.access_token}`,
                'Content-Type': 'application/json',
            },
            url: `${API_URL}/users/${userId}/roles`,
            data: role,
        });
    });
};