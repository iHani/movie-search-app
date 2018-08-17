import React, { Component } from 'react';
import './App.css';

const movies = [
  { id: 1, title: 'Spiderman' },
  { id: 2, title: 'Titanic' },
  { id: 3, title: 'The Island' },
  { id: 4, title: 'Pheladephia' },
  { id: 5, title: 'Borat' },
  { id: 6, title: 'Batman' },
  { id: 7, title: 'Fivth Element' },
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      width: 0,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  // componentDidMount () {
  // fetch api & update the state
  //
  // }

  componentWillMount () {
    this.setState({ width: window.innerWidth });
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions () {
    this.setState({ width: window.innerWidth });
  }

  updateQuery = (query) => {
    this.setState({ query });
    // throttle
    // check if query.length > 3
  }

  render() {
    const { query, width } = this.state;
    const columns = width <= 768 ? 6 : 4; // using Bootstrap's grid system

    return (
      <div className="text-center">
        <header className="header p-2">
          <h1>Movie Search App</h1>
        </header>

        <div className="container justify-content-center">

          <div className="input-group m-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Search</span>
            </div>
            <input name="search"
              type="text"
              className="form-control"
              onChange={event => this.updateQuery(event.target.value)}
              placeholder="movie title..."
              autoFocus
            />
          </div>

          <h3>Query: {query}</h3>

          <div className="row">
            {movies.map(movie => (
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

export default App;
