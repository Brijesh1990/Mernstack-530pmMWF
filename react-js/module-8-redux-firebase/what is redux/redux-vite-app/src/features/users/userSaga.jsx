import {
  call,
  put,
  takeLatest
} from "redux-saga/effects";

import api from "../../services/api";

import {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailure,

  addUser,
  addUserSuccess,
  addUserFailure,

  updateUser,
  updateUserSuccess,
  updateUserFailure,

  deleteUser,
  deleteUserSuccess,
  deleteUserFailure
} from "./userSlice";

function* fetchUsersWorker() {
  try {
    const response = yield call(
      api.get,
      "/users"
    );

    yield put(
      fetchUsersSuccess(response.data)
    );
  } catch (error) {
    yield put(
      fetchUsersFailure(
        error.message
      )
    );
  }
}

function* addUserWorker(action) {
  try {
    const response = yield call(
      api.post,
      "/users",
      action.payload
    );

    yield put(
      addUserSuccess(response.data)
    );
  } catch (error) {
    yield put(
      addUserFailure(
        error.message
      )
    );
  }
}

function* updateUserWorker(action) {
  try {
    const { id, ...userData } =
      action.payload;

    const response = yield call(
      api.put,
      `/users/${id}`,
      userData
    );

    yield put(
      updateUserSuccess(response.data)
    );
  } catch (error) {
    yield put(
      updateUserFailure(
        error.message
      )
    );
  }
}

function* deleteUserWorker(action) {
  try {
    yield call(
      api.delete,
      `/users/${action.payload}`
    );

    yield put(
      deleteUserSuccess(
        action.payload
      )
    );
  } catch (error) {
    yield put(
      deleteUserFailure(
        error.message
      )
    );
  }
}

export default function* userSaga() {
  yield takeLatest(
    fetchUsers.type,
    fetchUsersWorker
  );

  yield takeLatest(
    addUser.type,
    addUserWorker
  );

  yield takeLatest(
    updateUser.type,
    updateUserWorker
  );

  yield takeLatest(
    deleteUser.type,
    deleteUserWorker
  );
}