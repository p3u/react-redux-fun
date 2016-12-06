import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostNew extends Component {

  hasDanger = function(field) {
    return field.touched && field.invalid ? 'has-danger' : '';
  }

  render(){
    const { fields: {title, categories, content},
            handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h1>Create a New Post</h1>
        <div className={`form-group ${this.hasDanger(title)}`}>
          <label htmlFor="title">Title</label>
          <input className="form-control" name="title" type="text" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${this.hasDanger(categories)}`}>
          <label htmlFor="categories">Categories</label>
          <input className="form-control" name="categories" type="text" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${this.hasDanger(content)}`}>
          <label htmlFor="content">Content</label>
          <textarea className="form-control" name="content" type="text" {...content}/>
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <div className="button-group">
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </div>

      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title'
  }
  if (!values.categories) {
    errors.categories = 'Enter categories'
  }
  if(!values.content) {
    errors.content = 'Enter the content'
  }

  return errors;
}

// Works same as connect
// we can pass mapStateToProps and mapDispatchToProps on 2nd and 3rd args

export default reduxForm({
  form: 'PostNew',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost } )(PostNew);
