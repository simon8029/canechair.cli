import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { CaneChairReducer } from './CaneChairReducer';

const rootReducer = combineReducers({
  routerReducer,
  CaneChairArray: CaneChairReducer
});

export default rootReducer;
