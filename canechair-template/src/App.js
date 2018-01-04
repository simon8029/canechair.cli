import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AppActions from './actions/AppActions';
class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = props.state;
    this.actions = props.actions;
  }

  render() {
    return (
      <div>
        CaneChair is rocking!
    </div>
    );
  }
}
App.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(store, ownProps) {
  return {
    state: store
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
