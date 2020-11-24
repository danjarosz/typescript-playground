import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from "./components/Test";


function App() {

  const sendMessage = () => {
    console.log("Console message")
  }

  return (
    <div className="App">
      <header className="App-header">
        <Test
          message={"This is my message"}
          onClickHandler={sendMessage}
        />
        <Test otherMessage={{ info: "other info" }} onClickHandler={() => {
          console.log("Another console message")
        }}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TypeScript learning
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
