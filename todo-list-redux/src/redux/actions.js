export const fetchTodosAction = () => ({
    type: 'FETCH_TODOS_REQUEST'
})

export const addTodoAction = (todo) => ({
    type: 'ADD_TODO_REQUEST',
    payload: todo
})

export const updateTodoAction = (todo) => ({
    type: 'UPDATE_TODO_REQUEST',
    payload: todo
})

export const deleteTodoAction = (todo) => ({
    type: 'DELETE_TODO_REQUEST',
    payload: todo
})
