import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import Store, { history } from 'store/store';
import '../node_modules/toastr/build/toastr.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CaneChairMain from 'components/CaneChairManagement/CaneChairMain';
import CaneChairDetail from 'components/CaneChairManagement/CaneChairDetail';

ReactDOM.render(
  <Provider store={Store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={CaneChairMain} />
        <Route exact path="/CaneChairs" component={CaneChairMain} />
        <Route exact path="/CaneChair" component={CaneChairDetail} />
        <Route exact path="/CaneChair/:CaneChairId" component={CaneChairDetail} />
      </Switch>
    </ConnectedRouter >
  </Provider>,
  document.getElementById('root') as HTMLElement
);
