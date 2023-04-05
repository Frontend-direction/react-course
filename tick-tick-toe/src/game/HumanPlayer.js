import { Player } from "./Player";

class HumanPlayer extends Player {
  getMoveIndex(board, index) {
    return index;
  }
}


export default HumanPlayer;