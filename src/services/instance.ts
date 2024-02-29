import axios from 'axios';
import { getToken } from './api/auth';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  headers: { 'Content-Type': 'application/json' },
});

// Request Interceptor 설정
axiosInstance.interceptors.request.use(
  (config) => {
    // 토큰을 요청 전에 가져와서 설정
    const accessToken = localStorage.getItem('accessToken');
    config.headers['Authorization'] = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

// Response Interceptor 설정
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newToken = await getToken();
        originalRequest.headers['Authorization'] = `Bearer ${newToken.AccessToken}`;
        localStorage.setItem('accessToken', newToken.AccessToken);

        return await axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('토큰 갱신 실패:', refreshError);

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
export default axiosInstance;
