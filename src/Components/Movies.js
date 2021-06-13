import React, { Component } from 'react';
import { getMovies } from './MovieService';
import MovieRow from './MovieRow';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: getMovies(),
      currentSearchText: ''
    };
  }

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
    //filter according to search string
    let filterArr = this.state.movies.filter(obj =>
      obj.title
        .toLowerCase()
        .includes(this.state.currentSearchText.toLowerCase())
    );

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-3 m-0 p-0">
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title">Select Genre</h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    G1
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label className="form-check-label" for="flexCheckChecked">
                    G2
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9 bg-light border">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Enter Search String
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={e =>
                  this.setState({
                    ...this.state,
                    currentSearchText: e.target.value
                  })
                }
              />
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {filterArr.map((movieObj, idx) => (
                  <MovieRow
                    idx={idx}
                    key={movieObj._id}
                    movieObj={movieObj}
                    onDelete={this.handelDelete}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
