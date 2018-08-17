import { FETCHED_MOVIES } from '../actions/movies';

const initialState = {
  movies: [
    { id: 1, title: 'Spiderman' },
    { id: 2, title: 'Titanic' },
    { id: 3, title: 'The Island' },
    { id: 4, title: 'Pheladephia' },
    { id: 5, title: 'Borat' },
  ]
};

export default (state = initialState, action) => {
  const { movies } = action;
  switch (action.type) {

    case FETCHED_MOVIES :
    return {
      ...state,
      movies
    };

    default :
    return state;
  }
}
