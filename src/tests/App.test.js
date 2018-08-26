import * as MoviesAPI from '../__mocks__/MoviesAPI';

const API_KEY = 'abc123';
const url = `http://www.omdbapi.com/`;

const search = async (term) => {
  const api = `${url}?apikey=${API_KEY}&s=${term}`;
  const data = await MoviesAPI.fakeQueryMovies(api);
  return data;
}

it('Success resolved response for getJson', async () => {
  const result = await search('spider');
  expect(result.Response).toBe('True');
});
