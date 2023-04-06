import ComputerPlayer from "./ComputerPlayer";
import HumanPlayer from "./HumanPlayer";
import { createTwoDemensionlArr } from "../utils/create-two-dimensional-arr";

class TickTickToe {
  _winingCombination;
  _board;
  _boardSize;
  _playerOne;
  _playerTwo;
  _currentPlayer;
  _gameOver = false;
  _results = {}

  get score() {
    return { ...this._results };
  }

  get gameBoard() {
    return createTwoDemensionlArr(this._board, this._boardSize);
  }

  start(mode, playerOne) {
    this._init(mode, playerOne);
    this._checkNextMove();
  }

  restartGame() {
    this._gameOver = false;
    this._initBoard(this.boardSize);
  }

  move(cell) {
    if(!this._isValidMove(cell) || this._gameOver) return;

    this._updateBoard(cell);

    this._checkResult();

    if(this._gameOver) return;

    this._swapCurrentPlayer();
    
    this._checkNextMove();
  }

  _init(mode, playerOne){
    this._initPlayers(mode, playerOne);
    this._initBoard();
    this._initEmptyResults();
  }

  _initPlayers(mode, playerOne) {
    if(playerOne === 'X') {
      this._playerOne = new HumanPlayer('Human','X');
      this._playerTwo = new ComputerPlayer('AI', 'O', mode);
    } else {
      this._playerOne = new ComputerPlayer('AI','X', mode);
      this._playerTwo = new HumanPlayer('Human','O');
    }

    this._currentPlayer = this._playerOne;
  }

  _initBoard(boardSize = 3) {
    this._board = ['','','','','','','','',''];
    this._boardSize = boardSize;
    this._winingCombination = [[0,1,2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  }

  _initEmptyResults() {
    this._gameOver = false;
    this._results = {
      [this._playerOne.name]: 0,
      [this._playerTwo.name]: 0,
      ties: 0,
    }
  }

  _checkNextMove() {
    if(this._currentPlayer instanceof ComputerPlayer) {
      const cell = this._currentPlayer.getMoveIndex(this._board);
      this.move(cell);
    }
  }

  _updateBoard(cell) {
    this._board[cell] = this._currentPlayer.sign;
  }

  _checkResult() {
    if(this._isDraw()) {
      this._gameOver = true;
      this._results.ties += 1;
      console.log('it is draw');
      return;
    }

    if(this._isWin()) {
      console.log(`Player ${this._currentPlayer.name} won the game`);
      this._gameOver = true;
      this._results[this._currentPlayer.name] += 1;
      return;
    }
  }

  _swapCurrentPlayer() {
    this._currentPlayer = this._currentPlayer === this._playerOne
      ? this._playerTwo 
      : this._playerOne;
  }

  _isDraw() {
    return !this._isWin() && this._board.every(cell => cell !== '');
  }

  _isWin() {
    return !!this._winingCombination.find(combination => {
      return combination.every(index => this._board[index] === this._currentPlayer.sign);
    });
  }

  _isValidMove(cell) {
    return this._board[cell] === '';
  }
}


export default TickTickToe;
