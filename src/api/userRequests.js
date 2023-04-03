import axios from 'axios'

const userAPI = axios.create({ baseURL: 'http://localhost:4000/user' });

export const updateUser = (id, data) => userAPI.put(`/${id}`, data)
export const followUser = (id, data) => userAPI.put(`/${id}`, data)
export const getUser = id => userAPI.get(`/${id}`)
export const getAllUsers = id => userAPI.get('/', {params: {id}})