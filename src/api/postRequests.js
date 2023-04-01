import axios from 'axios'

const postsAPI = axios.create({ baseURL: 'http://localhost:4000/post' });

export const post = data => postsAPI.post('/', data)
export const getPost = id => postsAPI.get(`/${id}`)
export const updatePost = (data, id) => postsAPI.put(`/${id}`)
export const deletePost = id => postsAPI.delete(`/${id}`)
export const getTimelinePosts = id => postsAPI.get(`/timeline/${id}`)