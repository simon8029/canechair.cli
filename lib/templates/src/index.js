exports.index_js = `
import App from 'Components/App';
import FourOhFour from 'Components/Common/FourOhFour';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Store from 'Store/Store';

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Switch>
        <Redirect exact={true} from="/" to="/Sample/CaneChairs" />
        <Route path="/Sample" component={App} />
        <Route path="" component={FourOhFour} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
`;
