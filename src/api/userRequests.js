import axios from 'axios'

const userAPI = axios.create({ baseURL: 'http://localhost:4000/user' });

export const updateUser = (id, data) => userAPI.put(`/${id}`, data)
export const followUser = (id, data) => userAPI.put(`/follow/${id}`, {_id: data})
export const unfollowUser = (id, data) => userAPI.put(`/unfollow/${id}`, {_id: data})
export const getUser = id => userAPI.get(`/${id}`)
export const getAllUsers = id => userAPI.get('/', {params: {id}})
export const findUsers = (q, userId) => userAPI.get('/findUsers', {params: {q, userId}})