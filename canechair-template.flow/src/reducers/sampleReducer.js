import * as ActionTypes from '../actions/ActionTypes';


export default function sampleReducer(state = false, action) {
  switch (action.type) {
    case ActionTypes.RETURN_TRUE:
      return true;

    default:
      return state;
  }
}
