import React, { Component } from 'react';
import { getMovies } from './MovieService';
import MovieRow from './MovieRow';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: getMovies()
    };
  }
  handleSearch = e => {
    this.setState(prevState => ({
      movies: prevState.movies.filter(obj => obj.title.includes(e.target.value))
    }));
  };

  handelDelete = __id => {
    this.setState(prevState => {
      let newMovies = [];
      for (let i = 0; i < prevState.movies.length; i++) {
        if (prevState.movies[i]._id != __id) {
          newMovies.push(prevState.movies[i]);
        } else {
          console.log(false);
        }
      }
      console.log(newMovies.length, prevState.movies.length);
      console.log(newMovies);
      return { movies: newMovies };
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h1>Hello</h1>
          </div>
          <div className="col-9">
            <input type="text" onChange={this.handleSearch} />
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.state.movies.map(movieObj => (
                  <MovieRow movieObj={movieObj} onDelete={this.handelDelete} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
