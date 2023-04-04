class HumanPlayer {
  constructor(name, sign) {
    this.name = name;
    this.sign = sign;
  }

  getMoveIndex(board, index) {
    return index;
  }
}


export default HumanPlayer;