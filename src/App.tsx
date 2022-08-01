import './App.scss';
import React from 'react';
import { GameField } from './components/GameField';

const App: React.FC = () => {
  return (
    <div className="App">
      <GameField />
    </div>
  );
};

export default App;
