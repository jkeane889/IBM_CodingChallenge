import React from 'react';
import { createStore, applyMiddleware } from "redux";
import { Provider as ReduxProvider } from 'react-redux';
import thunk from "redux-thunk";
import rootReducer from './src/redux/reducers';

let store = createStore(
   rootReducer,
   applyMiddleware(thunk)
);

export default function Main() {
   return (
    <ReduxProvider store={store}>
        <HomePage />
    </ReduxProvider>
   );
};
