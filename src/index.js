import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import reducers from './reducers';
import promise from 'redux-promise';

import Layout from 'components/app.js';
import Home from 'containers/home';
import MovieDetails from 'containers/full_movie_details';
import BrowseMovies from './containers/browse_movies';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store ={createStoreWithMiddleware(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
      <div>
        <Layout>
          <Switch>
            <Route path="/movie/:title" component={MovieDetails} />
            <Route path="/browse-movies" component={BrowseMovies} />
            <Route route='/' component={Home} />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
