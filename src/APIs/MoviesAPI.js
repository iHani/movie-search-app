const api = "http://localhost:3001"

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export const queryMovies = (query, page = 1) =>
fetch(`${api}/api/search/${query}`, { headers })
.then(res => res.json());
