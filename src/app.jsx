import * as React from 'react';
import * as ReactDOM from "react-dom";
import Page from "./Components/Page";
import './style.scss';
import 'normalize.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

const initialState = {userId: localStorage.getItem('userId'), shared: false, email: ''};

const middleware = ({getState}) => {
  return next => action => {
    console.log('action', action.payload);
    if (action.type === 'ADD_ALL') {
      if (action.payload.userId) {
        localStorage.setItem('userId', action.payload.userId)
      }
    }
    console.log('before', getState());
    const uno = next(action);
    console.log('after', getState());
    return uno;
  }
};

const userAction = (state = initialState, action) => {
  if (action.type === 'ADD_ACTION') {
    return Object.assign({}, state, {shared: true});
  }
  if (action.type === 'ADD_EMAIL') {
    return Object.assign({}, state, {email: action.payload.email});
  }
  if (action.type === 'ADD_ALL') {
    return Object.assign({}, state, action.payload)
  }
  return state;
};

const store = createStore(userAction, initialState, applyMiddleware(middleware));

ReactDOM.render(<Provider store={store}><Page/></Provider>, document.getElementById('app'));