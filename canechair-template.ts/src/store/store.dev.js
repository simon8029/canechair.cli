import { createStore, compose } from 'redux'
import rootReducer from '../reducers'

const enhancer = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

export default function CCPStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  return store;
}
