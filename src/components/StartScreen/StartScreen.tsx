import React from 'react';
import './StartScreen.scss';

type Props = {
  startGame: () => void
};

export const StartScreen: React.FC<Props> = React.memo(({ startGame }) => {
  return (
    <div className="start-screen">
      <h1 className="start-screen__title">2048</h1>
      <button
        type="button"
        className="start-screen__button"
        onClick={() => startGame()}
      >
        Start game
      </button>
    </div>
  );
});
