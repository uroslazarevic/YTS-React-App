import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch } from 'react-router-dom';

import './App.css';

import reducers from './reducers';
import promise from 'redux-promise';

import { default as DefaultLayout } from 'components/app.js';
import Home from 'containers/home';
import MovieDetails from 'containers/full_movie_details';
import BrowseMovies from './containers/browse_movies';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store ={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <DefaultLayout path="/movie/:title" component={MovieDetails} />
          <DefaultLayout path="/browse-movies" component={BrowseMovies} />
          <DefaultLayout route='/' component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
