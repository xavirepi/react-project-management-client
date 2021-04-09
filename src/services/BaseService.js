import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:5000/api'
})

http.interceptors.response.use(response => response.data)

export const createProject = (formFields) => {
    return http.post('/projects', { ...formFields });
}

export const getAllProjects = () => {
    return http.get('/projects')
}