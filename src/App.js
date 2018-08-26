import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import { queryMovies, refreshCache } from './actions/movies';
import MovieCard from './components/MovieCard';
import './App.css';

class App extends Component {

  state = {
    status: 'INITIAL',
    query: '',
  }

  async updateQuery (query) {
    this.setState({ query, status: 'SEARCHING' });
    if (query.trim()) {
      const { type } = await this.props.queryMovies(query);
      this.setState({ status: type });
    } else {
      this.setState({ status: 'INITIAL' });
    }
  }

  refreshCache = () => this.props.refreshCache();

  render() {
    const { query, status } = this.state;
    const { movies } = this.props;

    return (
      <div className="text-center">
        <header className="header p-2">
          <h1>Movie Search App</h1>

        </header>
        <div className="container justify-content-center">
          <div className="input-group search-input m-3 pt-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Search</span>
            </div>
            <DebounceInput
              name="search"
              type="text"
              className="form-control"
              onChange={({ target }) => this.updateQuery(target.value)}
              minLength={3}
              debounceTimeout={300}
              placeholder="movie title..."
              autoFocus
            />
          </div>
          <hr />

          {status === 'INITIAL' && <h3>Ready to search</h3>}

          {status === 'NO_RESULT_FOUND' && <h3>No results found for: {query}</h3>}

          {status === 'SEARCHING' && <h3>Searching...</h3>}

          {status === 'FETCHED_MOVIES' && query.trim() && movies && <div>
            <h3 className="text-left">Results for: {query} ({movies.length})</h3>
            <div className="row">
              {movies.map((movie) => <MovieCard key={movie.imdbID} {...movie} />)}
            </div>
          </div>}

          <span className="small mt-2 mb-5">Click to refresh all cache
            <button
              type="button"
              className="btn btn-outline-success btn-sm mt-5 mb-5 ml-1"
              onClick={() => this.refreshCache()}>
              /api/cache/refresh
            </button>
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ movies = [] }) => ({
  movies,
});

const mapDispatchToProps = (dispatch) => ({
  queryMovies: (query) => dispatch(queryMovies(query)),
  refreshCache: () => dispatch(refreshCache()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
