// sagas.js
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_USERS_REQUEST,
  fetchUsersSuccess,
  fetchUsersFailure,
} from '../actions/action';

function* fetchUsers() {
  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/users');
    const users = yield response.json();
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

export function* watchFetchUsers() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsers);
}
