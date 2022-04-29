import dev from "./config.dev.json";
import prod from "./config.prod.json";
import stg from "./config.stg.json";

export const isDev = process.env.REACT_APP_NODE_ENV === 'development';
export const isStg = process.env.REACT_APP_NODE_ENV === 'test';

export const config = isDev ? dev : isStg ? stg : prod;
