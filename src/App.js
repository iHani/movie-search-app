import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import { queryMovies } from './actions/movies';
import NoResultFound from './components/NoResultFound'
import './App.css';

const posterPlaceHolder = '/placeholde.jpg';

class App extends Component {

  state = {
    status: undefined,
    query: '',
  }

  componentDidMount () {
    // fetch api & update the state

  }

  async updateQuery (query) {
    this.setState({ query, status: 'SEARCHING' });
    if (query.trim()) {
      const { type } = await this.props.queryMovies(query);
      this.setState({ status: type })
    } else {
      this.setState({ status: undefined })
    }
  }

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


          {!status && <h3>Ready to search</h3>}

          {status === 'NO_RESULT_FOUND' && <h3>No results found for: {query}</h3>}

          {status === 'SEARCHING' && <h3>Searching...</h3>}

          {status === 'FETCHED_MOVIES' && query.trim() && <h3 className="text-left">Results of: {query}</h3>}

          {status === 'FETCHED_MOVIES' && <div className="row">
            {query && movies && movies.map(movie => (
              <div key={movie.imdbID} className="card col-xs-5 col-sm-6 col-md-4 p-0" >
                <img className="card-img-top" src={movie.Poster || posterPlaceHolder} alt="" />
                <div className="card-body">
                  <h4 className="card-title">{movie.Title}</h4>
                </div>
              </div>
            ))}
          </div>}

        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ movies }) => ({
  movies,
});

const mapDispatchToProps = (dispatch) => ({
  queryMovies: (query) => dispatch(queryMovies(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
