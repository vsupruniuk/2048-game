import React from 'react';
import './GameRow.scss';

type Props = {
  gameDataRow: (number | null)[],
};

export const GameRow: React.FC<Props> = ({ gameDataRow }) => {
  return (
    <div className="game-row">
      {gameDataRow.map((cell, index) => (
        <div
          className="game-row__cell"
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        >
          {cell}
        </div>
      ))}
    </div>
  );
};
