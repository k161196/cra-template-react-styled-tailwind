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
      <header className="justify-center items-center flex flex-col">
        <div className="flex mb-20">
          <img src={logo} className="w-32" alt="logo" />
          <img src="./styled.png" className="w-32" alt="logo" />
          <img src="./tailwindcss.png" className="w-32" alt="logo" />
        </div>

        <p>
          React app with styled-components , tailwindcss and typescript by
          <a
            className="text-blue-500"
            href="https://kiranyadav.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Kiran Yadav
          </a>{" "}
        </p>
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
