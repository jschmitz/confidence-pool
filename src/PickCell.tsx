import React, { FC } from 'react';
import CSS from 'csstype';

interface PickProps {
  pickResult: boolean;
  pickValue: number;
}

const incorrectStyle: CSS.Properties = {
  backgroundColor: 'red',
  color: 'white',
  borderColor: 'green'
};

const correctStyle: CSS.Properties = {
  backgroundColor: 'green',
  color: 'white',
  borderColor: 'orange'
};

const PickCell: FC<PickProps> = ({ pickValue, pickResult }) => {
  return (
    <td style={pickResult ? incorrectStyle : correctStyle}>{pickValue}</td>
  );
};

export default PickCell;