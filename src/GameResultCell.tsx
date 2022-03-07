import React, { FC, useState } from "react";
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

function selectedToBool(selected: string): boolean{
  if(selected === "Win"){
    return true;
  }else if(selected === "Loss"){
    return false;
  }else if(selected === "TBD"){
    return false;
  }else{
    return false;
  }
}

function styleFor(result: boolean){
  return result ? correctStyle : incorrectStyle;
}

const GameResultCell: FC<GameResultProps> = ({ id, gameResult }) => {
  const options = ["TBD", "Win", "Loss"];

  const [selectedStyle, setStyle] = useState<object>(styleFor(gameResult));
  const [selectedOption, setSelectedOption] = useState<string>(selected(gameResult));
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    setStyle(styleFor(selectedToBool(value)))
  };

  return (
    <td key={id} style={selectedStyle}>
      <select id={`game_result_{id}`} name="title" value={selectedOption} onChange={selectChange}>
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
