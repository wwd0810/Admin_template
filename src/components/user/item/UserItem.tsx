import React, { useCallback } from "react";
import styled from "styled-components";
import theme from "styles/theme";

interface Props {
  selected?: number;
  selectUser: (id: number) => void;
}

function UserItem({ selectUser, selected }: Props) {
  const onClick = useCallback(
    (e: any) => {
      e.preventDefault();

      const { id } = e.currentTarget;

      selectUser(Number(id));
    },
    [selectUser],
  );

  return (
    <Wrap
      id="0"
      style={{ background: selected === 0 ? theme.colors.primary_color : "" }}
      onClick={onClick}
    >
      <div style={{ width: "10%" }}>1</div>
      <div style={{ width: "45%" }}>1</div>
      <div style={{ width: "45%" }}>1</div>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 50px;

  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.14);
  border-radius: 5px;

  display: flex;
  align-items: center;

  font-size: 18px;
  color: #888888;

  padding: 0 20px;

  margin-bottom: 16px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default UserItem;
