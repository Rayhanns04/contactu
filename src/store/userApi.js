import axiosInstance from '../lib/axios-instance';
import { LOGIN_URL, USERS_URL } from '../config/api';

export const loginApi = (body) => axiosInstance.post(LOGIN_URL, body);

export const getUsersApi = (params) => axiosInstance.get(USERS_URL, { params });

export const getUserApi = (id) => axiosInstance.get(`${USERS_URL}/${id}`);
export const deleteUserApi = (id) => axiosInstance.delete(`${USERS_URL}/${id}`);
export const updateUserApi = (id, body) =>
  axiosInstance.put(`${USERS_URL}/${id}`, body);
