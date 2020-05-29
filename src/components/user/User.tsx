/* eslint-disable no-restricted-globals */
import React, { useState, useCallback } from "react";
import styled from "styled-components";

import SearchIcon from "assets/icons/search.svg";
import UserItem from "./item";

interface Props {}

function User({}: Props) {
  const [selected, setSelected] = useState<number>();

  const selectUser = (id: number) => {
    if (selected === id) {
      setSelected(undefined);
    } else {
      setSelected(id);
    }
  };

  return (
    <Wrap>
      <ListWrap>
        <SearchBox>
          <select>
            <option>검색불가</option>
          </select>
          <input />
        </SearchBox>
        <div className="list">
          <TopList>
            <div style={{ width: "10%" }}>번호</div>
            <div style={{ width: "45%" }}>제목</div>
            <div style={{ width: "45%" }}>등록시간</div>
          </TopList>

          <UserItem selectUser={selectUser} selected={selected} />
        </div>
      </ListWrap>
      <DetailWrap>
        {selected! >= 0 && (
          <div>
            <div className="btn-wrap">
              <button>수정</button>
              <button>삭제</button>
            </div>
            <label>제목</label>
            <span>
              <input />
            </span>
            <label>내용</label>
            <span>
              <textarea />
            </span>
          </div>
        )}
      </DetailWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`;

const DetailWrap = styled.div`
  width: 33%;

  position: fixed;
  right: 20px;
  top: 90px;
  bottom: 20px;

  display: flex;
  flex-direction: column;

  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.14);
  border-radius: 5px;

  padding: 20px;

  & > div {
    display: flex;
    flex-direction: column;

    & > .btn-wrap {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      & > button {
        width: 72px;
        height: 32px;

        color: white;
        font-size: 14px;
        font-weight: bold;

        border-radius: 5px;

        background: ${({ theme }) => theme.colors.primary_color};

        margin-left: 10px;
      }
    }

    & > label {
      color: #666666;

      font-size: 14px;
      font-weight: bold;
      margin-bottom: 5px;
    }

    & > span {
      color: #888888;

      font-size: 14px;

      margin-bottom: 10px;
    }
  }
`;

const ListWrap = styled.div`
  width: 60%;
  margin-right: 20px;
`;

const SearchBox = styled.div`
  width: 100%;
  height: 60px;

  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.14);
  border-radius: 5px;

  display: flex;
  align-items: center;

  padding: 0 20px;

  margin-left: auto;

  margin-bottom: 20px;

  & > select {
    width: 10%;
    height: 40px;
    background: #ffffff;
    border: none;
    /* border-radius: 0px; */
    /* border-bottom: 1px solid #bbbbbb; */

    font-size: 14px;
    color: #888888;

    margin-right: 20px;
  }

  & > input {
    width: 90%;
    height: 40px;
    background: #ffffff;

    border: none;
    border-radius: 0px;
    border-bottom: 2px solid #dddddd;

    background: url(${SearchIcon});
    background-position: left;
    background-repeat: no-repeat;

    padding: 0 40px;

    :focus {
      border-bottom: 2px solid ${({ theme }) => theme.colors.primary_color};
    }
  }
`;

const TopList = styled.div`
  width: 100%;

  border-radius: 5px;

  display: flex;
  align-items: center;

  font-size: 18px;
  font-weight: bold;
  color: #888888;

  padding: 0 20px;

  margin-bottom: 16px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    & > button {
      width: 70%;
      height: 27px;

      font-size: 14px;
      font-weight: bold;
      color: #ffffff;

      border-radius: 5px;

      background: ${({ theme }) => theme.colors.primary_color};
    }
  }
`;
export default User;
