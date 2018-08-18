import * as MoviesAPI from '../APIs/MoviesAPI';
export const FETCHED_MOVIES = 'FETCHED_MOVIES';
export const NO_RESULT_FOUND = 'NO_RESULT_FOUND';

export const queryMovies = (query) => (dispatch) => (
  MoviesAPI
  .queryMovies(query)
  .then(res => {
    if (res.Response) {
      return dispatch(fetchedMovies(res.Search))
    } else {
      return dispatch(noResultFound())
    }
  })
);

export const fetchedMovies = (movies = []) => ({
  type: FETCHED_MOVIES,
  movies
});

export const noResultFound = () => ({
  type: NO_RESULT_FOUND
});
