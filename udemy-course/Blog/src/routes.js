import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './containers/posts_index';
import PostNew from './containers/post_new';

const Greeting = () => {
  return <div>Hey There!</div>
}

export default (
// Map the root to App component
<Route path="/" component={App}>
  <IndexRoute component={PostsIndex} />
  <Route path="post/new" component={PostNew} />
</Route>
);
