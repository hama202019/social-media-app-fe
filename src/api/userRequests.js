import axios from 'axios'

const userAPI = axios.create({ baseURL: 'http://localhost:4000/user' });

export const updateUser = (id, data) => userAPI.put(`/${id}`, data)