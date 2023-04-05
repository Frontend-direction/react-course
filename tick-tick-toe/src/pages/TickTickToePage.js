import  { useEffect, useState } from 'react';
import Board from "../components/Board";
import GameSetupDialog from "../components/GameSetupDialog";
import GameResults from "../components/GameResults";
import TickTickToe from '../game/TickTickToe';

function TickTickToePage() {
  const[game, setGame] = useState(new TickTickToe());
  const [board, setBoard] = useState([]);
  const [showModal, setShowModal]  = useState(false);

  useEffect(() => {
    setShowModal(true);
    // game.start();
    // setBoard(game.gameBoard);
  }, [game]);

  const handleMove = (cell) => {
    game.move(cell);
    setBoard(game.gameBoard);
  }

  const reset = () => {
    setGame(new TickTickToe());
    setBoard(game.gameBoard);
  }

  return (
    <div>
      <h1>Tick-Tick-Toe</h1>
      <Board handleClick={handleMove} board={board} />
      <GameResults score={game.score}/>
      <GameSetupDialog onClose={() => setShowModal(false)}/>
    </div>
  )
}

export default TickTickToePage;