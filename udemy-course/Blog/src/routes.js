import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './containers/posts_index';

const Greeting = () => {
  return <div>Hey There!</div>
}

export default (
// Map the root to App component
<Route path="/" component={App}>
  <IndexRoute component={PostsIndex} />
</Route>
);
