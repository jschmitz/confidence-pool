import React from 'react';
import logo from './logo.svg';
import './App.css';
import games from './games.json';
import Games from './Games';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Show something new Cool
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <ol>
          {games.map(({id, name}: any ) => (
            <li key={id}>{name}</li>
          ))}
        </ol>

        <Games title="Games" />
      </header>
    </div>
  );
}

export default App;
