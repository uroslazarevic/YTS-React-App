import { combineReducers } from 'redux';
import Movies from './reducer_movies';
import MovieDetails from './reducer_movie_details';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  movies: Movies,
  movie: MovieDetails,
  form: formReducer
});

export default rootReducer;