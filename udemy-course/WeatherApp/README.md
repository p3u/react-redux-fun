# Recap Log
Build a controlled component (SearchBar)  
Hooked it up with a action creator (fetchWeather)  
Inside of the action creator, made Ajax request with axios to openweathermap API
Send the payload to middlewares and reducers with
```
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}
export default connect(null, mapDispatchToProps)(SearchBar)
```
Which allows us to call `this.fetchWeather(cityName)` inside of SearchBar  
Created a reducer to deal with the sent payload and alter app state.

# This context (arrow functions, bind)
# Controled Components
# Middlewares
As always, Middlewares are just functions.  
They are the gate keepers of Redux.  
All actions that are created flow through them.  
They inspect any action and manipulate them before sending them to reducers.  
They allow us to do some very interesting things such as:  

## Resolving promises using reduce-promise.js
What reduce-promise does is:
1. Watches every payload
2. If it's a promise it stops the action
3. Wait for the promise to resolve
4. Sends to the reducers

How to use it?  
```
import ReduxPromise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
```
