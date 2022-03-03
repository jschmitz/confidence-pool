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

function selected(result: boolean) {
  if (result) {
    return "Win";
  } else if (result === null) {
    return "TBD";
  } else if (!result) {
    return "Loss";
  } else {
    return "TBD";
  }
}

const GameResultCell: FC<GameResultProps> = ({ id, gameResult }) => {
  const options = ["TBD", "Win", "Loss"];
  return (
    <td key={id} style={gameResult ? incorrectStyle : correctStyle}>
      <select id={`game_result_{id}`} name="title" value={selected(gameResult)}>
        {options.map((item: any) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </td>
  );
};

export default GameResultCell;
