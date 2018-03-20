import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { CaneChairModel } from 'types/modelTypes/CaneChairModel';
import ICaneChairAction from 'actions/interfaces/ICaneChairAction';
import * as CaneChairActions from 'actions/CaneChairActions';
import StoreStateType from 'types/StateTypes/StoreStateType';
import * as toastr from 'toastr';
import CaneChairList from './CaneChairList';

class CaneChairManagement extends React.Component<ThisPropsType, ThisStateType> {
  constructor(props: ThisPropsType) {
    super(props as any);
    this.state = {
      CaneChairArray: this.props.CaneChairArray
    };
  }

  render() {
    return (
      <div className="container my-3">
        <Link to="/Sample/CaneChair" className="btn btn-outline-primary btn-sm my-3" >Add New Chair </Link>
        <CaneChairList
          CaneChairArray={this.state.CaneChairArray}
          onCaneChairDelete={this.onCaneChairDelete}
        />
      </div>
    );
  }

  componentWillMount() {
    //
  }

  componentDidMount() {
    //
    this.props.actions.getAllCaneChair();
  }

  componentWillReceiveProps(nextProps: StateToPropsType) {
    this.setState({ CaneChairArray: nextProps.CaneChairArray });
  }

  componentDidUpdate() {
    //
  }

  onCaneChairDelete = (CaneChair: CaneChairModel) => {
    this.props.actions.deleteCaneChair(CaneChair)
      .then(() => {
        toastr.success('CaneChair deleted.');
      });
  }
}

function mapStateToProps(storeState: StoreStateType, ownProps: OwnProps): StateToPropsType {
  return {
    CaneChairArray: storeState.CaneChairArray
  };
}

function mapDispatchToProps(dispatch: Dispatch<ICaneChairAction>): DispatchToPropsType {
  return {
    actions: bindActionCreators(CaneChairActions, dispatch)
  };
}

type ThisStateType = {
  CaneChairArray: CaneChairModel[]
};

type StateToPropsType = {
  CaneChairArray: CaneChairModel[];
};

type DispatchToPropsType = {
  actions: typeof CaneChairActions;
};

type RCProps = RouteComponentProps<{ id: number }>;

type OwnProps = {
} & RCProps;

type ThisPropsType = StateToPropsType & DispatchToPropsType & OwnProps;

export default withRouter(connect<StateToPropsType, DispatchToPropsType, OwnProps>(mapStateToProps, mapDispatchToProps)(CaneChairManagement));
