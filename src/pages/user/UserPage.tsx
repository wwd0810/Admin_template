import React from "react";

import BaseTemplate from "components/base/BaseTemplate";
import UserContainer from "containers/user/UserContainer";

function UserPage() {
  return (
    <BaseTemplate title="user">
      <UserContainer />
    </BaseTemplate>
  );
}

export default UserPage;
