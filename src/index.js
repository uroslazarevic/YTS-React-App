import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import reducers from './reducers';
import promise from 'redux-promise';

import { default as DefaultLayout } from 'components/app.js';
import Home from './components/home/home';
import MovieDetails from 'components/movie/full_movie_details';
import BrowseMovies from './containers/browse_movies';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store ={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <DefaultLayout path="/movie/:id" component={MovieDetails} />
          <DefaultLayout route='/' component={Home} />
          {/* <Route path="/browse-movies" component={BrowseMovies} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
