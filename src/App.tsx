import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Cell from "./Cell";
import { IHeader } from "./@types/mash";
import { IMashContextType, MashContext } from "./MashProvider";

function App() {
  const { mashContextData } = React.useContext(MashContext) as IMashContextType;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Confidence Pool</h1>
        <table>
          <thead>
            <tr>
              {mashContextData.header_cells.map(({ id, label }: IHeader) => (
                <th key={id}>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mashContextData.body_rows.map(({ id, cells }) => (
              <tr key={id}>
                {cells.map(
                  ({
                    id,
                    game_name,
                    game_result,
                    pick_value,
                    pick_result,
                    cell_type
                  }) => (
                    <Cell
                      key={id}
                      id={id}
                      cellType={cell_type}
                      gameResult={game_result}
                      gameName={game_name || ""}
                      pickValue={pick_value || 0}
                      pickResult={pick_result}
                    />
                  )
                )}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              {mashContextData.footer_cells.map(({ id, label }) => (
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
