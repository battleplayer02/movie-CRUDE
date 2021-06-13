import React from 'react';

export default class MovieRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr scope="row">
        <td>{this.props.movieObj.title}</td>
        <td>{this.props.movieObj.genre.name}</td>
        <td>{this.props.movieObj.numberInStock}</td>
        <td>{this.props.movieObj.dailyRentalRate}</td>
        <td>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => this.props.onDelete(this.props.movieObj._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
