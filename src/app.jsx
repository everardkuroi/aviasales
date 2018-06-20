import * as React from 'react';
import * as ReactDOM from "react-dom";
import Page from "./Components/Page";
import './style.scss';
import 'normalize.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const userAction = (state = [], action) => {
  if (action.type === 'ADD_ACTION') {
    return [...state, action.value];
  }
  if (action.type === 'ADD_EMAIL') {
    return [...state, action.value]
  }
  return state;
};

const store = createStore(userAction);

ReactDOM.render(<Provider store={store}><Page/></Provider>, document.getElementById('app'));