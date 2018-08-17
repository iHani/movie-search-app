import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { queryMovies } from './actions/movies';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: '',
      query: '',
      width: 0,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount () {
  // fetch api & update the state

  }

  componentWillMount () {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => this.setState({ width: window.innerWidth });

  updateQuery = (query) => {
    this.setState({ query });
    if (query.length > 3) {
      // throttle 300ms
      // this.props.queryMovies(query);
    }
  }

  render() {
    const { query, width } = this.state;
    const columns = width <= 768 ? 6 : 4; // Bootstrap's grid system (6=half, 4=third)

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
            <input name="search"
              type="text"
              className="form-control"
              onChange={({ target }) => this.updateQuery(target.value)}
              placeholder="movie title..."
              autoFocus
            />
          </div>
          <hr />
          {query.trim() && <h3 className="text-left">Results of: {query}</h3>}

          <div className="row">
            {this.props.movies.map(movie => (
              <div key={movie.id} className={`col-${columns}`}>
                {movie.title}
              </div>
            ))}
          </div>

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
