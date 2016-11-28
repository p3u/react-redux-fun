#Reducers

## What are reducers?
Reducers are just functions that return a piece of the app state  
## How to create and use a reducer?
1. Create a js file such as *reducer_books.js*  
Write a function that returns a piece of state such as:
```export default function() {
  return [
    {title: 'Javascript: The Good Parts'},
    {title: 'Corporate Finance'},
    {title: 'Habibi'},
    {title: 'Blankets'},
  ];
};
```

*This would be a very boring reducer since it would always return the same thing (which makes no sense for a state), but we can always make our function more interesting and dynamic.*  

2. Wire it to the root reducer  
On reducers/index.js import the reducer and add it to your rootReducer with combineReducers function:
```import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
```

3. Wire it to react
With react-redux, promote one of the components as a container (smart component)
**You should promote the most parent component that should be aware of the state**

 ```
 // This is what connects react to redux
 import { connect } from 'react-redux';

 //Just a regular component so far (expecting to receive books props)
 class BookList extends Component {
	 let books = this.props.books;
   renderList(){
     ...
   }

   render(){
     ...
   }
 }

 // A function that receives the whole app state and filters
 // what we want to pass to BookList component
 function mapStateToProps(state) {
   return {
     books: state.books
   };
 }

 // Dispatch will be explained later on
 function mapDispatchToProps(dispatch) {
   return bindActionCreators({ selectBook: selectBook }, dispatch);
 }

 // Using the connect function making it a SMART component :)
 export default connect(mapStateToProps, mapDispatchToProps)(BookList);  
```
#Action Creators

##What are Action Creators?
Action creators are functions that dispatch actions to the reducers to see if they have to change the app state

##How to create Action Creators?
1. Create a js file such as *actions/index.js*  
```
export function selectBook(book) {
  console.log(book.title);
}
```
2. Wire that function to a component
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
# The Redux flow:
1. User interects with page
2. Action creator is called
3. Action is sent to all reducers
4. Each reducers decides if the action is relevant
5. If so, the reducer returns a new piece of state
6. The new state is propagated to all the containers
7. Containers are re-rendered with the new props
