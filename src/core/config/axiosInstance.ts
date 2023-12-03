import axios from 'axios';
import { toast } from 'react-toastify';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URI}/api`
});

instance.interceptors.response.use(
  response => {
    return response?.data;
  },
  error => {
    if (error.response?.status === 500) {
      toast.error('mm.. something went wrong');
    }
    return Promise.reject(error.response?.data);
  }
);
instance.defaults.headers.common['Authorization'] = `${localStorage.getItem('token')}`;

export const setAuthToken = (token: string) => {
  if (token) {
    instance.defaults.headers.common['Authorization'] = `${token}`;
  } else delete axios.defaults.headers.common['Authorization'];
};

export default instance;
