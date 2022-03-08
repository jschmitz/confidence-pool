import React, { FC } from "react";
import CSS from "csstype";

interface PickProps {
  pickResult: boolean;
  pickValue: number;
  id: string;
  gameResult: boolean;
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

function styleFor(pickResult: boolean, gameResult: boolean): CSS.Properties {
  return gameResult === pickResult ? correctStyle : incorrectStyle;
}

const PickCell: FC<PickProps> = ({ id, pickValue, pickResult, gameResult }) => {
  return (
    <td key={id} style={styleFor(pickResult, gameResult)}>
      {pickValue}
    </td>
  );
};

export default PickCell;
