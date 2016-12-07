import React, { Component } from 'react';
import {FETCH_POST, fetchPost} from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Post from '../components/post';
import { Link } from 'react-router'

class PostShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id)
  }

  render() {
    let postComponent = <div> Loading...</div>;
    if (this.props.post) {
      postComponent = <Post postData={this.props.post} />;
    }

    return (
      <div>
        <div className="button-group text-right">
          <Link to="/" className="btn btn-default">
            Back to Index
          </Link>
        </div>
        {postComponent}
      </div>
    )

  }
}

function mapStateToProps(state) {
  return {post: state.posts.post}
}

export default connect(mapStateToProps, { fetchPost })(PostShow);
