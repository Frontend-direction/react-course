import { Player } from "./Player";
import { RandomStrategy } from "./RandomStrategy";
import { MinMaxStrategy } from "./MinMaxStrategy";

class ComputerPlayer extends Player {
  constructor(name, sign) {
    super(name, sign);
    this.strategies = {
      'easy': new RandomStrategy(),
      'hard': new MinMaxStrategy(),
    }
  }
  
  getMoveIndex(board, index, mode) {
    const strategy = this.strategies[mode] || this.strategies['easy'];

    return strategy.generateBestSpot(board);
  }
}

export default ComputerPlayer;