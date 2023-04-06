import  { useState } from 'react';

import useGameContext from "../hooks/use-game-context";

import Board from "../components/Board";
import GameSetupDialog from "../components/GameSetupDialog";
import GameResults from "../components/GameResults";
import RestartButton from "../components/RestartButton";

function TickTickToePage() {
  const { startGame } = useGameContext();
  const [showModal, setShowModal] = useState(true);

  const start = (gameMode, firstPlayer) => {
    startGame(gameMode, firstPlayer);
    setShowModal(false);
  }

  return (
    <div>
      <h1>Tick-Tick-Toe</h1>
      <Board />
      <RestartButton />
      <GameResults />
      { showModal && <GameSetupDialog onSubmit={start}/> }
    </div>
  )
}

export default TickTickToePage;