import axios from 'axios';

const ROOT_URL='https://yts.am/api/v2/list_movies.json';

export const SEARCH_MOVIES='SEARCH_MOVIES';
export const POPULAR_DOWNLOADS='POPULAR_DOWNLOADS';

export function SearchMovies(movieTerm) {
  const request= axios.get(`${ROOT_URL}?limit=5&query_term=${movieTerm}`);
  return {
    type: SEARCH_MOVIES,
    payload: request
  };
};

export function getPopularDownloads() {
  const request = axios.get(`${ROOT_URL}?limit=4&sort_by=download_count`);
  return {
    type: POPULAR_DOWNLOADS,
    payload: request
  };
};