import { FULL_MOVIE_DETAILS, MOVIE_SUGGESTIONS, MOVIE_COMMENTS, MOVIE_REVIEWS, MOVIE_PARENTAL_GUIDES } from '../actions';

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

    case MOVIE_COMMENTS: 
      return { ...state, movieComments: action.payload }

    case MOVIE_REVIEWS: 
      return { ...state, movieReviews: action.payload }

    case MOVIE_PARENTAL_GUIDES: 
      return { ...state, movieParentalGuides: action.payload }

    default:
      return state;
  }
}