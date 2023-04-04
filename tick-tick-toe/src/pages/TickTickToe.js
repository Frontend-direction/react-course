import Board from "../components/Board";
import GameSetupDialog from "../components/GameSetupDialog";
import GameResults from "../components/GameResults";

function GameBoard() {
  return (
    <div>
      <h1>Tick-Tick-Toe</h1>
      <Board />
      <GameResults />
      <GameSetupDialog />
    </div>
  )
}

export default GameBoard;