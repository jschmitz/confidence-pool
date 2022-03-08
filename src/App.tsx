import React from "react";
import logo from "./logo.svg";
import "./App.css";
import mash from "./mash.json";
import Cell from "./Cell";

function App() {
  const headers = mash[0].headers || [{ id: "id", label: "label" }];
  const rows = mash[1].rows || [{ id: "id", label: "label" }];
  const footers = mash[mash.length - 1].footers || [{ id: "id", label: [] }];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Confidence Pool</h1>
        <table>
          <thead>
            <tr>
              {headers.map(({ id, label }: any) => (
                <th key={id}>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(({ id, cells }: any) => (
              <tr key={id}>
                {cells.map(
                  ({
                    id,
                    game_name,
                    game_result,
                    pick_value,
                    pick_result,
                    cell_type
                  }: any) => (
                    <Cell
                      key={id}
                      id={id}
                      cellType={cell_type}
                      gameResult={game_result}
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
              {footers.map(({ id, label }: any) => (
                <td key={id}>{label}</td>
              ))}
            </tr>
          </tfoot>
        </table>
      </header>
    </div>
  );
}

export default App;
