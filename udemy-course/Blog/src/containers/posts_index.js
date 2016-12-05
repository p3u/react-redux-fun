import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.posts)
    return (
      <div> {this.props.posts.length > 0 ? this.props.posts[0].title : ""} </div>
    );
  }
}


function mapStateToProps({ posts }) {
  return {posts: posts.all}
}

/* { fetchPosts: fetchPosts } is a sugar syntax to remove the boilerplate to mapDispatchToProps:
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}
*/
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
