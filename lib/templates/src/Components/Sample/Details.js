exports.Details_tsx = `
import * as ___ComponentName___Actions from 'Actions/___ComponentName___Actions';
import I___ComponentName___Action from 'Actions/Interfaces/I___ComponentName___Action';
import CCTextField from 'Components/Common/CCTextField';
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import Store from 'Store/Store';
import { ___ComponentName___Model } from 'Types/ModelTypes/___ComponentName___Model';
import StoreStateType from 'Types/StateTypes/StoreStateType';
import { v4 } from 'uuid';

class ___ComponentName___Detail extends React.Component<ThisPropsType, ThisStateType> {
  constructor(props: StateToPropsType) {
    super(props as any);
    this.state = {
      ___ComponentName___Array: this.props.___ComponentName___Array,
      current___ComponentName___: this.props.current___ComponentName___,
      errors: [],
      isFormSaving: false,
      isNew___ComponentName___: this.props.isNew___ComponentName___,
      textFields: {
        ___ComponentName___Description:
          this.props.current___ComponentName___.___ComponentName___Description !== undefined
            ? this.props.current___ComponentName___.___ComponentName___Description
            : '',
        ___ComponentName___Name:
          this.props.current___ComponentName___.___ComponentName___Name !== undefined
            ? this.props.current___ComponentName___.___ComponentName___Name
            : '',
        id:
          this.props.current___ComponentName___.id !== undefined
            ? this.props.current___ComponentName___.id
            : ''
      },
      textFieldsErrors: {}
    };
  }

  public render() {
    return (
      <div className="container mt-3">
        <form onSubmit={this.onFormSubmit}>
          <div id="" className="">
            <input
              type="button"
              className="btn btn-outline-warning btn-sm"
              onClick={() => {
                this.props.history.push('/Sample/___ComponentName___s');
              }}
              value={'<= Go Back'}
            />
            <input
              type="submit"
              className="btn btn-outline-success btn-sm mx-1 float-right"
              value={this.state.isNew___ComponentName___ ? 'Add' : 'Update'}
            />
          </div>
          <h4 className="my-3">___ComponentName___</h4>
          <div className="">
            <div className="form-row">
              <div className="col">
                <CCTextField
                  fieldName="id"
                  label="___ComponentName___ ID"
                  value={this.state.textFields.id}
                  onChange={this.onTextFieldChange}
                />
              </div>
              <div className="col">
                <CCTextField
                  fieldName="___ComponentName___Name"
                  label="___ComponentName___ Name"
                  value={this.state.textFields.___ComponentName___Name}
                  isRequired={true}
                  isRequiredErrorMessage="___ComponentName___ Name is required...."
                  onChange={this.onTextFieldChange}
                  validate={(value) =>
                    value.length > 2
                      ? false
                      : '___ComponentName___ name cannot less than 3 letters.'
                  }
                />
              </div>
              <div className="col">
                <CCTextField
                  fieldName="___ComponentName___Description"
                  label="Description"
                  value={this.state.textFields.___ComponentName___Description}
                  isRequired={false}
                  isRequiredErrorMessage=""
                  onChange={this.onTextFieldChange}
                  validate={(value) =>
                    value.length < 300
                      ? false
                      : 'Description should less than 300 characters.'
                  }
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }

  public componentWillMount() {
    //
  }

  public componentDidMount() {
    // if the component is loaded through browser url instead of <Link>, reload all data
    if (this.state.___ComponentName___Array.length === 0) {
      Store.dispatch(___ComponentName___Actions.getAll___ComponentName___());
    }
  }

  public componentWillReceiveProps(nextProps: StateToPropsType) {
    // Set current selected ___ComponentName___ to state
    if (nextProps.current___ComponentName___ !== undefined) {
      this.setState({
        current___ComponentName___: { ...nextProps.current___ComponentName___ },
        textFields: {
          ___ComponentName___Description: nextProps.current___ComponentName___.___ComponentName___Description
            ? nextProps.current___ComponentName___.___ComponentName___Description
            : '',
          ___ComponentName___Name: nextProps.current___ComponentName___.___ComponentName___Name
            ? nextProps.current___ComponentName___.___ComponentName___Name
            : '',
          id: nextProps.current___ComponentName___.id ? nextProps.current___ComponentName___.id : ''
        }
      });
    }
    this.setState({ ___ComponentName___Array: nextProps.___ComponentName___Array });
  }

  public componentDidUpdate() {
    //
  }

  public onTextFieldChange = (
    fieldName: string,
    value: string,
    error: string | boolean
  ) => {
    const textFields = this.state.textFields;
    const textFieldsErrors = this.state.textFieldsErrors;

    textFields[fieldName] = value;
    textFieldsErrors[fieldName] = error;

    this.setState({ textFields, textFieldsErrors });
  };

  public onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ___ComponentName___: ___ComponentName___Model = new ___ComponentName___Model();
    ___ComponentName___.id = this.state.textFields.id ? this.state.textFields.id : v4();
    ___ComponentName___.___ComponentName___Name = this.state.textFields.___ComponentName___Name;
    ___ComponentName___.___ComponentName___Description = this.state.textFields.___ComponentName___Description;

    if (!this.isFormValid()) {
      return;
    }

    this.setState({ isFormSaving: true });

    if (this.state.isNew___ComponentName___) {
      this.props.actions
        .add___ComponentName___(___ComponentName___)
        .then((res: any) => {
          this.redirectTo___ComponentName___sComponent();
        })
        .catch((error: string) => {
          this.catchError(error);
        });
    } else {
      this.props.actions
        .update___ComponentName___(___ComponentName___)
        .then(() => {
          this.redirectTo___ComponentName___sComponent();
        })
        .catch((error: string) => {
          this.catchError(error);
        });
    }
  };

  public redirectTo___ComponentName___sComponent() {
    this.setState({ isFormSaving: false });
    this.props.history.push('/Sample/___ComponentName___s');
  }

  public catchError(error: string) {
    this.setState({ isFormSaving: false });
  }

  public isFormValid() {
    const textFields = this.state.textFields;
    const textFieldsErrors = this.state.textFieldsErrors;
    const errorMessages = Object.keys(textFieldsErrors).filter(
      (k) => textFieldsErrors[k]
    );

    if (!textFields.___ComponentName___Name) {
      return false;
    }

    if (errorMessages.length) {
      return false;
    }

    return true;
  }
}

function get___ComponentName___ById(___ComponentName___s: ___ComponentName___Model[], ___ComponentName___Id: string) {
  const ___ComponentName___ = ___ComponentName___s.filter(
    (s: ___ComponentName___Model) => s.id === ___ComponentName___Id
  );
  if (___ComponentName___) {
    return ___ComponentName___[0];
  }
  return new ___ComponentName___Model();
}

function mapStateToProps(
  storeState: StoreStateType,
  ownProps: OwnProps
): StateToPropsType {
  const ___ComponentName___Id = ownProps.match.params.___ComponentName___Id;
  let current___ComponentName___ = new ___ComponentName___Model();
  let isNew___ComponentName___ = ___ComponentName___Id === undefined;

  if (___ComponentName___Id && storeState.___ComponentName___Module.___ComponentName___Array.length > 0) {
    current___ComponentName___ = get___ComponentName___ById(
      storeState.___ComponentName___Module.___ComponentName___Array,
      ___ComponentName___Id
    );
    isNew___ComponentName___ = false;
  }

  return {
    ___ComponentName___Array: storeState.___ComponentName___Module.___ComponentName___Array,
    current___ComponentName___,
    isNew___ComponentName___
  };
}

function mapDispatchToProps(
  dispatch: Dispatch<I___ComponentName___Action>
): DispatchToPropsType {
  return {
    actions: bindActionCreators(___ComponentName___Actions, dispatch)
  };
}

interface ThisStateType {
  ___ComponentName___Array: ___ComponentName___Model[];
  current___ComponentName___: ___ComponentName___Model;
  errors: string[];
  isNew___ComponentName___: boolean;
  isFormSaving: boolean;
  textFields: {
    id: string;
    ___ComponentName___Name: string;
    ___ComponentName___Description: string;
  };
  textFieldsErrors: {};
}

interface StateToPropsType {
  ___ComponentName___Array: ___ComponentName___Model[];
  current___ComponentName___: ___ComponentName___Model;
  errors?: object;
  isNew___ComponentName___: boolean;
  isFormSaving?: boolean;
}

interface DispatchToPropsType {
  actions: typeof ___ComponentName___Actions;
}

// interface RCProps extends RouteComponentProps<{ ___ComponentName___Id: string }>;

interface OwnProps extends RouteComponentProps<{ ___ComponentName___Id: string }> {}

interface ThisPropsType
  extends StateToPropsType,
    DispatchToPropsType,
    OwnProps {}

export default withRouter(
  connect<StateToPropsType, DispatchToPropsType, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
  )(___ComponentName___Detail)
);
`;
