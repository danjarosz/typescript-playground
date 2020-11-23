import React from 'react';
import logo from './logo.svg';
import './App.css';
import Example from "./classes/Example";


function App() {
  //types
  let address = "ul. Porzeczkowa"
  let numberOfAge: string;
  let something: number | string;
  address = "5";
  numberOfAge = "13";
  something = 44;

  // functions
  let x = 5;
  let y = 10;

  const add = (x: number, y: number): number => x + y;
  console.log(add(x, y));

  //classes
  const ex = new Example(123, "Daniel", "Jarosz");
  console.log(ex, ex.id, ex.surname);
  ex.showId();


  return (
    <div className="App">
      <header className="App-header">
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
