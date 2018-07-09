import axios from 'axios';
import qs from 'qs';

const ROOT_URL='https://yts.am/api/v2/';

// Home page
export const SEARCH_MOVIES='SEARCH_MOVIES';
export const POPULAR_DOWNLOADS='POPULAR_DOWNLOADS';
export const LATEST_TORRENTS='LATEST_TORRENTS';
export const UPCOMING_MOVIES='UPCOMING_MOVIES';

// Full Movie Details page
export const FULL_MOVIE_DETAILS='FULL_MOVIE_DETAILS';
export const MOVIE_SUGGESTIONS='MOVIE_SUGGESTIONS';
export const MOVIE_COMMENTS='MOVIE_COMMENTS';
export const MOVIE_REVIEWS='MOVIE_REVIEWS';
export const MOVIE_PARENTAL_GUIDES='MOVIE_PARENTAL_GUIDES';

export function searchMovies({ query_term = '', limit= 4 } = {}) {
  const data = {
    query_term,
    limit
  };
  const stringified = qs.stringify(data);

  const request= axios.get(`${ROOT_URL}list_movies.json?${stringified}`);
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

export function getUpcomingMovies({limit= 4} = {}) {
  const data = { limit };
  const stringified = qs.stringify(data);

  const request = axios.get(`${ROOT_URL}list_upcoming.json${stringified}`)
  return {
    type: UPCOMING_MOVIES,
    payload: request
  }
}

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

export function getMovieComments({movie_id=''} ={}) {
  const data = { 
    movie_id,
  };
  const stringified = qs.stringify(data);
  
  const response = axios.get(`${ROOT_URL}movie_comments.json?${stringified}`);
  
  return {
    type: MOVIE_COMMENTS,
    payload: response
  };
}

export function getMovieReviews({movie_id=''} ={}) {
  const data = { 
    movie_id,
  };
  const stringified = qs.stringify(data);
  
  const response = axios.get(`${ROOT_URL}movie_reviews.json?${stringified}`);
  
  return {
    type: MOVIE_REVIEWS,
    payload: response
  };
}

export function getMovieParentalGuides({movie_id=''} ={}) {
  const data = { 
    movie_id,
  };
  const stringified = qs.stringify(data);
  
  const response = axios.get(`${ROOT_URL}movie_parental_guides.json?${stringified}`);
  
  return {
    type: MOVIE_PARENTAL_GUIDES,
    payload: response
  };
}

