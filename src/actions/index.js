import axios from 'axios';
import qs from 'qs';

const ROOT_URL='https://yts.am/api/v2/';

export const SEARCH_MOVIES='SEARCH_MOVIES';
export const POPULAR_DOWNLOADS='POPULAR_DOWNLOADS';
export const LATEST_TORRENTS='LATEST_TORRENTS';

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