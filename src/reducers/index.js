import { combineReducers } from 'redux';
import Movies from './reducer_movies';
import MovieDetails from './reducer_movie_details';

const rootReducer = combineReducers({
  movies: Movies,
  movie: MovieDetails
});

export default rootReducer;