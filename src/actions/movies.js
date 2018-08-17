import * as MoviesAPI from '../APIs/MoviesAPI';
export const FETCHED_MOVIES = 'FETCHED_MOVIES';

export const queryMovies = (query) => (dispatch) => (
  MoviesAPI
  .query(query)
  .then(movies => {
    console.log('movies', movies);
    // dispatch(fetchedMovies(movies))
  })
);

export const fetchedMovies = (movies = []) => ({
  type: FETCHED_MOVIES,
  movies
});
