const initialState = {
    todos: [],
    loading: true,
    error: null
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TODOS_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_TODOS_SUCCESS':
            return {
                ...state,
                loading: false,
                todos: action.payload
            }
        case 'FETCH_TODOS_FAILED':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'ADD_TODO_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'ADD_TODO_SUCCESS':
            return {
                ...state,
                loading: false,
                todos: [...state.todos, action.payload]
            }
        case 'ADD_TODO_FAILED':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'DELETE_TODO_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'DELETE_TODO_SUCCESS':
            return {
                ...state,
                loading: false,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            }
        case 'DELETE_TODO_FAILED':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default todoReducer;
