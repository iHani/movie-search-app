const api = "http://localhost:3001";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export const queryMovies = (query) =>
fetch(`${api}/search?keyword=${query}`, { headers })
.then(res => res.json());

export const refreshCache = () =>
fetch(`${api}/cache/refresh`, { headers })
.then(res => res.json());
