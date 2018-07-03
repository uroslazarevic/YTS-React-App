import axios from 'axios';

const ROOT_URL='https://yts.am/api/v2/list_movies.json';

export const SEARCH_MOVIES='SEARCH_MOVIES';
export const POPULAR_DOWNLOADS='POPULAR_DOWNLOADS';
export const LATEST_TORRENTS='LATEST_TORRENTS';

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

export function getLatestTorrents() {
  const page = 'page=2'; // cause API data for page: 1 === default is problematic
  const request = axios.get(`${ROOT_URL}?limit=8&sory_by=date_added&${page}`);
  return {
    type: LATEST_TORRENTS,
    payload: request
  };
};