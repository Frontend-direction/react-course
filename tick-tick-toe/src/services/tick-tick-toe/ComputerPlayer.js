import { Player } from "./Player";

class ComputerPlayer extends Player {
  // @TODO: Implement strategies depends on game mode (easy, difficult)
  getMoveIndex(board, index) {
    let randomIndex = Math.floor(Math.random() * board.length);

    while(board[randomIndex] !== '') {
      randomIndex = Math.floor(Math.random() * board.length);
    }

    return randomIndex;
  }
}

export default ComputerPlayer;