import React from 'react';
import logo from './logo.svg';
import './App.css';
import games from './games.json';
import picks from './picks.json';
import players from './players.json';
import Games from './Games';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Confidence Pool</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h1>Games</h1>
        <table>
          <th>
            <td>Game</td>
            <td>Result</td>
          </th>
          {games.map(({id, name, result}: any ) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{result}</td>
            </tr>
          ))}
        </table>

        <h1>Players</h1>
        <table>
          <th>
            <td>Name</td>
          </th>
          {players.map(({id, name}: any ) => (
            <tr key={id}> 
              <td>{name}</td>
            </tr>
          ))}
        </table>

        <h1>Picks</h1>
        <table>
          <th>
            <td>Pick to Win</td>
            <td>Value</td>
          </th>
          {picks.map(({id, pick, value}: any ) => (
            <tr key={id}> 
              <td>{pick ? "Win":"Loss"}</td>
              <td>{value}</td>
            </tr>
          ))}
        </table>

        <Games title="Games" />
      </header>
    </div>
  );
}

export default App;
