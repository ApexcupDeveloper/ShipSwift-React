import axios from "axios";
import { config } from "../private";
import { TOKEN_URL } from "./auth0-token";

export const getAuth0Token = () => {
    return axios({
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        url: TOKEN_URL,
        data: {
            client_id: config.auth0.clientId,
            client_secret: config.auth0.clientSecret,
            audience: config.auth0.audienceURL,
            grant_type: "client_credentials"
        }
    })
};
