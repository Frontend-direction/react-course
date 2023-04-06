import { createContext, useState } from 'react';
import TickTickToe from '../services/tick-tick-toe/TickTickToe';

const TickTickToeContext = createContext();
const game = new TickTickToe();

const TickTickToeProvider = ({ children }) => {
  const [board, setBoard] = useState([]);

  const paleyerMove = (cell) => {
    game.move(cell);
    setBoard(game.gameBoard);
  }

  const startGame = (gameMode, firstPlayer) => {
    game.start(gameMode, firstPlayer);
    setBoard(game.gameBoard);
  }

  const restartGame = () => {
    game.restartGame();
    setBoard(game.gameBoard);
  }

  const gameState = {
    board,
    score: game.score,
    winningCombination: game.winningCombination,
    isGameOver: game.isGameOver,
    startGame,
    restartGame,
    paleyerMove,
  }
  
  return (
    <TickTickToeContext.Provider value={gameState}>
      {children}
    </TickTickToeContext.Provider>
  )
}

export { TickTickToeProvider };

export default TickTickToeContext;