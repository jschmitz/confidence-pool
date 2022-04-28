import React, { createContext, useState, useContext, ReactNode } from "react";
import mashData from "./mash.json";
import { IMash, IBodyRow, TCell, IFooter, IPickCell } from "./@types/mash";

export type Props = {
  children: ReactNode;
};

export type IMashContextType = {
  mashContextData: IMash;
  setTotals: () => void;
  setFooter: (index: number, newValue: string) => void;
  setGameResult: (id: string, value: boolean) => void;
  correctPickFor: (id: string) => boolean;
};

export const MashContext = createContext<IMashContextType | null>(null);
export const useContextMash = () => useContext(MashContext);

export default function MashProvider(props: Props) {
  const { children } = props;
  const [mashContextData, setMash] = useState<IMash>(mashData);

  const setTotals = () => {
    const clonedMash: IMash = mashContextData;
    const numPlayers = clonedMash.header_cells.length - 2;
    const totals = Array(numPlayers).fill(0);

    clonedMash.body_rows.forEach((row: IBodyRow) => {
      const gameResult = row.cells[1].game_result;
      row.cells.forEach((cell: TCell, index: number) => {
        if (cell.cell_type === "pick") {
          if (gameResult === (cell as IPickCell).pick_result) {
            totals[index - 2] += (cell as IPickCell).pick_value;
          }
        }
      });
    });

    totals.forEach((total, index) => {
      clonedMash.footer_cells[index + 2]["label"] = total;
    });

    setMash((prevState) => {
      return { ...prevState, ...clonedMash };
    });
  };

  const setFooter = (index: number, newValue: string) => {
    const clonedMash: IMash = mashContextData;
    const f = clonedMash.footer_cells.find(
      (footerCell: IFooter) => footerCell.id == `footer${index}`
    );

    if (f != undefined) f.label = newValue;

    setMash((prevState) => {
      return { ...prevState, ...clonedMash };
    });
  };

  const setGameResult = (id: string, value: boolean): void => {
    const clonedMash: IMash = mashContextData;

    clonedMash.body_rows.forEach((element) => {
      const rCell = element.cells.find((cell: TCell) => {
        return cell.id === id;
      });

      if (rCell !== undefined) {
        rCell.game_result = value;

        setMash((prevState) => {
          return { ...prevState, ...clonedMash };
        });
      }
    });
  };

  const correctPickFor = (id: string): boolean => {
    let match = true;
    mashContextData.body_rows.forEach((row) => {
      const gameResult = row.cells[1].game_result;
      const rCell = row.cells.slice(2).find((cell: TCell) => {
        return cell.id === id;
      });

      if (rCell != undefined) {
        match = rCell.pick_result == gameResult;
      }
    });

    return match;
  };

  return (
    <MashContext.Provider
      value={{
        mashContextData,
        setTotals,
        setFooter,
        setGameResult,
        correctPickFor
      }}
    >
      {children}
    </MashContext.Provider>
  );
}
