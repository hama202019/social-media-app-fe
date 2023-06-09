import axios from 'axios'

const postsAPI = axios.create({ baseURL: 'http://localhost:4000/post' });

export const post = data => postsAPI.post('/', data)
export const getPost = id => postsAPI.get(`/${id}`)
export const deletePost = (id, userId) => postsAPI.delete(`/${userId}`, {params: {postId: id}})
export const getTimelinePosts = id => postsAPI.get(`/timeline/${id}`)
export const likePost =  (id, userId) => postsAPI.put(`/like/${id}`, {userId})