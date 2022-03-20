import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import mash from "./mash.json";
import Cell from "./Cell";

function App() {
  const [stateMash, setStateMash] = useState(mash);

  const headers = mash.header_cells
  const rows = mash.body_rows
  const footers = stateMash.footer_cells

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setStateMash(setFooter(JSON.stringify(stateMash), 2, "1,000,000"));
  };

  const totalButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setStateMash(setTotals(JSON.stringify(stateMash)));
  };

  function setTotals(mashCopy: string) {
    const clonedMash = JSON.parse(mashCopy);
    const numPlayers = clonedMash.header_cells.length - 2;
    const totals = Array(numPlayers).fill(0);

    Array.from(clonedMash.body_rows).forEach((row: any) => {
      const gameResult = row.cells[1].game_result;
      row.cells.forEach((cell: any, index: number) => {
        if (index < 1) return;

        if (gameResult === cell.pick_result) {
          totals[index - 2] += cell.pick_value;
        }
      });
    });

    totals.forEach((total: any, index: number) => {
      clonedMash.footer_cells[index + 2]["label"] = total;
    });

    return clonedMash;
  }

  function setFooter(mashCopy: string, index: number, newValue: string) {
    const clonedMash = JSON.parse(mashCopy);
    const f = clonedMash.footer_cells.find(
      (total: any) => total.id == `footer${index}`
    );
    f.label = newValue;
    return clonedMash;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Confidence Pool</h1>
        <button type="button" onClick={buttonHandler}>
          Update Player 1 FTW
        </button>
        <button type="button" onClick={totalButtonHandler}>
          Total
        </button>
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
