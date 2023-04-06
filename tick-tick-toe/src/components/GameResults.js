import './GameResults.css';
import useGameContext from '../hooks/use-game-context';

function GameResults() {
  const { score } = useGameContext();
  
  const renderHeaders = () => {
    const headers = Object.keys(score);

    return (
      headers.map((header,i) => {
        return <th key={i} className="item-name">{header}</th>
      })
    )
  }

  const renderRows = () => {
    const rows = Object.values(score);

    return (
      rows.map((row, i) => {
        return  <td key={i} className="item-value">{row}</td>
      })
    )
  }

  return (
    <>
      <table className='result__table'>
        <thead>
          <tr>
           {renderHeaders()}
          </tr>
          <tr>
            {renderRows()}
          </tr>
        </thead>
      </table>
    </>
  );
}

export default GameResults;