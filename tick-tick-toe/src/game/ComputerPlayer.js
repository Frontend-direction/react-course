class ComputerPlayer {
  constructor(name, sign) {
    this.name = name;
    this.sign = sign;
  }

  getMoveIndex(board, index) {
    let randomIndex = Math.floor(Math.random() * board.length);

    while(board[randomIndex] !== '') {
      randomIndex = Math.floor(Math.random() * board.length);
    }

    return randomIndex;
  }
}

export default ComputerPlayer;