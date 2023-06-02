import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import MainPage from "page/main/MainPage";
import theme from "styles/theme";

const Wrapper = styled.div`
  height: 100vh;
  background-color: wheat;

  // @media ${({ theme }) => theme.mobile} {
  //   height: 100vh;
  //   background-color: black;
  // }

  @media only screen and (max-width: 700px) {
    background-color: white;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <div className="App">
          <MainPage />
        </div>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
