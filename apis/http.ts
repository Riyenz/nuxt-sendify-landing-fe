import axios from 'axios';

declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<T> { }
}

const http = (options = {}, version = 'v1') => {
  const url = process.env.BASE_URL;

  const defaultOptions = {
    baseURL: `${url}/${version}`,
    headers: {},
  };

  const opts = Object.assign({}, defaultOptions, options);

  let http = axios.create(opts);

  http.interceptors.response.use((response) => response.data);

  return http;
};

export default http;
