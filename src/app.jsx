import * as React from 'react';
import * as ReactDOM from "react-dom";
import Page from "./Components/Page";
import './style.scss';
import 'normalize.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

const initialState = {shared: false, email: ''};

const middleware = ({getState}) => {
  return next => action => {
    return next(action);
  }
};

const userAction = (state = initialState, action) => {
  if (action.type === 'ADD_ACTION') {
    return Object.assign({}, state, {shared: true});
  }
  if (action.type === 'ADD_EMAIL') {
    return Object.assign({}, state, {email: action.payload.email});
  }
  return state;
};

const store = createStore(userAction, initialState, applyMiddleware(middleware));

ReactDOM.render(<Provider store={store}><Page/></Provider>, document.getElementById('app'));