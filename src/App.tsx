import React from "react";
import { Switch, withRouter, RouteComponentProps, RouteProps, Redirect } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withCookies, ReactCookieProps } from "react-cookie";
import { Helmet } from "react-helmet";
import { inject, observer } from "mobx-react";

import UserStore from "stores/user";

import LoginPage from "pages/login/LoginPage";
import UserPage from "pages/user/UserPage";

interface Props extends RouteComponentProps, ReactCookieProps {
  userStore?: UserStore;
}

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<{}>;
  role: string[] | string;
}

interface State {
  isLoading: boolean;
}

@inject("userStore")
@observer
class App extends React.Component<Props> {
  private UserStore = this.props.userStore! as UserStore;

  state = {
    isLoading: true,
  };

  PrivateRoute = ({ component: Component, ...other }: PrivateRouteProps) => {
    return (
      <Route
        {...other}
        render={(props: any) => {
          // if (this.state.isLoading) return null;

          if (!this.UserStore.IsLoggedIn) {
            return <Redirect to="/" />;
          }

          return <Component {...props} />;
        }}
      />
    );
  };

  render() {
    return (
      <Router>
        <Helmet>
          <title>Admin</title>
        </Helmet>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/user" component={UserPage} />
          {/* <this.PrivateRoute exact path="/user" role="Login" component={UserPage} /> */}
        </Switch>
      </Router>
    );
  }
}

export default withCookies(withRouter(App));
