import { createContext, useState } from 'react';
import TickTickToe from '../game/TickTickToe';

const GameContext = createContext();
const game = new TickTickToe();

const GameProvider = ({ children }) => {
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
    startGame,
    restartGame,
    paleyerMove,
  }
  
  return (
    <GameContext.Provider value={gameState}>
      {children}
    </GameContext.Provider>
  )
}

export { GameProvider };

export default GameContext;