import { AxiosService } from '../services/axiosService';

export function getTodos(params = {}) {
    return AxiosService.get('/todotasks/', params);
}

export function createTodo(params = {}) {
    return AxiosService.post('/todotasks/', params);
}

export function updateTodo(params = {}) {
    return AxiosService.put('/todotasks/{id}', params);
}

export function deleteTodo(params = '') {
    return AxiosService.delete(`todotasks/${params}`);
}