import React, { FC } from "react";
import CSS from "csstype";
import { IMashContextType, MashContext } from "./MashProvider";

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
  const { correctPickFor } = React.useContext(MashContext) as IMashContextType;

  const styleFor = (id: string): CSS.Properties => {
    return correctPickFor(id) ? correctStyle : incorrectStyle;
  };

  return (
    <td key={id} style={styleFor(id)}>
      {pickResult ? "W" : "L"}-{pickValue}
    </td>
  );
};

export default PickCell;
