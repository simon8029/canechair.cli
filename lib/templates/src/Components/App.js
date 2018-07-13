exports.app_tsx = `
import ___ComponentName___Details from 'Components/Sample/___ComponentName___Details';
import ___ComponentName___Main from 'Components/Sample/___ComponentName___Main';
import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { RouteComponentProps, withRouter } from 'react-router-dom';
// import { Dispatch } from 'redux';
// import { I___ComponentName___StateInterface } from 'Types/StateTypes/___ComponentName___StateType';
import { StoreStateType } from 'Types/StateTypes/StoreStateType';
// import * as StylesVariable from 'Styles/_variables';

class App extends React.Component<ThisPropsType, StoreStateType> {
  constructor(props: ThisPropsType) {
    super(props as any);
  }

  public render() {
    return (
      <div>
        <main className="">
          <Switch>
            <Route
              exact={true}
              path="/Sample/___ComponentName___s"
              component={___ComponentName___Main}
            />
            <Route
              exact={true}
              path="/Sample/___ComponentName___"
              component={___ComponentName___Details}
            />
            <Route
              exact={true}
              path="/Sample/___ComponentName___/:___ComponentName___Id"
              component={___ComponentName___Details}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

function mapStateToProps(state: StoreStateType): StoreStateType {
  return {
    ___ComponentName___Module: state.___ComponentName___Module
  };
}
// function mapDispatchToProps(dispatch: Dispatch<any>): IDispatchToProps {
//	 return {};
// }
// interface IThisState extends StoreStateType {}
// interface IStateToProps {}
// interface IOwnPropsInterface extends RouteComponentProps<any> {}
// interface IDispatchToProps {
//	 actions: typeof ___ComponentName___Actions;
// }
interface ThisPropsType
  extends StoreStateType,
    // IDispatchToProps,
    RouteComponentProps<any> {}
export default withRouter(
  connect<StoreStateType, undefined, RouteComponentProps<any>>(
    mapStateToProps
    // mapDispatchToProps
  )(App)
);
`;
