import React, { useCallback, useEffect, useState } from 'react';
import { GameRow } from '../GameRow';
import './GameField.scss';

const defaultGameData = [
  [2, 0, 0, 2],
  [0, 0, 2, 0],
  [2, 2, 2, 0],
  [4, 0, 2, 0],
];

export const GameField: React.FC = React.memo(() => {
  const [
    gameData,
    setGameData,
  ] = useState<number[][]>(defaultGameData);
  const [pressedKey, setPressedKey] = useState('');
  const changePressedKey = useCallback((event: KeyboardEvent) => {
    setPressedKey(event.key);
  }, []);

  const handleMoveDown = useCallback(() => {
    const newGameData = [...gameData];

    for (let i = newGameData.length - 2; i >= 0; i -= 1) {
      switch (i) {
        case 2:
          for (let j = 0; j <= 3; j += 1) {
            if (newGameData[2][j] === newGameData[3][j]) {
              newGameData[3][j] *= 2;
              newGameData[2][j] = 0;
            } else if (newGameData[3][j] === 0) {
              [newGameData[3][j], newGameData[2][j]]
                = [newGameData[2][j], newGameData[3][j]];
            }
          }

          break;

        case 1:
          for (let j = 0; j <= 3; j += 1) {
            if (newGameData[1][j] === newGameData[3][j]
              && newGameData[2][j] === 0) {
              newGameData[3][j] *= 2;
              newGameData[1][j] = 0;
            } else if (newGameData[3][j] === 0) {
              [newGameData[3][j], newGameData[1][j]]
                = [newGameData[1][j], newGameData[3][j]];
            }
          }

          for (let j = 0; j <= 3; j += 1) {
            if (newGameData[1][j] === newGameData[2][j]) {
              newGameData[2][j] *= 2;
              newGameData[1][j] = 0;
            } else if (newGameData[2][j] === 0) {
              [newGameData[2][j], newGameData[1][j]]
                = [newGameData[1][j], newGameData[2][j]];
            }
          }

          break;

        case 0:
          for (let j = 0; j <= 3; j += 1) {
            if (newGameData[0][j] === newGameData[3][j]
              && newGameData[1][j] === 0
              && newGameData[2][j] === 0) {
              newGameData[3][j] *= 2;
              newGameData[0][j] = 0;
            } else if (newGameData[3][j] === 0) {
              [newGameData[3][j], newGameData[0][j]]
                = [newGameData[0][j], newGameData[3][j]];
            }
          }

          for (let j = 0; j <= 3; j += 1) {
            if (newGameData[0][j] === newGameData[2][j]
              && newGameData[1][j] === 0) {
              newGameData[2][j] *= 2;
              newGameData[0][j] = 0;
            } else if (newGameData[2][j] === 0) {
              [newGameData[2][j], newGameData[0][j]]
                = [newGameData[0][j], newGameData[2][j]];
            }
          }

          for (let j = 0; j <= 3; j += 1) {
            if (newGameData[0][j] === newGameData[1][j]) {
              newGameData[1][j] *= 2;
              newGameData[0][j] = 0;
            } else if (newGameData[1][j] === 0) {
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
  }, []);

  const handleMoveUp = useCallback(() => {
    const newGameData = [...gameData];

    for (let i = 1; i <= newGameData.length; i += 1) {
      switch (i) {
        case 1:
          for (let j = 0; j <= 3; j += 1) {
            if (newGameData[0][j] === null) {
              [newGameData[0][j], newGameData[1][j]]
                = [newGameData[1][j], newGameData[0][j]];
            }
          }

          break;

        case 2:
          for (let j = 0; j <= 3; j += 1) {
            if (newGameData[0][j] === null) {
              [newGameData[0][j], newGameData[2][j]]
                = [newGameData[2][j], newGameData[0][j]];
            }
          }

          for (let j = 0; j <= 3; j += 1) {
            if (newGameData[1][j] === null) {
              [newGameData[1][j], newGameData[2][j]]
                = [newGameData[2][j], newGameData[1][j]];
            }
          }

          break;

        case 3:
          for (let j = 0; j <= 3; j += 1) {
            if (newGameData[0][j] === null) {
              [newGameData[0][j], newGameData[3][j]]
                = [newGameData[3][j], newGameData[0][j]];
            }
          }

          for (let j = 0; j <= 3; j += 1) {
            if (newGameData[1][j] === null) {
              [newGameData[1][j], newGameData[3][j]]
                = [newGameData[3][j], newGameData[1][j]];
            }
          }

          for (let j = 0; j <= 3; j += 1) {
            if (newGameData[2][j] === null) {
              [newGameData[2][j], newGameData[3][j]]
                = [newGameData[3][j], newGameData[2][j]];
            }
          }

          break;

        default:
          break;
      }
    }

    setGameData(newGameData);

    setPressedKey('');
  }, []);

  const handleMoveRight = useCallback(() => {
    const newGameData = [...gameData];

    for (let i = 0; i < newGameData.length; i += 1) {
      for (let j = newGameData[i].length - 2; j >= 0; j -= 1) {
        switch (j) {
          case 2:
            if (newGameData[i][3] === null) {
              [newGameData[i][3], newGameData[i][j]]
                = [newGameData[i][j], newGameData[i][3]];
            }

            break;

          case 1:
            if (newGameData[i][3] === null) {
              [newGameData[i][3], newGameData[i][j]]
                = [newGameData[i][j], newGameData[i][3]];
            }

            if (newGameData[i][2] === null) {
              [newGameData[i][2], newGameData[i][j]]
                = [newGameData[i][j], newGameData[i][2]];
            }

            break;

          case 0:
            if (newGameData[i][3] === null) {
              [newGameData[i][3], newGameData[i][j]]
                = [newGameData[i][j], newGameData[i][3]];
            }

            if (newGameData[i][2] === null) {
              [newGameData[i][2], newGameData[i][j]]
                = [newGameData[i][j], newGameData[i][2]];
            }

            if (newGameData[i][1] === null) {
              [newGameData[i][1], newGameData[i][j]]
                = [newGameData[i][j], newGameData[i][1]];
            }

            break;

          default:
            break;
        }
      }
    }

    setGameData(newGameData);

    setPressedKey('');
  }, []);

  const handleMoveLeft = useCallback(() => {
    const newGameData = [...gameData];

    for (let i = 0; i < newGameData.length; i += 1) {
      for (let j = 1; j < newGameData[i].length; j += 1) {
        switch (j) {
          case 1:
            if (newGameData[i][0] === null) {
              [newGameData[i][0], newGameData[i][j]]
                = [newGameData[i][j], newGameData[i][0]];
            }

            break;

          case 2:
            if (newGameData[i][0] === null) {
              [newGameData[i][0], newGameData[i][j]]
                = [newGameData[i][j], newGameData[i][0]];
            }

            if (newGameData[i][1] === null) {
              [newGameData[i][1], newGameData[i][j]]
                = [newGameData[i][j], newGameData[i][1]];
            }

            break;

          case 3:
            if (newGameData[i][0] === null) {
              [newGameData[i][0], newGameData[i][j]]
                = [newGameData[i][j], newGameData[i][0]];
            }

            if (newGameData[i][1] === null) {
              [newGameData[i][1], newGameData[i][j]]
                = [newGameData[i][j], newGameData[i][1]];
            }

            if (newGameData[i][3] === null) {
              [newGameData[i][3], newGameData[i][j]]
                = [newGameData[i][j], newGameData[i][3]];
            }

            break;

          default:
            break;
        }
      }
    }

    setGameData(newGameData);

    setPressedKey('');
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', changePressedKey);

    switch (pressedKey) {
      case 'ArrowDown':
        handleMoveDown();
        break;

      case 'ArrowUp':
        handleMoveUp();
        break;

      case 'ArrowRight':
        handleMoveRight();
        break;

      case 'ArrowLeft':
        handleMoveLeft();
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
