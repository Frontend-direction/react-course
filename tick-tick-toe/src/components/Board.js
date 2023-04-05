import './Board.css';
import useGameContext from '../hooks/use-game-context';

function Board() {
  const { board, paleyerMove } = useGameContext();

  const renderGrid = (gameBoard) => {
    let cellIndex = 0;

    const renderCell = (sign) => {
      return (
        <td key={cellIndex} className="board__cell">
          <div className="board__cell--fixed" data-key={cellIndex++}>{sign}</div>
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