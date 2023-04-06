export class RandomStrategy {
  generateBestSpot(board) {
    let randomIndex = Math.floor(Math.random() * board.length);

    while(board[randomIndex] !== '') {
      randomIndex = Math.floor(Math.random() * board.length);
    }

    return randomIndex
  }
}