import { createContext, useState } from 'react';
import TickTickToe from '../game/TickTickToe';

const GameContext = createContext();
const game = new TickTickToe();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState([]);

  const move = (cell) => {
    game.move(cell);
    setBoard(game.gameBoard);
  }

  const startGame = (gameMode, firstPlayer) => {
    game.start(gameMode, firstPlayer);
    setBoard(game.gameBoard);
  }

  const share = {
    startGame,
    board,
    paleyerMove: move,
    score: game.score
  }
  
  return (
    <GameContext.Provider value={share}>
      {children}
    </GameContext.Provider>
  )
}

export { GameProvider };

export default GameContext;