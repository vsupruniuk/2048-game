import React from 'react';
import './GameRow.scss';
import { GameCell } from '../GameCell';

type Props = {
  gameDataRow: number[],
};

export const GameRow: React.FC<Props> = ({ gameDataRow }) => {
  return (
    <div className="game-row">
      {gameDataRow.map((cell, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <GameCell key={index} cell={cell} />
      ))}
    </div>
  );
};
