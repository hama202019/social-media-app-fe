import axios from 'axios'


const authAPI = axios.create({ baseURL: 'http://localhost:4000/auth' });

export const logIn= formData => authAPI.post('/login',formData);
export const signUp = formData => authAPI.post('/register', formData);