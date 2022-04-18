import React, { createContext, useState, useContext, ReactNode } from "react";
import mashData from "./mash.json";
import { IMash, IBodyRow, TCell, IFooter } from "./@types/mash";

export type Props = {
  children: ReactNode;
};

export type IMashContextType = {
  mashContextData: IMash;
  setTotals: () => void;
  setFooter: (index: number, newValue: string) => void;
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
      row.cells.forEach((cell: TCell, index: number) => {
        if ("game_result" in cell && "pick_result" in cell) {
          if (cell.game_result === cell.pick_result) {
            totals[index - 2] += cell.pick_value;
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

  return (
    <MashContext.Provider value={{ mashContextData, setTotals, setFooter }}>
      {children}
    </MashContext.Provider>
  );
}
