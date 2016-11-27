## What are reducers?
Reducers are just functions that return a piece of the app state  
## How to create and use a reducer?
1. Create a js file such as *reducer_books.js*  
Write a function that returns a piece of state such as:
`export default function() {
  return [
    {title: 'Javascript: The Good Parts'},
    {title: 'Corporate Finance'},
    {title: 'Habibi'},
    {title: 'Blankets'},
  ];
};
`

*This would be a very boring reducer since it would always return the same thing (which makes no sense for a state), but we can always make our function more interesting and dynamic.*  

2. Wire it to the root reducer  
On reducers/index.js import the reducer and add it to your rootReducer with combineReducers function:
`import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
`

3. Wire it to react
With react-redux, promote one of the components as a container (smart component)
