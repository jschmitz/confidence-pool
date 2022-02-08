import React, { FC } from 'react';

interface GamesProps {
  title: string;
  subtitle?: string; // optional
}

const Games: FC<GamesProps> = ({ title, subtitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </>
  );
};

export default Games;