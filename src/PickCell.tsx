import React, { FC } from "react";
import CSS from "csstype";

interface PickProps {
  pickResult: boolean;
  pickValue: number;
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

const PickCell: FC<PickProps> = ({ id, pickValue, pickResult }) => {
  return (
    <td key={id} style={pickResult ? incorrectStyle : correctStyle}>
      {pickValue}
    </td>
  );
};

export default PickCell;
