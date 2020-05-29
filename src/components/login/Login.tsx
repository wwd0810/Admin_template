import React, { useState, useCallback } from "react";
import styled from "styled-components";
// import ParticlesBg from "particles-bg";

import UserIcon from "assets/icons/user.svg";
import PWIcon from "assets/icons/lock.svg";

interface Props {
  login: (id: string, pw: string) => void;
}

function Login({ login }: Props) {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const onLogin = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();

      if (id && pw) {
        login(id, pw);
      } else if (!id) {
        alert("아이디를 입력해주세요.");
      } else {
        alert("비밀번호를를 입력해주세요.");
      }
    },
    [id, login, pw],
  );

  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { value } = e.target;

    setId(value);
  }, []);

  const onChangePw = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { value } = e.target;

    setPw(value);
  }, []);

  return (
    <Wrap>
      <LoginWrap className="login-wrap">
        <div>COMPANY NAME</div>
        <form>
          <h1>로그인</h1>
          <input
            className="user"
            type="text"
            placeholder="아이디를 입력해주세요."
            value={id}
            onChange={onChangeId}
          />
          <input
            className="pw"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={pw}
            onChange={onChangePw}
          />
          <button onClick={onLogin}>로그인</button>

          <p>아이디(ID) / 비밀번호를 분실하신 경우 총 책임자에게 문의해주시기 바랍니다.</p>
        </form>
      </LoginWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  /* background: #00bbcc; */
  background: #eeeeee;

  position: absolute;
  z-index: -1;
`;

const LoginWrap = styled.div`
  width: 960px;
  height: 660px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;

  background: white;

  border-radius: 20px;

  & > div {
    width: 100%;
    height: 100%;
    /* display: flex; */
    background: ${({ theme }) => theme.colors.primary_color};

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;

    font-size: 48px;
    font-weight: bold;

    border-radius: 20px 0px 0px 20px;

    padding: 30px;
  }

  & > form {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 30px;

    & > p {
      display: flex;
      justify-content: center;

      font-size: 14px;
      color: #888888;

      margin-top: 72px;
    }

    & > h1 {
      font-size: 36px;
      font-weight: bold;

      color: #888888;
    }

    & > input {
      width: 100%;
      height: 50px;
      background: white;

      border-radius: 0px;
      border: none;

      font-size: 14px;
      color: #444444;

      padding: 0 36px;

      margin-bottom: 36px;

      border-bottom: 2px solid #dddddd;

      :focus {
        border-bottom: 2px solid ${({ theme }) => theme.colors.primary_color};
      }
    }

    & > .user {
      background: url(${UserIcon});
      background-position: left;
      background-repeat: no-repeat;
    }

    & > .pw {
      background: url(${PWIcon});
      background-position: left;
      background-repeat: no-repeat;
    }

    & > button {
      width: 100%;
      height: 60px;
      background: ${({ theme }) => theme.colors.primary_color};

      font-size: 18px;
      font-weight: bold;
      color: white;
      margin-top: 50px;
      border-radius: 5px;
    }
  }
`;

export default Login;
