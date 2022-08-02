import React, { useEffect, useState } from 'react';
import { GameRow } from '../GameRow';
import './GameField.scss';

const defaultGameData = [
  [2, null, null, 2],
  [2, null, 2, null],
  [null, 2, null, null],
  [null, null, 2, null],
];

export const GameField: React.FC = React.memo(() => {
  const [gameData, setGameData] = useState(defaultGameData);
  const [pressedKey, setPressedKey] = useState('');
  const changePressedKey = (event: KeyboardEvent) => {
    setPressedKey(event.key);
  };

  const handleMoveDown = () => {
    const newGameData = [...gameData];

    for (let i = newGameData.length - 2; i >= 0; i -= 1) {
      switch (i) {
        case 2:
          for (let j = 0; j <= 3; j += 1) {
            if (newGameData[3][j] === null) {
              [newGameData[3][j], newGameData[2][j]]
                = [newGameData[2][j], newGameData[3][j]];
            }
          }

          break;

        case 1:
          for (let j = 0; j <= 3; j += 1) {
            if (newGameData[3][j] === null) {
              [newGameData[3][j], newGameData[1][j]]
                = [newGameData[1][j], newGameData[3][j]];
            }
          }

          for (let j = 0; j <= 3; j += 1) {
            if (newGameData[2][j] === null) {
              [newGameData[2][j], newGameData[1][j]]
                = [newGameData[1][j], newGameData[2][j]];
            }
          }

          break;

        case 0:
          for (let j = 0; j <= 3; j += 1) {
            if (newGameData[3][j] === null) {
              [newGameData[3][j], newGameData[0][j]]
                = [newGameData[0][j], newGameData[3][j]];
            }
          }

          for (let j = 0; j <= 3; j += 1) {
            if (newGameData[2][j] === null) {
              [newGameData[2][j], newGameData[0][j]]
                = [newGameData[0][j], newGameData[2][j]];
            }
          }

          for (let j = 0; j <= 3; j += 1) {
            if (newGameData[1][j] === null) {
              [newGameData[1][j], newGameData[0][j]]
                = [newGameData[0][j], newGameData[1][j]];
            }
          }

          break;

        default:
          break;
      }
    }

    setGameData(newGameData);

    setPressedKey('');
  };

  useEffect(() => {
    document.addEventListener('keydown', changePressedKey);

    switch (pressedKey) {
      case 'ArrowDown':
        handleMoveDown();
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
