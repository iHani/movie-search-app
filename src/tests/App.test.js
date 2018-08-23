const http = require('json-http');

const API_KEY = process.env.REACT_APP_MODB_TOKEN;
const url = `http://www.omdbapi.com/`;

const search = async (term) => {
  term = 'spider';
  const api = `${url}?apikey=${API_KEY}&s=${term}`;
  const data = await http.getJson(api);
  console.log('dataaaaaaa', data);
  return data;
}

it('test 5 * 2', () => {
  expect(5 * 2).toEqual(10);
});
