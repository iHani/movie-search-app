const api = "http://localhost:3001"

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export const queryMovies = (query, page = 1) =>
fetch(`${api}/api/search/${query}`, { headers })
.then(res => res.json());


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
