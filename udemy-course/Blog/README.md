# ReactRouter
Whenever the URL changes, history library listens to the change and send the new URL to ReactRouter  

ReactRouter matches the route with a set of components and send it to React  

React  renders the componenets to the screen.

## How to hook it up?
Create a routes.js file with the mapping:
```
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Greeting from './componenets/greeting';

export default (
<Route path="/" component={App}>
	<IndexRoute component={Index} />
  <Route path="greet" component={Greeting} />
</Route>
);
```
Note: The greet Route is nested inside / Route.  
Note2: IndexRoute is the default if nothing else is passed after the parent Route.

On index.js, create the Router component inside your root component:  
```
import { Router, browserHistory }  from 'react-router';
import routes from './routes.js';

<Router history={browserHistory} routes={routes} />
```

Now `http:domain.com/` will render the App component and `http:domain.com/greet` will render the App componenet with the Greet componenet as its child.
