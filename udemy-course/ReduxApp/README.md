# The Redux flow:
1. User interects with page
2. Action creator is called
3. Action is sent to all reducers
4. Each reducers decides if the action is relevant
5. If so, the reducer returns a new piece of state
6. The new state is propagated to all the containers
7. Containers are re-rendered with the new props

#Reducers

## What are reducers?
Reducers are just functions that return a piece of the app state  
They also listen to every action sent to them to decide if they should change the app state

## How to create and use a reducer?
__Create a js file such as *reducer_active_book.js*__  
Write a function that returns a piece of state such as:
```
export default function(state = null, action) {
  switch (action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }
  return state;
}
```

*This reducer listens to every action. If the action is type BOOK_SELECTED it will return the book that it was passed to him in the property payload*  

**Wire it to the root reducer**
On reducers/index.js import the reducer and add it to your rootReducer with combineReducers function:
```import { combineReducers } from 'redux';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  activeBook: ActiveBook
});

export default rootReducer;
```

**Wire it to react**
With react-redux, promote one of the components as a container (smart component)
*You should promote the most parent component that should be aware of the state*

 ```
 import React, { Component } from 'react';

 // This is what connects react to redux
 import { connect } from 'react-redux';

//Just a regular component so far
 class BookDetail extends Component {
   render() {
     return (
       <div>
			 	 // This book props is comming from the app state! See below.
         { this.props.book ? this.props.book.title : "Select a book" }
       </div>
     );
   }
 }

 // A function that receives the whole app state and filters
 // what we want to pass to BookDetail component
 function mapStateToProps(state) {
   return {
     book: state.activeBook
   };
 }



// Using the connect function making it a SMART component :)
 export default connect(mapStateToProps)(BookDetail);
```
#Action Creators

##What are Action Creators?
Action creators are functions that dispatch actions to the reducers to see if they have to change the app state

##How to create Action Creators?
_Create a js file such as *actions/index.js*_
```
export function selectBook(book) {
  console.log(book.title);
}
```
_Wire that function to a component_
```
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	...
}
function mapStateToProps(state) {
  return {
	...
}

/* Anything returned from this function will end up as props
	 on the BookList container
	 This let us call our action creator (selectBook) from inside the
	 container with this.props.selectBook(book); */
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result should be dispatched
	// to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);  

```

#Review points
0. Smart Components === Container
1. Redux is in charge of managing app state
2. State is just a JS script
3. App state is completly disconnected from component state
4. Application state is formed by reducers
5. All reducers are combined on a single one, the rootReducer, using `combineReducers` from `import 'redux'`
6. Actions are dispatched to all reducers via action creators.
7. Actions have a type and a paylod
8. To connnect an action creator with a component, you can use ```connect(mapDispatchToProps)(ComponentName)```
9. Reducers can respond to actions, changing the app state  
10. New state is injected into containers props with ```connect(mapStateToProps)(SmartComponentName)```
