import React from "react";
import { inject, observer } from "mobx-react";

import User from "components/user/User";

import UserStore from "stores/user";

interface Props {
  userStore?: UserStore;
}

@inject("userStore")
@observer
class UserContainer extends React.Component<Props> {
  private UserStore = this.props.userStore! as UserStore;

  async componentDidMount() {}

  insert = async () => {};

  update = async () => {};

  del = async () => {};

  render() {
    return <User />;
  }
}

export default UserContainer;
