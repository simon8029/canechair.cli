exports.RootReducer_ts = `
import { combineReducers } from 'redux';
import { ___ComponentName___Reducer } from './___ComponentName___Reducer';

const rootReducer = combineReducers({
  ___ComponentName___Module: ___ComponentName___Reducer
});

export default rootReducer;

`;
