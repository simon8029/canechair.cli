import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Store from 'store/store';
import { CaneChairModel } from 'types/modelTypes/CaneChairModel';
import ICaneChairAction from 'actions/interfaces/ICaneChairAction';
import * as CaneChairActions from 'actions/CaneChairActions';
import StoreStateType from 'types/StateTypes/StoreStateType';
import CCTextField from 'components/CommonComponent/CCTextField';
import * as toastr from 'toastr';
const UUID = require('uuid/v4');

class CaneChairDetail extends React.Component<ThisPropsType, ThisStateType> {
  constructor(props: StateToPropsType) {
    super(props as any);
    this.state = {
      CaneChairArray: this.props.CaneChairArray,
      currentCaneChair: this.props.currentCaneChair,
      errors: [],
      isNewCaneChair: this.props.isNewCaneChair,
      isFormSaving: false,
      textFields: {
        id: (this.props.currentCaneChair.id !== undefined) ? this.props.currentCaneChair.id : '',
        CaneChairName: (this.props.currentCaneChair.CaneChairName !== undefined) ? this.props.currentCaneChair.CaneChairName : '',
        CaneChairDescription: (this.props.currentCaneChair.CaneChairDescription !== undefined) ? this.props.currentCaneChair.CaneChairDescription : ''
      },
      textFieldsErrors: {}
    };
  }

  render() {
    return (
      <div className="container mt-3">
        <form onSubmit={this.onFormSubmit}>
          <div id="" className="">
            <input type="button" className="btn btn-outline-warning btn-sm" onClick={() => { this.props.history.push('/CaneChairs'); }} value={'<= Go Back'} />
            <input
              type="submit"
              className="btn btn-outline-success btn-sm mx-1 float-right"
              value={this.state.isNewCaneChair ? 'Add' : 'Update'}
            />
          </div>
          <h4 className="my-3">CaneChair</h4>
          <div className="">
            <div className="form-row">
              <div className="col">
                <CCTextField
                  fieldName="id"
                  label="CaneChair ID"
                  value={this.state.textFields.id}
                  onChange={this.onTextFieldChange}
                />
              </div>
              <div className="col">
                <CCTextField
                  fieldName="CaneChairName"
                  label="CaneChair Name"
                  value={this.state.textFields.CaneChairName}
                  isRequired={true}
                  isRequiredErrorMessage="CaneChair Name is required...."
                  onChange={this.onTextFieldChange}
                  validate={(value) => value.length > 2 ? false : 'CaneChair name cannot less than 3 letters.'}
                />
              </div>
              <div className="col">
                <CCTextField
                  fieldName="CaneChairDescription"
                  label="Description"
                  value={this.state.textFields.CaneChairDescription}
                  isRequired={false}
                  isRequiredErrorMessage=""
                  onChange={this.onTextFieldChange}
                  validate={(value) => value.length < 300 ? false : 'Description should less than 300 characters.'}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }

  componentWillMount() {
    // Store.dispatch(CaneChairActions.getAllCaneChairs());
  }

  componentDidMount() {
    // if the component is loaded through browser url instead of <Link>, reload all data
    if (this.state.CaneChairArray.length === 0) {
      Store.dispatch(CaneChairActions.getAllCaneChair());
    }
  }

  componentWillReceiveProps(nextProps: StateToPropsType) {
    console.log(`nextProps:`);
    console.log(nextProps);
    // Set current selected CaneChair to state
    if (nextProps.currentCaneChair !== undefined) {
      this.setState({
        currentCaneChair: Object.assign({}, nextProps.currentCaneChair),
        textFields: {
          id: nextProps.currentCaneChair.id ? nextProps.currentCaneChair.id : '',
          CaneChairName: nextProps.currentCaneChair.CaneChairName ? nextProps.currentCaneChair.CaneChairName : '',
          CaneChairDescription: nextProps.currentCaneChair.CaneChairDescription ? nextProps.currentCaneChair.CaneChairDescription : ''
        }
      });
    }
    this.setState({ CaneChairArray: nextProps.CaneChairArray });
  }

  componentDidUpdate() {
    //

  }

  onTextFieldChange = (fieldName: string, value: string, error: string | boolean) => {
    const textFields = this.state.textFields;
    const textFieldsErrors = this.state.textFieldsErrors;

    textFields[fieldName] = value;
    textFieldsErrors[fieldName] = error;

    this.setState({ textFields, textFieldsErrors });
  }

  onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const CaneChair: CaneChairModel = new CaneChairModel();
    CaneChair.id = this.state.textFields.id ? this.state.textFields.id : UUID();
    CaneChair.CaneChairName = this.state.textFields.CaneChairName;
    CaneChair.CaneChairDescription = this.state.textFields.CaneChairDescription;

    if (!this.isFormValid()) {
      return;
    }

    this.setState({ isFormSaving: true });

    if (this.state.isNewCaneChair) {
      this.props.actions.addNewCaneChair(CaneChair)
        .then((res: any) => {
          this.redirectToCaneChairsComponent();
        })
        .catch((error: string) => {
          this.catchError(error);
        });
    } else {
      this.props.actions.updateCaneChair(CaneChair)
        .then(() => {
          this.redirectToCaneChairsComponent();
        })
        .catch((error: string) => {
          this.catchError(error);
        });
    }
  }

  redirectToCaneChairsComponent() {
    this.setState({ isFormSaving: false });
    toastr.success(this.state.isNewCaneChair ? 'New CaneChair added.' : 'CaneChair updated.');
    this.props.history.push('/CaneChairs');
  }

  catchError(error: string) {
    this.setState({ isFormSaving: false });
    toastr.error(error);
  }

  isFormValid() {
    const textFields = this.state.textFields;
    const textFieldsErrors = this.state.textFieldsErrors;
    const errorMessages = Object.keys(textFieldsErrors).filter((k) => textFieldsErrors[k]);

    if (!textFields.CaneChairName) {
      return false;
    }

    if (errorMessages.length) {
      return false;
    }

    return true;
  }
}

function getCaneChairById(CaneChairs: CaneChairModel[], CaneChairId: string) {
  const CaneChair = CaneChairs.filter((s: CaneChairModel) => s.id === CaneChairId);
  if (CaneChair) { return CaneChair[0]; }
  return new CaneChairModel();
}

function mapStateToProps(storeState: StoreStateType, ownProps: OwnProps): StateToPropsType {
  const CaneChairId = ownProps.match.params.CaneChairId;
  let currentCaneChair = new CaneChairModel();
  let isNewCaneChair = CaneChairId === undefined;

  if (CaneChairId && storeState.CaneChairArray.length > 0) {
    currentCaneChair = getCaneChairById(storeState.CaneChairArray, CaneChairId);
    isNewCaneChair = false;
  }

  return {
    CaneChairArray: storeState.CaneChairArray,
    currentCaneChair: currentCaneChair,
    isNewCaneChair: isNewCaneChair
  };
}

function mapDispatchToProps(dispatch: Dispatch<ICaneChairAction>): DispatchToPropsType {
  return {
    actions: bindActionCreators(CaneChairActions, dispatch)
  };
}

type ThisStateType = {
  CaneChairArray: Array<CaneChairModel>;
  currentCaneChair: CaneChairModel;
  errors: string[],
  isNewCaneChair: boolean,
  isFormSaving: boolean;
  textFields: {
    id: string;
    CaneChairName: string;
    CaneChairDescription: string;
  },
  textFieldsErrors: {}
};

type StateToPropsType = {
  CaneChairArray: Array<CaneChairModel>;
  currentCaneChair: CaneChairModel;
  errors?: Object;
  isNewCaneChair: boolean;
  isFormSaving?: boolean;
};

type DispatchToPropsType = {
  actions: typeof CaneChairActions;
};

type RCProps = RouteComponentProps<{ CaneChairId: string }>;

type OwnProps = {
} & RCProps;

type ThisPropsType = StateToPropsType & DispatchToPropsType & OwnProps;

export default withRouter(connect<StateToPropsType, DispatchToPropsType, OwnProps>(mapStateToProps, mapDispatchToProps)(CaneChairDetail));
