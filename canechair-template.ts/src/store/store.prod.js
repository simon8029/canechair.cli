import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function CCPStore(initialState) {
  return createStore(rootReducer, initialState)
}
