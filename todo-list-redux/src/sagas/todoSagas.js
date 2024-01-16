import { call, put, takeEvery } from 'redux-saga/effects';
import {fetchTodos, addTodo, deleteTodo} from "../api/todo.api";
function* fetchTodoSaga() {
    try {
        const response = yield call(fetchTodos)
        yield put ({type: 'FETCH_TODOS_SUCCESS', payload: response.data.data})
    } catch (error) {
        yield put ({type: 'FETCH_TODOS_FAILED', payload: error.message})
    }
}

function* addTodoSaga(action) {
    try {
        const response = yield call(addTodo, action.payload)
        yield put ({type: 'ADD_TODO_SUCCESS', payload: response.data.data})
    } catch (error) {
        yield put ({type: 'ADD_TODO_FAILED', payload: error.message})
    }
}

function* deleteTodoSaga(action) {
    try {
        // Call the API to delete the item
        yield call(deleteTodo, action.payload);
        // Dispatch DELETE_TODO_SUCCESS action
        yield put({ type: 'DELETE_TODO_SUCCESS', payload: action.payload });
        // Dispatch FETCH_TODOS_REQUEST action to refresh the list
        yield put({ type: 'FETCH_TODOS_REQUEST' });
    } catch (error) {
        yield put ({type: 'DELETE_TODO_FAILED', payload: error.message})
    }
}

export default function* watchTodoSagas() {
    yield takeEvery('FETCH_TODOS_REQUEST', fetchTodoSaga)
    yield takeEvery('ADD_TODO_REQUEST', addTodoSaga)
    yield takeEvery('DELETE_TODO_REQUEST', deleteTodoSaga)
}
