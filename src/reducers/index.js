import { combineReducers } from 'redux';
import Movies from './reducer_movies';

const rootReducer = combineReducers({
  movies: Movies
});

export default rootReducer;