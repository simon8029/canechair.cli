import * as React from 'react';

class CCTextField extends React.Component<ThisProps, ThisState> {
  state = {
    value: this.props.value,
    hasError: false,
    errorMessage: ''
  };

  render() {
    return (
      <div className="form-group">
        < label
          htmlFor={this.props.fieldName}
          className={this.props.labelClassName ? this.props.labelClassName : 'mr-1'}
        >{this.props.label}
        </label>
        <input
          type=""
          id=""
          className={this.props.inputClassName ? this.props.inputClassName : 'form-control'}
          placeholder={this.props.placeholder ? this.props.placeholder : 'Input here...'}
          value={this.state.value}
          onChange={this.onChange}
        />
        <span id="" className={this.props.errorMessageClassName} style={{ color: 'red' }}>{this.state.errorMessage}</span>
      </div >
    );
  }

  componentWillReceiveProps(nextProps: ThisProps) {
    this.setState({ value: nextProps.value });
  }

  onChange = (event: any) => {
    const name = this.props.fieldName;
    const value = event.target.value;
    const error = this.props.validate ? this.props.validate(value) : false;
    if (this.props.isRequired) {
      if (value) {
        this.setState({ value, hasError: false, errorMessage: '' });
      } else {
        this.setState({ value, hasError: true, errorMessage: this.props.isRequiredErrorMessage });
      }
    }

    if (error) {
      this.setState({ value, hasError: true, errorMessage: error.toString() });
    }

    this.props.onChange(name, value, error);
  }
}

type ThisProps = {
  fieldName: string;
  label: string;
  value: string;
  placeholder?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorMessageClassName?: string;
  isRequired?: boolean;
  isRequiredErrorMessage?: string;
  onChange: (fieldName: string, value: string, error: string | boolean) => void;
  validate?: (value: string) => boolean | string;

};

type ThisState = {
  value: string;
  hasError: boolean;
  errorMessage?: string;
};

export default CCTextField;
