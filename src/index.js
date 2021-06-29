import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';

import {createStore, applyMiddleware,compose,combineReducers} from "redux";
import thunk from 'redux-thunk';

import App from './App';
import reportWebVitals from './reportWebVitals';

// Reducer
import MainReducer from './store/reducer/reducer_main';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

// ---- SECTION REDUCER ----
const rootReducer = combineReducers({
   main: MainReducer,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app =  <Provider store={store}><App /></Provider>
ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
