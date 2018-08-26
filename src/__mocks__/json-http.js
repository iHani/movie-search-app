import mockMovieList from './mockMovieList';

export default {
  fakeQueryMovies: jest.fn(() => Promise.resolve(mockMovieList))
}
