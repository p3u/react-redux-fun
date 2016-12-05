# What was built during this project?
Built a controlled component (SearchBar)  
Hooked it up with a action creator (fetchWeather)  
Inside of the action creator, made Ajax request with axios to openweathermap API
Send the payload (a promise) to middlewares
Used reduce-promise middleware to resolve our promises and send it to reducers
Rendered the weather data on a new react component using Sparklines

# What did I skip in this project?  
Using google maps API + maps component to render a map of each city  
The reason I skipped was because I figured it wasn't very related to react itself and I've connected to google maps api many times before.

# Redux Lessons Learned
1. Using a constant to define action type reduces changes of typo when connecting it to the reducers
2. Using middlewares (reduce-promise in this case).
3. Never ever modify our state directly (always use pure functions in your reducers)

# More on Middlewares
As always, Middlewares are just functions.  
They are the gate keepers of Redux.  
All actions that are created flow through them.  
They inspect any action and manipulate them before sending them to reducers.  
In this project, the middleware reduce-promise.js.  

## What does reduce-promise.js do?
1. Watches every payload
2. If it's a promise it stops the action
3. Wait for the promise to resolve
4. Sends to the reducers

How to use it?  
```
import ReduxPromise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
```
