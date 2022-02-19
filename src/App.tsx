import React from 'react';
import logo from './logo.svg';
import './App.css';
import games from './games.json';
import picks from './picks.json';
import players from './players.json';
import Games from './Games';
import mash from './mash.json';
import Cell from './Cell';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Confidence Pool</h1>

        <h1>Games</h1>
        <table>
          <th>
            <td>Game</td>
            {players.map(({id, name}: any ) => (
              <td>{name}</td>
            ))}
          </th>
          {games.map(({game_id, name, result}: any ) => (
              <tr key={game_id}>
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

        <h1>Mash</h1>
        <table>
          <thead>
            <tr>
              <th>Games</th>
              {players.map(({id, name}: any ) => (
                  <th key={id}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mash.map(({id, cells}: any ) => (
              <tr key={id}>
                  {cells.map(({id, game_name, pick_value, pick_result, pick_id}: any) =>
                    <Cell isGame={ pick_id == null} gameName={game_name} />
                  )}
              </tr>
            ))}
          </tbody>
        </table>

        <Games title="Games" />
      </header>
    </div>
  );
}

export default App;
