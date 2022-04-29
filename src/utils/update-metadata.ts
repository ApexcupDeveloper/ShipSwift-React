import axios from 'axios';
import { API_URL, getAuth0Token } from '.';

export const updateMetadata = (userProfile: any, userId: string) => {
    return getAuth0Token().then((res) => {
        return axios({
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${res.data.access_token}`,
                'Content-Type': 'application/json',
            },
            url: `${API_URL}/users/${userId}`,
            data: userProfile,
        });
    });
};