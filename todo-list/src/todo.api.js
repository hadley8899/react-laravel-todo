import api from "./api";

const updateTodo = (todo) => {
    return api.put('/todo/' + todo.id, todo);
}

const addTodo = (todo) => {
    return api.post('/todo', todo);
}

const deleteTodo = (todo) => {
    return api.delete('/todo/' + todo.id);
}

const fetchTodos = () => {
    return api.get('/todo');
}

export {updateTodo, addTodo, deleteTodo, fetchTodos};
