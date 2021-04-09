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

export const getOneProject = (id) => {
    return http.get(`/projects/${id}`)
}

export const updateOneProject = (id) => {
    return http.put(`/projects/${id}`)
}