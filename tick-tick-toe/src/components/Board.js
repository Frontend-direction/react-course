import './Board.css';

function Board({ board, handleClick }) {
  const renderGrid = () => {
    let cellIndex = 0;

    const renderCell = (sign) => {
      return (
        <td key={cellIndex} className="board__cell">
          <div className="board__cell--fixed" data-key={cellIndex++}>{sign}</div>
        </td>
      )
    }
    
    return (
      board.map((row,i) => {
        return (
          <tr key={i}>
            {row.map((el) => renderCell(el))}
          </tr>
        )
      })
    )
  }

  const handleCellClick = (e) => {
    handleClick(e.target.dataset.key);
  }

  return ( 
    <>
      <table className="board" onClick={handleCellClick}>
        <thead>
          {renderGrid()}
        </thead>
      </table>
    </>
   );
}

export default Board;