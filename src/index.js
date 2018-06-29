import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import './App.css';

import reducers from './reducers';
import promise from 'redux-promise';
import App from './components/app.js';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store ={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
