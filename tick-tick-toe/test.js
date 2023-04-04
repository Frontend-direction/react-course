class TickTickToe {
  winingCombination = [[0,1,2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  board = ['','','','','','','','', ''];
  playerOne;
  playerTwo;
  currentPlayer;

  constructor() {
    this.playerOne = new ComputerPlayer('AI','O');
    this.playerTwo = new HumanPlayer('Vova','X')
    this.currentPlayer = this.playerOne;
  }

  start() {
    this.checkNextMove();
  }

  checkNextMove() {
    if(this.currentPlayer instanceof ComputerPlayer) {
      const cell = this.currentPlayer.getMoveIndex(this.board);
      this.move(cell);
    }
  }

  
  move(cell) {
    if(!this.isValidMove(cell)) return;

    this.updateBoard(cell);

    this.checkResult();

    this.swapCurrentPlayer();
    
    this.checkNextMove();
  }

  updateBoard(cell) {
    console.log(cell)
    this.board[cell] = this.currentPlayer.sign;
  }

  log() {
    console.log(this.board[0] + '|' + this.board[1] + '|'  +this.board[2] + '\n')
    console.log(this.board[3] + '|' + this.board[4] + '|'  +this.board[5] + '\n')
    console.log(this.board[6] + '|' + this.board[7] + '|'  +this.board[8] + '\n')
    console.log('\n')
  }

  checkResult() {
    this.log()

    if(this.isDraw()) {
      console.log('it is draw');
      return;
    }

    if(this.isWin()) {
      console.log(`Player ${this.currentPlayer.name} won the game`);
      return;
    }
  }

  swapCurrentPlayer() {
    this.currentPlayer = this.currentPlayer === this.playerOne? this.playerTwo : this.playerOne;
  }

  isDraw() {
    return !this.isWin() && this.board.every(cell => cell !== '');
  }

  isWin() {
    return !!this.winingCombination.find(combination => combination.every(index => this.board[index] === this.currentPlayer.sign));
  }

  isValidMove(cell) {
    return this.board[cell] === '';
  }
}

class HumanPlayer {
  constructor(name, sign) {
    this.name = name;
    this.sign = sign;
  }

  getMoveIndex(board, index) {
    return index;
  }
}

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
const game = new TickTickToe();
game.start();

function enter(e) {
  game.move(+e)
}


