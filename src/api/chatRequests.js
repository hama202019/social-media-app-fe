import axios from 'axios'

const chatAPI = axios.create({ baseURL: 'http://localhost:4000/chat' });

export const getUserChats = userId => chatAPI.get(`/${userId}`);
export const findChat = (user1Id, user2Id) => chatAPI.get(`/find/${user1Id}/${user2Id}`)