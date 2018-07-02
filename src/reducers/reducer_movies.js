import { SEARCH_MOVIES, POPULAR_DOWNLOADS } from '../actions';

const initialState = {
  searchedMovies: [],
  popularDownloads: [],
  latestMovies: [],
  upcomingMovies: []
};

export default function (state = initialState, action ) {
  switch (action.type) {
    case SEARCH_MOVIES:
      return { ...state, searchedMovies: action.payload.data.data.movies }
    case POPULAR_DOWNLOADS:
      return { ...state, popularDownloads: action.payload.data.data.movies }

    default:
      return state;
  }
}