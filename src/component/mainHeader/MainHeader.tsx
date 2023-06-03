import React from "react";

import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 1110px;
  height: 83px;
  margin: 60px auto 30px;
  background-color: #323232;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function MainHeader() {
  return (
    <HeaderWrapper>
      <p
        style={{
          fontSize: 32,
          color: "#ffffff",
          fontWeight: "bold",
        }}
      >
        내가 좋아하는 동물들
      </p>
    </HeaderWrapper>
  );
}
