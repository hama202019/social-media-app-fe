import axios from 'axios'

const chatAPI = axios.create({ baseURL: 'http://localhost:4000/chat' });

export const getUserChats = userId => chatAPI.get(`/${userId}`);