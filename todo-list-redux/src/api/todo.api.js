import api from "./api";

const fetchTodos = () => {
    return api.get('/todo');
}

const addTodo = (todo) => {
    return api.post('/todo', todo);
}

const updateTodo = (todo) => {
    return api.put('/todo/' + todo.id, todo);
}

const deleteTodo = (todo) => {
    return api.delete('/todo/' + todo.id);
}


export {updateTodo, addTodo, deleteTodo, fetchTodos};
