import React, { FC } from "react";
import GameCell from "./GameCell";
import PickCell from "./PickCell";
import GameResultCell from "./GameResultCell";

interface Props {
  id: string;
  cellType: string;
  gameResult: boolean;
  gameName: string;
  pickResult: boolean;
  pickValue: number;
}

const Cell: FC<Props> = ({
  id,
  cellType,
  gameResult,
  gameName,
  pickResult,
  pickValue
}) => {
  switch (cellType) {
    case "pick":
      return <PickCell id={id} pickValue={pickValue} pickResult={pickResult} />;
    case "game":
      return <GameCell id={id} gameName={gameName} />;
    case "game_result":
      return <GameResultCell id={id} gameResult={gameResult} />;
    default:
      return <GameResultCell id={id} gameResult={gameResult} />;
  }
};

export default Cell;
