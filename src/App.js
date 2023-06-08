import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import MainHeader from "component/mainHeader/MainHeader";
import ItemContainer from "component/itemContainer/ItemContainer";
import ListContainer from "component/listContainer/ListContainer";

import theme from "styles/theme";
import React from "react";
import { useState } from "react";
const Wrapper = styled.div`
  height: 100vh;
  background-color: white;

  // @media ${({ theme }) => theme.mobile} {
  //   height: 100vh;
  //   background-color: black;
  // }

  @media only screen and (max-width: 700px) {
    background-color: white;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 100px;
  gap: 40px;
  margin: 0px 100px;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <MainHeader />

        <ContentWrapper>
          <ListContainer />
          <div
            style={{
              border: "1px solid black",
              width: "400px",
              height: "720px",
            }}
          ></div>
        </ContentWrapper>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
