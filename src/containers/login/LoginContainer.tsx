import React from "react";
import { inject, observer } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router";
import { withCookies, ReactCookieProps } from "react-cookie";

import Login from "components/login";
import UserStore from "stores/user";

interface Props extends RouteComponentProps, ReactCookieProps {
  userStore?: UserStore;
}

@inject("userStore")
@observer
class LoginContainer extends React.Component<Props> {
  private UserStore = this.props.userStore! as UserStore;

  login = async (id: string, pw: string) => {
    await this.UserStore.login(id, pw);

    if (this.UserStore.success["LOGIN"]) {
      this.props.history.push("/user");
    } else {
      if (this.UserStore.failure["LOGIN"][0]) {
        alert("아이디와 비밀번호를 확인해주세요.");
      }
    }
  };

  render() {
    return <Login login={this.login} />;
  }
}

export default withCookies(withRouter(LoginContainer));
