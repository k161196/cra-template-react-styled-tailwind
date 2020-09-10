import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import tw from "twin.macro";
// import './App.css';

const MainCon = styled.div`
  ${tw` flex justify-center items-center h-screen`}
`;

function App() {
  return (
    <MainCon>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-blue-500"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </MainCon>
  );
}

export default App;
