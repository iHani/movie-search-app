import * as MoviesAPI from '../APIs/MoviesAPI';
export const FETCHED_MOVIES = 'FETCHED_MOVIES';
export const NO_RESULT_FOUND = 'NO_RESULT_FOUND';
export const CACHE_REFRESHED = 'CACHE_REFRESHED';

export const queryMovies = (query) => async (dispatch, getState) => {
  // console.log('getState', getState());
  const data = await MoviesAPI.queryMovies(query);
  if (data.error) {
    return dispatch(noResultFound());
  } else {
    return dispatch(fetchedMovies(data.Search));
  }
};

export const fetchedMovies = (movies = []) => ({
  type: FETCHED_MOVIES,
  movies
});

export const noResultFound = () => ({
  type: NO_RESULT_FOUND
});

export const refreshCache = () => async (dispatch) => {
  const { allExistCacheRefreshed } = await MoviesAPI.refreshCache();
  if (allExistCacheRefreshed) {
    console.log('All cache has been refreshed');
    return dispatch(cacheRefreshed());
  } else {
    console.log('Error: Could not refresh cache!');
  }
};

export const cacheRefreshed = () => ({
  type: CACHE_REFRESHED
});
