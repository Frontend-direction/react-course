import  { useEffect, useState } from 'react';
import Board from "../components/Board";
import GameSetupDialog from "../components/GameSetupDialog";
import GameResults from "../components/GameResults";
import TickTickToe from '../game/TickTickToe';

function TickTickToePage() {
  const[game, setGame] = useState(new TickTickToe());
  
  useEffect(() => {
    game.start();
  }, [game]);

  const handleMove = (cell) => {
    game.move(cell);
  }


  return (
    <div>
      <h1>Tick-Tick-Toe</h1>
      <Board handleClick={handleMove}/>
      <GameResults />
      <GameSetupDialog />
    </div>
  )
}

export default TickTickToePage;