import React, { useCallback, useEffect, useState } from 'react';
import { GameRow } from '../GameRow';
import './GameField.scss';
import {
  getRandomIndex,
  getRandomValue,
  selectRandomLine,
} from '../../utils/random.helpers';

const defaultGameData = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

export const GameField: React.FC = React.memo(() => {
  const [
    gameData,
    setGameData,
  ] = useState<number[][]>(defaultGameData);
  const [pressedKey, setPressedKey] = useState('');
  const [isGameWon, setIsGameWon] = useState(false);
  const [isGameLose, setIsGameLose] = useState(false);
  const [score, setScore] = useState(0);

  const changePressedKey = useCallback((event: KeyboardEvent) => {
    setPressedKey(event.key);
  }, []);

  const handleMoveDown = useCallback(() => {
    if (gameData.some(row => row.some(cell => cell === 0)) && !isGameLose) {
      const newGameData = [...gameData];

      for (let i = newGameData.length - 2; i >= 0; i -= 1) {
        switch (i) {
          case 2:
            for (let j = 0; j <= 3; j += 1) {
              if (newGameData[3][j] !== 0
                && newGameData[2][j] === newGameData[3][j]) {
                newGameData[3][j] *= 2;
                newGameData[2][j] = 0;
                setScore((prevScore) => {
                  return prevScore + newGameData[3][j];
                });
              } else if (newGameData[3][j] === 0) {
                [newGameData[3][j], newGameData[2][j]]
                  = [newGameData[2][j], newGameData[3][j]];
              }
            }

            break;

          case 1:
            for (let j = 0; j <= 3; j += 1) {
              if (newGameData[3][j] !== 0
                && newGameData[1][j] === newGameData[3][j]
                && newGameData[2][j] === 0) {
                newGameData[3][j] *= 2;
                newGameData[1][j] = 0;
                setScore((prevScore) => {
                  return prevScore + newGameData[3][j];
                });
              } else if (newGameData[3][j] === 0) {
                [newGameData[3][j], newGameData[1][j]]
                  = [newGameData[1][j], newGameData[3][j]];
              }
            }

            for (let j = 0; j <= 3; j += 1) {
              if (newGameData[2][j] !== 0
                && newGameData[1][j] === newGameData[2][j]) {
                newGameData[2][j] *= 2;
                newGameData[1][j] = 0;
                setScore((prevScore) => {
                  return prevScore + newGameData[2][j];
                });
              } else if (newGameData[2][j] === 0) {
                [newGameData[2][j], newGameData[1][j]]
                  = [newGameData[1][j], newGameData[2][j]];
              }
            }

            break;

          case 0:
            for (let j = 0; j <= 3; j += 1) {
              if (newGameData[3][j] !== 0
                && newGameData[0][j] === newGameData[3][j]
                && newGameData[1][j] === 0
                && newGameData[2][j] === 0) {
                newGameData[3][j] *= 2;
                newGameData[0][j] = 0;
                setScore((prevScore) => {
                  return prevScore + newGameData[3][j];
                });
              } else if (newGameData[3][j] === 0) {
                [newGameData[3][j], newGameData[0][j]]
                  = [newGameData[0][j], newGameData[3][j]];
              }
            }

            for (let j = 0; j <= 3; j += 1) {
              if (newGameData[2][j] !== 0
                && newGameData[0][j] === newGameData[2][j]
                && newGameData[1][j] === 0) {
                newGameData[2][j] *= 2;
                newGameData[0][j] = 0;
                setScore((prevScore) => {
                  return prevScore + newGameData[2][j];
                });
              } else if (newGameData[2][j] === 0) {
                [newGameData[2][j], newGameData[0][j]]
                  = [newGameData[0][j], newGameData[2][j]];
              }
            }

            for (let j = 0; j <= 3; j += 1) {
              if (newGameData[1][j] !== 0
                && newGameData[0][j] === newGameData[1][j]) {
                newGameData[1][j] *= 2;
                newGameData[0][j] = 0;
                setScore((prevScore) => {
                  return prevScore + newGameData[1][j];
                });
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

      let randomLine = selectRandomLine() > 0.4 ? 0 : 1;

      if (newGameData[1].every(cell => cell !== 0)) {
        randomLine = 0;
      }

      let randomCellIndex = [randomLine, getRandomIndex()];

      if (newGameData[randomCellIndex[0]][randomCellIndex[1]] !== 0) {
        while (newGameData[randomCellIndex[0]][randomCellIndex[1]] !== 0) {
          randomCellIndex = [randomLine, getRandomIndex()];
        }
      }

      newGameData[randomCellIndex[0]][randomCellIndex[1]] = getRandomValue();

      setGameData(newGameData);

      setPressedKey('');
    }
  }, [gameData]);

  const handleMoveUp = useCallback(() => {
    if (gameData.some(row => row.some(cell => cell === 0)) && !isGameLose) {
      const newGameData = [...gameData];

      for (let i = 0; i <= newGameData.length; i += 1) {
        switch (i) {
          case 1:
            for (let j = 0; j <= 3; j += 1) {
              if (newGameData[0][j] !== 0
                && newGameData[0][j] === newGameData[1][j]) {
                newGameData[0][j] *= 2;
                newGameData[1][j] = 0;
                setScore((prevScore) => {
                  return prevScore + newGameData[0][j];
                });
              } else if (newGameData[0][j] === 0) {
                [newGameData[0][j], newGameData[1][j]]
                  = [newGameData[1][j], newGameData[0][j]];
              }
            }

            break;

          case 2:
            for (let j = 0; j <= 3; j += 1) {
              if (newGameData[0][j] !== 0
                && newGameData[0][j] === newGameData[2][j]
                && newGameData[1][j] === 0) {
                newGameData[0][j] *= 2;
                newGameData[2][j] = 0;
                setScore((prevScore) => {
                  return prevScore + newGameData[0][j];
                });
              } else if (newGameData[0][j] === 0) {
                [newGameData[0][j], newGameData[2][j]]
                  = [newGameData[2][j], newGameData[0][j]];
              }
            }

            for (let j = 0; j <= 3; j += 1) {
              if (newGameData[1][j] !== 0
                && newGameData[1][j] === newGameData[2][j]) {
                newGameData[1][j] *= 2;
                newGameData[2][j] = 0;
                setScore((prevScore) => {
                  return prevScore + newGameData[1][j];
                });
              } else if (newGameData[1][j] === 0) {
                [newGameData[1][j], newGameData[2][j]]
                  = [newGameData[2][j], newGameData[1][j]];
              }
            }

            break;

          case 3:
            for (let j = 0; j <= 3; j += 1) {
              if (newGameData[0][j] !== 0
                && newGameData[3][j] === newGameData[0][j]
                && newGameData[1][j] === 0
                && newGameData[2][j] === 0) {
                newGameData[0][j] *= 2;
                newGameData[3][j] = 0;
                setScore((prevScore) => {
                  return prevScore + newGameData[0][j];
                });
              } else if (newGameData[0][j] === 0) {
                [newGameData[0][j], newGameData[3][j]]
                  = [newGameData[3][j], newGameData[0][j]];
              }
            }

            for (let j = 0; j <= 3; j += 1) {
              if (newGameData[1][j] !== 0
                && newGameData[1][j] === newGameData[3][j]
                && newGameData[2][j] === 0) {
                newGameData[1][j] *= 2;
                newGameData[3][j] = 0;
                setScore((prevScore) => {
                  return prevScore + newGameData[1][j];
                });
              } else if (newGameData[1][j] === 0) {
                [newGameData[1][j], newGameData[3][j]]
                  = [newGameData[3][j], newGameData[1][j]];
              }
            }

            for (let j = 0; j <= 3; j += 1) {
              if (newGameData[2][j] !== 0
                && newGameData[2][j] === newGameData[3][j]) {
                newGameData[2][j] *= 2;
                newGameData[3][j] = 0;
                setScore((prevScore) => {
                  return prevScore + newGameData[2][j];
                });
              } else if (newGameData[2][j] === 0) {
                [newGameData[2][j], newGameData[3][j]]
                  = [newGameData[3][j], newGameData[2][j]];
              }
            }

            break;

          default:
            break;
        }
      }

      let randomLine = selectRandomLine() > 0.4 ? 3 : 2;

      if (newGameData[2].every(cell => cell !== 0)) {
        randomLine = 3;
      }

      let randomCellIndex = [randomLine, getRandomIndex()];

      if (newGameData[randomCellIndex[0]][randomCellIndex[1]] !== 0) {
        while (newGameData[randomCellIndex[0]][randomCellIndex[1]] !== 0) {
          randomCellIndex = [randomLine, getRandomIndex()];
        }
      }

      newGameData[randomCellIndex[0]][randomCellIndex[1]] = getRandomValue();

      setGameData(newGameData);

      setPressedKey('');
    }
  }, [gameData]);

  const handleMoveRight = useCallback(() => {
    if (gameData.some(row => row.some(cell => cell === 0)) && !isGameLose) {
      const newGameData = [...gameData];

      for (let i = 0; i < newGameData.length; i += 1) {
        for (let j = newGameData[i].length - 2; j >= 0; j -= 1) {
          switch (j) {
            case 2:
              if (newGameData[i][3] !== 0
                && newGameData[i][3] === newGameData[i][2]) {
                newGameData[i][3] *= 2;
                newGameData[i][2] = 0;
                setScore((prevScore) => {
                  return prevScore + newGameData[i][3];
                });
              } else if (newGameData[i][3] === 0) {
                [newGameData[i][3], newGameData[i][2]]
                  = [newGameData[i][2], newGameData[i][3]];
              }

              break;

            case 1:
              if (newGameData[i][3] !== 0
                && newGameData[i][3] === newGameData[i][1]
                && newGameData[i][2] === 0) {
                newGameData[i][3] *= 2;
                newGameData[i][1] = 0;
                setScore((prevScore) => {
                  return prevScore + newGameData[i][3];
                });
              } else if (newGameData[i][3] === 0) {
                [newGameData[i][3], newGameData[i][1]]
                  = [newGameData[i][1], newGameData[i][3]];
              }

              if (newGameData[i][2] !== 0
                && newGameData[i][2] === newGameData[i][1]) {
                newGameData[i][2] *= 2;
                newGameData[i][1] = 0;
                setScore((prevScore) => {
                  return prevScore + newGameData[i][2];
                });
              } else if (newGameData[i][2] === 0) {
                [newGameData[i][2], newGameData[i][1]]
                  = [newGameData[i][1], newGameData[i][2]];
              }

              break;

            case 0:
              if (newGameData[i][3] !== 0
                && newGameData[i][3] === newGameData[i][0]
                && newGameData[i][2] === 0
                && newGameData[i][1] === 0) {
                newGameData[i][3] *= 2;
                newGameData[i][0] = 0;
                setScore((prevScore) => {
                  return prevScore + newGameData[i][3];
                });
              } else if (newGameData[i][3] === 0) {
                [newGameData[i][3], newGameData[i][0]]
                  = [newGameData[i][0], newGameData[i][3]];
              }

              if (newGameData[i][2] !== 0
                && newGameData[i][2] === newGameData[i][0]
                && newGameData[i][1] === 0) {
                newGameData[i][2] *= 2;
                newGameData[i][0] = 0;
                setScore((prevScore) => {
                  return prevScore + newGameData[i][2];
                });
              } else if (newGameData[i][2] === 0) {
                [newGameData[i][2], newGameData[i][0]]
                  = [newGameData[i][0], newGameData[i][2]];
              }

              if (newGameData[i][1] !== 0
                && newGameData[i][1] === newGameData[i][0]) {
                newGameData[i][1] *= 2;
                newGameData[i][0] = 0;
                setScore((prevScore) => {
                  return prevScore + newGameData[i][1];
                });
              } else if (newGameData[i][1] === 0) {
                [newGameData[i][1], newGameData[i][0]]
                  = [newGameData[i][0], newGameData[i][1]];
              }

              break;

            default:
              break;
          }
        }
      }

      let randomColumn = selectRandomLine() > 0.4 ? 0 : 1;

      if (newGameData.every(line => line[1] !== 0)) {
        randomColumn = 0;
      }

      let randomCellIndex = [getRandomIndex(), randomColumn];

      if (newGameData[randomCellIndex[0]][randomCellIndex[1]] !== 0) {
        while (newGameData[randomCellIndex[0]][randomCellIndex[1]] !== 0) {
          randomCellIndex = [getRandomIndex(), randomColumn];
        }
      }

      newGameData[randomCellIndex[0]][randomCellIndex[1]] = getRandomValue();

      setGameData(newGameData);

      setPressedKey('');
    }
  }, [gameData]);

  const handleMoveLeft = useCallback(() => {
    if (gameData.some(row => row.some(cell => cell === 0)) && !isGameLose) {
      const newGameData = [...gameData];

      for (let i = 0; i < newGameData.length; i += 1) {
        for (let j = 1; j < newGameData[i].length; j += 1) {
          switch (j) {
            case 1:
              if (newGameData[i][0] !== 0
                && newGameData[i][0] === newGameData[i][1]) {
                newGameData[i][0] *= 2;
                newGameData[i][1] = 0;
                setScore((prevScore) => {
                  return prevScore + newGameData[i][0];
                });
              } else if (newGameData[i][0] === 0) {
                [newGameData[i][0], newGameData[i][1]]
                  = [newGameData[i][1], newGameData[i][0]];
              }

              break;

            case 2:
              if (newGameData[i][0] !== 0
                && newGameData[i][0] === newGameData[i][2]
                && newGameData[i][1] === 0) {
                newGameData[i][0] *= 2;
                newGameData[i][2] = 0;
                setScore((prevScore) => {
                  return prevScore + newGameData[i][0];
                });
              } else if (newGameData[i][0] === 0) {
                [newGameData[i][0], newGameData[i][2]]
                  = [newGameData[i][2], newGameData[i][0]];
              }

              if (newGameData[i][1] !== 0
                && newGameData[i][1] === newGameData[i][2]) {
                newGameData[i][1] *= 2;
                newGameData[i][2] = 0;
                setScore((prevScore) => {
                  return prevScore + newGameData[i][1];
                });
              } else if (newGameData[i][1] === 0) {
                [newGameData[i][1], newGameData[i][2]]
                  = [newGameData[i][2], newGameData[i][1]];
              }

              break;

            case 3:
              if (newGameData[i][0] !== 0
                && newGameData[i][0] === newGameData[i][3]
                && newGameData[i][2] === 0
                && newGameData[i][1] === 0) {
                newGameData[i][0] *= 2;
                newGameData[i][3] = 0;
                setScore((prevScore) => {
                  return prevScore + newGameData[i][0];
                });
              } else if (newGameData[i][0] === 0) {
                [newGameData[i][0], newGameData[i][3]]
                  = [newGameData[i][3], newGameData[i][0]];
              }

              if (newGameData[i][1] !== 0
                && newGameData[i][1] === newGameData[i][3]
                && newGameData[i][2] === 0) {
                newGameData[i][1] *= 2;
                newGameData[i][3] = 0;
                setScore((prevScore) => {
                  return prevScore + newGameData[i][1];
                });
              } else if (newGameData[i][1] === 0) {
                [newGameData[i][1], newGameData[i][3]]
                  = [newGameData[i][3], newGameData[i][1]];
              }

              if (newGameData[i][2] !== 0
                && newGameData[i][2] === newGameData[i][3]) {
                newGameData[i][2] *= 2;
                newGameData[i][3] = 0;
                setScore((prevScore) => {
                  return prevScore + newGameData[i][2];
                });
              } else if (newGameData[i][2] === 0) {
                [newGameData[i][2], newGameData[i][3]]
                  = [newGameData[i][3], newGameData[i][2]];
              }

              break;

            default:
              break;
          }
        }
      }

      let randomColumn = selectRandomLine() > 0.4 ? 3 : 2;

      if (newGameData.every(line => line[2] !== 0)) {
        randomColumn = 3;
      }

      let randomCellIndex = [getRandomIndex(), randomColumn];

      if (newGameData[randomCellIndex[0]][randomCellIndex[1]] !== 0) {
        while (newGameData[randomCellIndex[0]][randomCellIndex[1]] !== 0) {
          randomCellIndex = [getRandomIndex(), randomColumn];
        }
      }

      newGameData[randomCellIndex[0]][randomCellIndex[1]] = getRandomValue();

      setGameData(newGameData);

      setPressedKey('');
    }
  }, [gameData]);

  useEffect(() => {
    if (gameData.some(row => row.includes(2048))) {
      setIsGameWon(true);
    }

    let isMovesLeft;

    for (let i = 0; i < gameData.length; i += 1) {
      for (let j = 0; j < gameData[i].length; j += 1) {
        if (i === 0) {
          if (j === 0) {
            if (gameData[i][j] === gameData[i + 1][j]
            || gameData[i][j] === gameData[i][j + 1]) {
              isMovesLeft = true;
            }
          }

          if (j === 3) {
            if (gameData[i][j] === gameData[i + 1][j]
              || gameData[i][j] === gameData[i][j - 1]) {
              isMovesLeft = true;
            }
          }

          if (j > 0 && j < 3) {
            if (gameData[i][j] === gameData[i + 1][j]
              || gameData[i][j] === gameData[i][j - 1]
              || gameData[i][j] === gameData[i][j + 1]) {
              isMovesLeft = true;
            }
          }
        }

        if (i === 3) {
          if (j === 0) {
            if (gameData[i][j] === gameData[i - 1][j]
              || gameData[i][j] === gameData[i][j + 1]) {
              isMovesLeft = true;
            }
          }

          if (j === 3) {
            if (gameData[i][j] === gameData[i - 1][j]
              || gameData[i][j] === gameData[i][j - 1]) {
              isMovesLeft = true;
            }
          }

          if (j > 0 && j < 3) {
            if (gameData[i][j] === gameData[i - 1][j]
              || gameData[i][j] === gameData[i][j - 1]
              || gameData[i][j] === gameData[i][j + 1]) {
              isMovesLeft = true;
            }
          }
        }

        if (i > 0 && i < 3) {
          if (j === 0) {
            if (gameData[i][j] === gameData[i - 1][j]
              || gameData[i][j] === gameData[i + 1][j]
              || gameData[i][j] === gameData[i][j + 1]) {
              isMovesLeft = true;
            }
          }

          if (j === 3) {
            if (gameData[i][j] === gameData[i - 1][j]
              || gameData[i][j] === gameData[i + 1][j]
              || gameData[i][j] === gameData[i][j - 1]) {
              isMovesLeft = true;
            }
          }

          if (j > 0 && j < 3) {
            if (gameData[i][j] === gameData[i - 1][j]
              || gameData[i][j] === gameData[i + 1][j]
              || gameData[i][j] === gameData[i][j - 1]
              || gameData[i][j] === gameData[i][j + 1]) {
              isMovesLeft = true;
            }
          }
        }
      }
    }

    if (isMovesLeft) {
      setIsGameLose(false);
    } else {
      setIsGameLose(true);
    }
  }, [gameData]);

  useEffect(() => {
    const initialGameData = [...gameData];
    const firstRandomCell = [getRandomIndex(), getRandomIndex()];
    let secondRandomCell = [getRandomIndex(), getRandomIndex()];

    if (firstRandomCell[0] === secondRandomCell[0]
      && firstRandomCell[1] === secondRandomCell[1]) {
      while (firstRandomCell[0] === secondRandomCell[0]
      && firstRandomCell[1] === secondRandomCell[1]) {
        secondRandomCell = [getRandomIndex(), getRandomIndex()];
      }
    }

    initialGameData[firstRandomCell[0]][firstRandomCell[1]] = getRandomValue();
    initialGameData[secondRandomCell[0]][secondRandomCell[1]]
      = getRandomValue();

    setGameData(initialGameData);
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
      <div>
        <span>Score</span>
        {score}
      </div>
      {/* eslint-disable-next-line no-nested-ternary */}
      {isGameWon ? (
        <h1 className="game-field__winning-title">
          Congratulation!!! You WIN!!!
        </h1>
      ) : (isGameLose ? (
        <h1>You lose :(</h1>
      ) : (
        gameData.map((row, index) => (
          <GameRow
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            gameDataRow={row}
          />
        ))
      ))}
    </div>
  );
});
