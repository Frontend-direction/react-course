import  { useEffect, useState } from 'react';

import useTickTickToeContext from "../hooks/use-tick-tick-toe-context";

import Board from "../components/Board";
import GameSetupDialog from "../components/GameSetupDialog";
import GameResults from "../components/GameResults";
import RestartButton from "../components/RestartButton";
import ResultDialog from '../components/ResultDialog';

function TickTickToePage() {
  const { startGame, restartGame, isGameOver, winningCombination } = useTickTickToeContext();
  const [showSetupModel, setshowSetupModel] = useState(true);
  const [showResultDialog, setShowResultDialog] = useState(false);

  const start = (gameMode, firstPlayer) => {
    startGame(gameMode, firstPlayer);
    setshowSetupModel(false);
  }

  useEffect(() => {
    if(isGameOver) {
      setShowResultDialog(true);
    } else {
      setShowResultDialog(false);
    }
  }, [isGameOver]);

  return (
    <div>
      <h1>Tick-Tick-Toe</h1>
      <Board />
      <RestartButton restartGame={restartGame} />
      <GameResults />
      { showSetupModel && <GameSetupDialog onSubmit={start}/> }
      { showResultDialog && <ResultDialog result={winningCombination} onClose={restartGame} /> }
    </div>
  )
}

export default TickTickToePage;