import React, { FC } from 'react';
import GameCell from './GameCell';
import PickCell from './PickCell';

interface Props {
 isGame: boolean;   
 gameName: string;
 pickValue: number;
 pickResult: boolean;
}

const Cell: FC<Props> = ({ isGame, gameName, pickResult, pickValue }) => {
  return (
    isGame ? <GameCell gameName={gameName} /> : <PickCell pickValue={pickValue} pickResult={pickResult} />
  );
};

export default Cell;