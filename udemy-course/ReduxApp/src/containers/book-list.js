import React, { Component } from 'react';
import { connect } from 'react-redux'; // This is what connects react to redux
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

//Just a regular component so far (expecting to receive books props)
class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render(){
    console.log(this)
    return (
      <ul className="list-grouo col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// A function that receives the whole app state and filters
// what we want to pass to BookList component
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// A function that connects the state filter above with the component.
// Making it a SMART component :)
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
