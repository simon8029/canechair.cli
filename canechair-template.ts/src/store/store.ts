import rootReducer from 'reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

export const history = createHistory();

const Store = createStore(
    rootReducer,
    // initStore,
    composeWithDevTools(
        applyMiddleware(Thunk, routerMiddleware(history))
    )
);

export default Store;
