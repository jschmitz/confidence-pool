import React, { FC } from 'react';
import GameCell from './GameCell';
import PickCell from './PickCell';

interface Props {
 isGame: boolean;   
 gameName: string;
}

const Cell: FC<Props> = ({ isGame, gameName }) => {
  return (
    isGame ? <GameCell gameName={gameName} /> : <PickCell />
  );
};

export default Cell;