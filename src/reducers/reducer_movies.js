import { SEARCH_MOVIES, POPULAR_DOWNLOADS, LATEST_TORRENTS, UPCOMING_MOVIES, BROWSE_MOVIES } from '../actions';

const initialState = {
  searchedMovies: [],
  popularDownloads: [],
  latestMovies: [],
  upcomingMovies: [],
  browseMovies:[]
};

export default function (state = initialState, action ) {
  switch (action.type) {
    case SEARCH_MOVIES:
      return { ...state, searchedMovies: action.payload.data.data.movies }
    case POPULAR_DOWNLOADS:
      return { ...state, popularDownloads: action.payload.data.data.movies }
    case LATEST_TORRENTS: 
      return { ...state, latestMovies: action.payload.data.data.movies }
    case UPCOMING_MOVIES: 
      return { ...state, upcomingMovies: action.payload }
    case BROWSE_MOVIES:
      return { ...state, browseMovies: action.payload.data.data}

    default:
      return state;
  }
}