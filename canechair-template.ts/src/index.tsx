import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Store, { history } from 'store/store';
import '../node_modules/toastr/build/toastr.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from 'components/App';
import FourOhFour from 'components/CommonComponent/FourOhFour';

ReactDOM.render(
  <Provider store={Store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Redirect exact from="/" to="/Sample" />
        <Route path="/Sample" component={App} />
        <Route path="" component={FourOhFour} />

      </Switch>
    </ConnectedRouter >
  </Provider >,
  document.getElementById('root') as HTMLElement
);
