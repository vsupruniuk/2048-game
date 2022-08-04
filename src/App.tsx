import './App.scss';
import React, { useState } from 'react';
import { GameField } from './components/GameField';
import { StartScreen } from './components/StartScreen/StartScreen';

const App: React.FC = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <div className="App">
      {isGameStarted ? (
        <GameField />
      ) : (
        <StartScreen
          startGame={() => setIsGameStarted(true)}
        />
      )}
    </div>
  );
};

export default App;
