import {all} from 'redux-saga/effects';
import watchTodoSagas from './todoSagas';

export default function* rootSaga() {
    yield all([
        watchTodoSagas()
    ])
}
