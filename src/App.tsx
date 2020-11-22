import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let address = "ul. Porzeczkowa"
  let numberOfAge: string;
  let something: number | string;
  address = "5";
  numberOfAge = "13"
  something = 44

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
