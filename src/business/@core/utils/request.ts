import axios, { AxiosRequestConfig } from 'axios';
import { config } from '../../../private';

const { hostname } = config;

let authorization: string;
export const setToken = (token: string) => (authorization = token ? `Bearer ${token}` : '');

type InitConfig = AxiosRequestConfig | undefined;
const request = async (init: InitConfig) => {
  const config: AxiosRequestConfig = {
    ...init,
    headers: {
      ...init?.headers,
      authorization,
    },
  };

  const response = await axios(config);
  const code = response.status;
  const ok = code >= 200 && code <= 300;

  if (response.status === 401) return { ...response, ok };
};

export type InitConfigWithoutMethod = Omit<InitConfig, 'method'>;

export const post = async (init: InitConfigWithoutMethod) => request({ ...init, method: 'post' });
export const put = async (init: InitConfigWithoutMethod) => request({ ...init, method: 'put' });
export const get = async (init: InitConfigWithoutMethod) => request({ ...init, method: 'get' });
export const del = async (init: InitConfigWithoutMethod) => request({ ...init, method: 'delete' });
