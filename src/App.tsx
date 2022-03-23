import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import mash from "./mash.json";
import Cell from "./Cell";
import { IMash, IBodyRow, IFooter, IHeader, TCell } from "./@types/mash";

function App() {
  const [stateMash, setStateMash] = useState(mash);

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setStateMash(setFooter(JSON.stringify(stateMash), 2, "1,000,000"));
  };

  const totalButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setStateMash(setTotals(JSON.stringify(stateMash)));
  };

  function setTotals(mashCopy: string) {
    const clonedMash: IMash = JSON.parse(mashCopy);
    const numPlayers = clonedMash.header_cells.length - 2;
    const totals = Array(numPlayers).fill(0);

    clonedMash.body_rows.forEach((row: IBodyRow) => {
      row.cells.forEach((cell: TCell, index: number) => {
        if ("game_result" in cell && "pick_result" in cell){
          if (cell.game_result === cell.pick_result) {
            totals[index - 2] += cell.pick_value;
          }
        }
      });
    });

    totals.forEach((total, index) => {
      clonedMash.footer_cells[index + 2]["label"] = total;
    });

    return clonedMash;
  }

  function setFooter(mashCopy: string, index: number, newValue: string) {
    const clonedMash = JSON.parse(mashCopy);
    const f = clonedMash.footer_cells.find(
      (footerCell: IFooter) => footerCell.id == `footer${index}`
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
              {stateMash.header_cells.map(({ id, label }: IHeader) => (
                <th key={id}>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {stateMash.body_rows.map(({ id, cells}) => (
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
                      gameResult={game_result || false}
                      gameName={game_name || ""}
                      pickValue={pick_value || 0}
                      pickResult={pick_result || false}
                    />
                  )
                )}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              {stateMash.footer_cells.map(({ id, label }) => (
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
