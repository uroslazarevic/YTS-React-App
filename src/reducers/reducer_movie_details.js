import { FULL_MOVIE_DETAILS, MOVIE_SUGGESTIONS } from '../actions';

const initialState = {
  movieDetails: [],
  movieSuggestions: [],
  movieComments: [],
  movieReviews: [],
  movieParentalGuides: []

};

export default function (state = initialState, action) {
  switch(action.type) {
    case FULL_MOVIE_DETAILS: 
      return { ...state, movieDetails: action.payload.data.data.movie }

    case MOVIE_SUGGESTIONS: 
      return { ...state, movieSuggestions: action.payload.data.data.movies }

    default:
      return state;
  }
}