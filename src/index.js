import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import reducers from './reducers';
import promise from 'redux-promise';

import { default as DefaultLayout } from './components/app.js';
import Home from './components/home/home';
import Movie from './containers/movie';
import BrowseMovies from './containers/browse_movies';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store ={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <DefaultLayout route='/' component={Home} />
          {/* <Route path="/" component={App} /> */}
          {/* <Route path="/movie/:title" component={Movie} />
          <Route path="/browse-movies" component={BrowseMovies} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
