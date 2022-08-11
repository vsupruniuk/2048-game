import React from 'react';
import './StartScreen.scss';

type Props = {
  startGame: () => void
};

export const StartScreen: React.FC<Props> = React.memo(({ startGame }) => {
  return (
    <div className="start-screen">
      <h1 className="start-screen__title">2048</h1>

      <div className="start-screen__description">
        Join the tiles, get to
        <b> 2048!</b>
      </div>

      <button
        type="button"
        className="start-screen__button"
        onClick={() => startGame()}
      >
        Start game
      </button>

      <div className="start-screen__instruction">
        <b>HOW TO PLAY: </b>
        Use your
        <b> arrow keys </b>
        to move the tiles. Tiles with the same number
        <b> merge into one </b>
        when they touch. Add them up to reach
        <b> 2048!</b>
      </div>
    </div>
  );
});
