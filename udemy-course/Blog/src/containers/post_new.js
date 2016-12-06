import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostNew extends Component {
  render(){
    const { fields: {title, categories, content},
            handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input className="form-control" name="title" type="text" {...title} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input className="form-control" name="categories" type="text" {...categories} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <textarea className="form-control" name="content" type="text" {...content}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

// Works same as connect
// we can pass mapStateToProps and mapDispatchToProps on 2nd and 3rd args

export default reduxForm({
  form: 'PostNew',
  fields: ['title', 'categories', 'content']
}, null, { createPost } )(PostNew);
