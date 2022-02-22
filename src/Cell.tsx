import React, { FC } from "react";
import GameCell from "./GameCell";
import PickCell from "./PickCell";

interface Props {
  id: string;
  isGame: boolean;
  gameName: string;
  pickValue: number;
  pickResult: boolean;
}

const Cell: FC<Props> = ({ id, isGame, gameName, pickResult, pickValue }) => {
  return isGame ? (
    <GameCell id={id} gameName={gameName} />
  ) : (
    <PickCell id={id} pickValue={pickValue} pickResult={pickResult} />
  );
};

export default Cell;
