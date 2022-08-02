import React, { useEffect, useState } from 'react';
import { GameRow } from '../GameRow';
import './GameField.scss';

const defaultGameData = [
  [2, 2, 2, 2],
  [null, 8, null, null],
  [null, null, 8, 8],
  [8, null, null, null],
];

export const GameField: React.FC = React.memo(() => {
  const [gameData, setGameData] = useState(defaultGameData);
  const [pressedKey, setPressedKey] = useState('');
  const changePressedKey = (event: KeyboardEvent) => {
    setPressedKey(event.key);
  };

  const handleMove = () => {
    const newGameData = [...gameData];

    for (let i = 0; i < newGameData.length; i += 1) {
      for (let j = newGameData[i].length - 2; j >= 0; j -= 1) {
        if (newGameData[j + 1][i] === undefined
        || typeof newGameData[j + 1][i] === 'number') {
          continue;
        }

        [newGameData[j][i], newGameData[j + 1][i]]
          = [newGameData[j + 1][i], newGameData[j][i]];
      }
    }

    setGameData(newGameData);

    setPressedKey('');
  };

  useEffect(() => {
    document.addEventListener('keydown', changePressedKey);

    switch (pressedKey) {
      case 'ArrowDown':
        handleMove();
        break;

      default:
        break;
    }
  }, [pressedKey]);

  return (
    <div className="game-field">
      {gameData.map((row, index) => (
        <GameRow
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          gameDataRow={row}
        />
      ))}
    </div>
  );
});
