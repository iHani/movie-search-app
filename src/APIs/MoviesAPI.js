const API_KEY = '[API_KEY]';
const api = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export const query = async (query, page = 1) => {
  return await fetch(`${api}&s=${query}&page=${page}`, { headers })
  .then(res => res.json());
};

// export const postPost = (post) => (
//   fetch(`${api}/posts`, {
//     method: 'POST',
//     headers: {
//       ...headers
//     },
//     body: JSON.stringify({ ...post }),
//   })
//   .then(res => res.json())
// )
//
// export const deletePost = (id) => (
//   fetch(`${api}/posts/${id}`, {
//     method: 'DELETE',
//     headers: { ...headers }
//   })
//   .then(res => res.json())
// )
