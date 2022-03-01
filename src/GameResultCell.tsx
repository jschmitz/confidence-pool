import React, { FC } from "react";
import CSS from "csstype";

interface GameResultProps {
  gameResult: boolean;
  id: string;
}

const incorrectStyle: CSS.Properties = {
  backgroundColor: "red",
  color: "white",
  borderColor: "green"
};

const correctStyle: CSS.Properties = {
  backgroundColor: "green",
  color: "white",
  borderColor: "orange"
};

const GameResultCell: FC<GameResultProps> = ({ id, gameResult }) => {
  const msg = gameResult ? "Win" : "Loss";
  console.log(msg);
  return (
    <td key={id} style={gameResult ? incorrectStyle : correctStyle}>
      {msg}
    </td>
  );
};

export default GameResultCell;
