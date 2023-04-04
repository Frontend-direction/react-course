import { createTwoDemensionlArr } from '../utils/create-two-dimensional-arr';
import './Board.css';

function Board({ size = 3, handleClick }) {
  const renderGrid = (length) => {
    const grid = createTwoDemensionlArr(length);

    const renderCell = (key) => {
      return (
        <td key={key} className="board__cell">
          <div className="board__cell--fixed" data-key={key}></div>
        </td>
      )
    }

    return (
      grid.map((row,i) => {
        return (
          <tr key={i}>
            {row.map(el => renderCell(el))}
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
          {renderGrid(size)}
        </thead>
      </table>
    </>
   );
}

export default Board;