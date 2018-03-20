import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Route, Switch } from 'react-router';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import * as StylesVariable from 'Styles/_variables';
import CaneChairMain from 'components/CaneChairManagement/CaneChairMain';
import CaneChairDetail from 'components/CaneChairManagement/CaneChairDetail';
import { withStyles, WithStyles, StyleRules, Theme } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';

const decorate = withStyles((theme: Theme) => {
  const styles: StyleRules = {
    root: {
      flexGrow: 1,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      height: StylesVariable.AppHeaderHeight
    },
    appBar_title: {
      padding: StylesVariable.AppHeaderTitlePadding
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit,
      marginTop: StylesVariable.AppHeaderHeight
    },
  };
  return styles;
}, { withTheme: true });

export const App = decorate<ThisPropsType>(
  class InnerClass extends React.Component<ThisPropsType & WithStyles<'root' | 'appBar' | 'appBar_title' | 'content'>, ThisStateType> {
    constructor(props: ThisPropsType) {
      super(props as any);
      this.state = {
      };
    }

    render() {
      return (
        <div>
          <AppBar
            position="absolute"
            className={`${this.props.classes.appBar}`}
          >
            <Typography variant="title" color="inherit" className={this.props.classes.appBar_title} noWrap>
              CaneChair.Cli Sample
            </Typography>
          </AppBar>
          <main className={this.props.classes.content}>
            <Switch>
              <Route exact path="/Sample" component={CaneChairMain} />
              <Route exact path="/Sample/CaneChair" component={CaneChairDetail} />
              <Route exact path="/Sample/CaneChair/:CaneChairId" component={CaneChairDetail} />
            </Switch>
          </main>
        </div>
      );
    }
  }
);

function mapStateToProps(state: StateToPropsType): StateToPropsType {
  return {
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchToPropsType {
  return {
  };
}

type ThisStateType = {
};

type StateToPropsType = {
};

type OwnProps = RouteComponentProps<any>;

type DispatchToPropsType = {
};

type ThisPropsType = StateToPropsType & DispatchToPropsType & OwnProps;

export default withRouter(connect<StateToPropsType, DispatchToPropsType, OwnProps>(mapStateToProps, mapDispatchToProps)(App));
