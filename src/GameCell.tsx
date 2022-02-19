import React, { FC } from 'react';

interface GameProps {
    gameName: string;
}

const GameCell: FC<GameProps> = ({ gameName }) => {
  return (
    <>
      <td>{gameName}</td>
    </>
  );
};

export default GameCell;