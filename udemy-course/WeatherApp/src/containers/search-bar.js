import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    // Not necessary because I used arrow function below.
    // Just leaving here for reference.
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e){
    this.setState({term: e.target.value});
  }

  onFormSubmit(e){
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
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



function mapDispatchToProps(dispatch) {
  // Guarantees that fetchWeather will be dispatched to the
  // and the Middlewares and eventually reducers
  return bindActionCreators({ fetchWeather }, dispatch)
}

// null because we are not mapping state to pros
export default connect(null, mapDispatchToProps)(SearchBar)
// With both these functions (connect + mapDispatchToProps)
// we can call fetchWeather from our SearchBar
