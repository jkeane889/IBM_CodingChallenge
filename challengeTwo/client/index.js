import React from "react";
import { render } from 'react-dom'
import rootReducer from './src/redux/reducers';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import App from "./App";
import "./index.css";

let store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)