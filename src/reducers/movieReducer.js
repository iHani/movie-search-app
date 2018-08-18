import { FETCHED_MOVIES } from '../actions/movies';

export default (state = [], action) => {
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
