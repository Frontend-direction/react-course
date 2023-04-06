import './Board.css';
import useGameContext from '../hooks/use-game-context';

function Board() {
  const { board, paleyerMove, winningCombination = [] } = useGameContext();
  console.log(winningCombination)
  const renderGrid = (gameBoard) => {
    let cellIndex = 0;

    const renderCell = (sign) => {
      const className = winningCombination.includes(cellIndex) ? 'board__cell--fixed highlight' : 'board__cell--fixed';
      return (
        <td key={cellIndex} className="board__cell">
          <div className={className} data-key={cellIndex++}>{sign}</div>
        </td>
      )
    }
    
    return (
      gameBoard.map((row,i) => {
        return (
          <tr key={i}>
            {row.map((el) => renderCell(el))}
          </tr>
        )
      })
    )
  }

  const handleCellClick = (e) => {
    paleyerMove(e.target.dataset.key);
  }

  return ( 
    <>
      <table className="board" onClick={handleCellClick}>
        <thead>
          {renderGrid(board)}
        </thead>
      </table>
    </>
   );
}

export default Board;