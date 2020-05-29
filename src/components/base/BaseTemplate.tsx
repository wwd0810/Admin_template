import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import UserStore from "stores/user";
import { inject, observer } from "mobx-react";
import { withCookies, ReactCookieProps } from "react-cookie";
import { withRouter, RouteComponentProps } from "react-router";
import theme from "styles/theme";

interface Props extends ReactCookieProps, RouteComponentProps {
  userStore?: UserStore;
  title: string;
  children?: React.ReactNode;
}

const menus = [{ title: "유저관리", url: "/user", check: "user" }];

@inject("userStore")
@observer
class BaseTemplate extends React.Component<Props> {
  private UserStore = this.props.userStore! as UserStore;

  logout = () => {
    this.UserStore.logout();

    this.props.history.push("/");
  };

  items = () => {
    return menus.map((data, idx) => (
      <Link to={data.url} key={idx}>
        <span
          style={{
            color: this.props.title === data.check ? theme.colors.primary_color : "",
            background: this.props.title === data.check ? "#eeeeee" : "",
            borderLeft:
              this.props.title === data.check ? `4px solid ${theme.colors.primary_color}` : "",
          }}
        >
          {data.title}
        </span>
      </Link>
    ));
  };

  render() {
    return (
      <Wrap>
        <div className="header">
          <h2>
            NEEDS CLEAR<span style={{ marginLeft: "16px" }}>관리자</span>
          </h2>
          <button onClick={this.logout}>로그아웃</button>
        </div>
        <div className="left-menu">{this.items()}</div>
        <div className="content">{this.props.children}</div>
      </Wrap>
    );
  }
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;

  & > .header {
    width: 100%;
    height: 70px;

    position: fixed;
    top: 0px;
    left: 0px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: ${({ theme }) => theme.colors.primary_color};

    z-index: 999;

    padding: 0 20px;

    & > h2 {
      color: white;

      & > span {
        font-size: 18px;
      }
    }

    & > button {
      font-weight: bold;
      font-size: 16px;
      color: white;

      :hover {
        color: ${({ theme }) => theme.colors.secondary_color};
      }
    }
  }

  & > .left-menu {
    width: 250px;

    position: fixed;
    top: 70px;
    left: 0px;
    bottom: 0px;

    display: flex;
    flex-direction: column;

    background: #ffffff;
    box-shadow: 4px 0px 6px rgba(0, 0, 0, 0.07);

    & > a > span {
      width: 250px;
      height: 50px;

      display: flex;
      align-items: center;

      font-weight: bold;
      color: #888888;

      border-bottom: 1px solid #f2f2f2;

      padding: 0 20px;

      :hover {
        background: #eeeeee;
        border-left: 4px solid ${({ theme }) => theme.colors.secondary_color};
      }
    }
  }

  & > .content {
    position: absolute;
    top: 90px;
    bottom: 20px;
    left: 270px;
    right: 20px;

    /* padding: 20px; */
    padding-bottom: 0px;
  }
`;

export default withCookies(withRouter(BaseTemplate));
