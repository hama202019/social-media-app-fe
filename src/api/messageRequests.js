import axios from 'axios'

const messageAPI = axios.create({ baseURL: 'http://localhost:4000/message' })

export const fetchMessages = chatId => messageAPI.get(`/${chatId}`)