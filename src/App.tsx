import { useState } from "react";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import players from "./players.json";
import mash from "./mash.json";
import Cell from "./Cell";

function App() {
 const [player1Total] = useState(0); 
 const [player2Total] = useState(0); 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Confidence Pool</h1>
        <table>
          <thead>
            <tr>
              <th>Games</th>
              {players.map(({ id, name }: any) => (
                <th key={id}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mash.map(({ id, cells }: any) => (
                <tr key={id}>
                  {cells.map(
                    ({
                      id,
                      game_name,
                      pick_value,
                      pick_result,
                      pick_id
                    }: any) => (
                      <Cell
                        key={id}
                        id={id}
                        isGame={pick_id == null}
                        gameName={game_name}
                        pickValue={pick_value}
                        pickResult={pick_result}
                      />
                    )
                  )}
                </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Totals</td>
              <td>{player1Total}</td>
              <td>{player2Total}</td>
            </tr>
          </tfoot>
        </table>
      </header>
    </div>
  );
}

export default App;
