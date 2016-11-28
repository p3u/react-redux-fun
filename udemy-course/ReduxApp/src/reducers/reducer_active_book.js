// State argunment is not app state,
// only the state this reducer is responsible for
// ES6 state = null means state defaults to null
export default function(state = null, action) {
  switch (action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }
  return state;
}
