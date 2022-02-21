import React, { FC } from 'react';

interface GameProps {
    gameName: string;
    id: string;
}

const GameCell: FC<GameProps> = ({ id, gameName }) => {
  return (
    <>
      <td key={id}>{gameName}</td>
    </>
  );
};

export default GameCell;