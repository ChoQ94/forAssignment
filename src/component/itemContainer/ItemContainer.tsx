import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  color: string;
}

export default function ItemContainer(props: Props) {
  const { color } = props;
  const [like, setLike] = useState<boolean | undefined>();

  const ItemWrapper = styled.div`
    height: 345px;
    width: 285px;
  `;

  const Button = styled.button`
    width: 135px;
    height: 45px;
    background-color: white;
    border: 1px solid black;
  `;

  return (
    <ItemWrapper>
      <div
        style={{
          width: "285px",
          height: "285px",
          backgroundColor: color,
          marginBottom: "15px",
        }}
      ></div>
      <div style={{ display: "flex", gap: "15px" }}>
        <Button onClick={() => setLike(true)}>좋아요</Button>
        <Button onClick={() => setLike(false)}>싫어요</Button>
      </div>
    </ItemWrapper>
  );
}
