import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
    case FETCH_WEATHER:
      // ES6 syntax to extract an array and concat into another (Pure function)
      return [ action.payload.data, ...state ];
    }
    return state;
}
