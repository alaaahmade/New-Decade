import axios from 'axios';
// config
import { HOST_API } from 'src/config-global';
import { axiosReq } from './axiosReq';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: HOST_API });

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args) => {
  const [url] = Array.isArray(args) ? args : [args];
  const res = await axiosReq.get(url);

  return res.data;
};

// ----------------------------------------------------------------------

export const endpoints = {
  service:{
    list: '/services',
    details: '/service',
  },
  products:{
    list: '/products',
    details: '/service',
  }
};
