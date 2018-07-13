exports.Content = `
import rootReducer from 'Reducers/RootReducer';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk from 'redux-thunk';
// import createHistory from 'history/createBrowserHistory';
// import { routerMiddleware } from 'react-router-redux';

// export const history = createHistory();

const Store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      Thunk
      // routerMiddleware(history)
    )
  )
);

export default Store;
`;

exports.extension = 'ts';
