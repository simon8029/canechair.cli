exports.Main_tsx = `
import * as ___ComponentName___Actions from 'Actions/___ComponentName___Actions';
import I___ComponentName___Action from 'Actions/Interfaces/I___ComponentName___Action';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { ___ComponentName___Model } from 'Types/ModelTypes/___ComponentName___Model';
import StoreStateType from 'Types/StateTypes/StoreStateType';
import ___ComponentName___List from './___ComponentName___List';

class ___ComponentName___Main extends React.Component<
  IThisPropsInterface,
  IThisStateInterface
> {
  constructor(props: IThisPropsInterface) {
    super(props as any);
    this.state = {
      ___ComponentName___Array: props.___ComponentName___Array
    };
  }

  public render() {
    return (
      <div className="container my-3">
        <Link
          to="/Sample/___ComponentName___"
          className="btn btn-outline-primary btn-sm my-3"
        >
          Add New Chair{' '}
        </Link>
        <___ComponentName___List
          ___ComponentName___Array={this.state.___ComponentName___Array}
          on___ComponentName___Delete={this.on___ComponentName___Delete}
        />
      </div>
    );
  }

  public componentWillMount() {
    //
  }

  public componentDidMount() {
    this.props.actions.getAll___ComponentName___();
  }

  public componentWillReceiveProps(nextProps: IStateToPropsInterface) {
    this.setState({ ___ComponentName___Array: nextProps.___ComponentName___Array });
  }

  public componentDidUpdate() {
    //
  }

  private on___ComponentName___Delete = (___ComponentName___: ___ComponentName___Model) => {
    this.props.actions.delete___ComponentName___(___ComponentName___).then(() => {
      //
    });
  };
}

function mapStateToProps(
  storeState: StoreStateType,
  ownProps: OwnProps
): IStateToPropsInterface {
  return {
    ___ComponentName___Array: storeState.___ComponentName___Module.___ComponentName___Array
  };
}

function mapDispatchToProps(
  dispatch: Dispatch<I___ComponentName___Action>
): IDispatchToPropsInterface {
  return {
    actions: bindActionCreators(___ComponentName___Actions, dispatch)
  };
}

interface IThisStateInterface {
  ___ComponentName___Array: ___ComponentName___Model[];
}

interface IStateToPropsInterface {
  ___ComponentName___Array: ___ComponentName___Model[];
}

interface IDispatchToPropsInterface {
  actions: typeof ___ComponentName___Actions;
}

type RCProps = RouteComponentProps<{ id: number }>;

type OwnProps = {} & RCProps;

type IThisPropsInterface = IStateToPropsInterface &
  IDispatchToPropsInterface &
  OwnProps;

export default withRouter(
  connect<IStateToPropsInterface, IDispatchToPropsInterface, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
  )(___ComponentName___Main)
);
`;
