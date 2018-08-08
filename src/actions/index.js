import axios from 'axios';
import qs from 'qs';

const ROOT_URL='https://yts.am/api/v2/';

// Home page
export const SEARCH_MOVIES='SEARCH_MOVIES';
export const POPULAR_DOWNLOADS='POPULAR_DOWNLOADS';
export const LATEST_TORRENTS='LATEST_TORRENTS';

// Full Movie Details page
export const FULL_MOVIE_DETAILS='FULL_MOVIE_DETAILS';
export const MOVIE_SUGGESTIONS='MOVIE_SUGGESTIONS';

// Browse Movies Page
export const BROWSE_MOVIES='BROWSE_MOVIES';

export function searchMovies({ query_term = '', limit= 4 } = {}) {
  const data = {
    query_term,
    limit
  };
  const stringified = qs.stringify(data);

  const request= axios.get(`${ROOT_URL}list_movies.json?${stringified}`)
  return {
    type: SEARCH_MOVIES,
    payload: request
  };
};

export function getPopularDownloads({limit = 4, sort_by = 'download_count'} = {}) {
  const data = {
    sort_by,
    limit
  };
  const stringified = qs.stringify(data);
  
  const request = axios.get(`${ROOT_URL}list_movies.json?${stringified}`);
  return {
    type: POPULAR_DOWNLOADS,
    payload: request
  };
};

export function getLatestTorrents({limit = 8, sort_by = 'date_added'} = {}) {
  const data = {
    sort_by,
    limit
  };
  const stringified = qs.stringify(data);
  
  const request = axios.get(`${ROOT_URL}list_movies.json?${stringified}`);
  return {
    type: LATEST_TORRENTS,
    payload: request
  };
};

export function getFullMovieDetails({movie_id='', with_images='true', with_cast='true'} ={}) {
  const data = { 
    movie_id,
    with_images,
    with_cast
  };
  const stringified = qs.stringify(data);
  
  const response = axios.get(`${ROOT_URL}movie_details.json?${stringified}`);
  
  return {
    type: FULL_MOVIE_DETAILS,
    payload: response
  };
}

export function getMovieSuggestions({movie_id=''} ={}) {
  const data = { 
    movie_id,
  };
  const stringified = qs.stringify(data);
  
  const response = axios.get(`${ROOT_URL}movie_suggestions.json?${stringified}`);
  
  return {
    type: MOVIE_SUGGESTIONS,
    payload: response
  };
}

export function browseMovies({ 
  query_term = '',
  quality='all',
  genre='all',
  minimum_rating='',
  order_by='',
  sort_by='',
  limit=20,
  page=1
  } = {}) {

  const data = {
    query_term,
    quality,
    genre,
    minimum_rating,
    order_by,
    sort_by,
    limit,
    page
  };

  const stringified = qs.stringify(data);

  const request= axios.get(`${ROOT_URL}list_movies.json?${stringified}`)
  return {
    type: BROWSE_MOVIES,
    payload: request
  };
};
