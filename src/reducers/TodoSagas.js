import * as API from './api';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { GET_TODO_REQUEST, GetTodoSuccess, GetTodoError} from '../actions/GetTodo';
import { DELETE_TODO } from '../actions/DeleteTodo';

export default function* rootSaga() {
    yield all([
        takeLatest(GET_TODO_REQUEST, todosSaga),
        takeLatest(DELETE_TODO, deleteTodoSaga)
    ])
    function* todosSaga() {
        try {
            const resp = yield call(API.getTodos, {});
            yield put(GetTodoSuccess(resp.data));
        } catch (error) {
            yield put(GetTodoError(error));
        }
    }

    function* deleteTodoSaga(action) {
        try {
            yield call(API.deleteTodo, action.payload.id);
        } catch (error) {
            console.log(error)
        }
    }
    
};
