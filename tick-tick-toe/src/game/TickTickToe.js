import ComputerPlayer from "./ComputerPlayer";
import HumanPlayer from "./HumanPlayer";
import { createTwoDemensionlArr } from "../utils/create-two-dimensional-arr";

class TickTickToe {
  winingCombination = [[0,1,2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  _board = ['','','','','','','','',''];
  boardSize;
  playerOne;
  playerTwo;
  currentPlayer;
  gameOver = false;
  score = {}

  constructor() {
    this.playerOne = new ComputerPlayer('AI','O');
    this.playerTwo = new HumanPlayer('Vova','X')
    this.currentPlayer = this.playerOne;
    this.boardSize = 3;
    this.score = {
      [this.playerOne.name]: 0,
      [this.playerTwo.name]: 0,
      ties: 0,
    }
  }

  get gameBoard() {
    return createTwoDemensionlArr(this._board, this.boardSize);
  }
  start() {
    this.checkNextMove();
  }

  checkNextMove() {
    if(this.currentPlayer instanceof ComputerPlayer) {
      const cell = this.currentPlayer.getMoveIndex(this._board);
      this.move(cell);
    }
  }
  
  move(cell) {
    if(!this.isValidMove(cell)) return;

    this.updateBoard(cell);

    this.checkResult();

    if(this.gameOver) return;

    this.swapCurrentPlayer();
    
    this.checkNextMove();
  }

  updateBoard(cell) {
    this._board[cell] = this.currentPlayer.sign;
  }

  log() {
    console.log(this._board[0] + '|' + this._board[1] + '|'  +this._board[2] + '\n')
    console.log(this._board[3] + '|' + this._board[4] + '|'  +this._board[5] + '\n')
    console.log(this._board[6] + '|' + this._board[7] + '|'  +this._board[8] + '\n')
    console.log('\n')
  }

  checkResult() {
    if(this.isDraw()) {
      this.gameOver = true;
      this.score.ties += 1;
      console.log('it is draw');
      return;
    }

    if(this.isWin()) {
      console.log(`Player ${this.currentPlayer.name} won the game`);
      this.gameOver = true;
      this.score[this.currentPlayer.name] += 1;
      return;
    }
  }

  swapCurrentPlayer() {
    this.currentPlayer = this.currentPlayer === this.playerOne? this.playerTwo : this.playerOne;
  }

  isDraw() {
    return !this.isWin() && this._board.every(cell => cell !== '');
  }

  isWin() {
    return !!this.winingCombination.find(combination => combination.every(index => this._board[index] === this.currentPlayer.sign));
  }

  isValidMove(cell) {
    return this._board[cell] === '';
  }
}


export default TickTickToe;
