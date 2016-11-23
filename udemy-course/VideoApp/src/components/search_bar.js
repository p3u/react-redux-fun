import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onVideoSearch(this.state.term);
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })} />
          </form>
      </div>
    )
  }
}

export default SearchBar;
