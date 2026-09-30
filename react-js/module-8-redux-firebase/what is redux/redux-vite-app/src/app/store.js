import {
  configureStore
} from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";

import userReducer from "../features/users/userSlice";

import rootSaga from "../saga/rootSaga";

const sagaMiddleware =
  createSagaMiddleware();

const store = configureStore({
  reducer: {
    users: userReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false
    }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export default store;