import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    // Not necessary because I used arrow function below.
    // Just leaving here for reference.
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e){
    e.preventDefault();
    this.setState({term: e.target.value});
  }

  render() {
    return (
      <form className="input-group">
        <input
          placeholder="New York"
          onChange={(e) => this.onInputChange(e)}
          className="form-control"
          value={this.state.term} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
