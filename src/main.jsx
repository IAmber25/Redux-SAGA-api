import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import createSagaMiddleware from 'redux-saga';
import { watchFetchUsers } from './saga/saga';
import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer/reducer";
import { Provider } from "react-redux";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchUsers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
