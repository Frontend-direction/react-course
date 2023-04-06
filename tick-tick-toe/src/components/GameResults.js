import './GameResults.css';
import useTickTickToeContext from '../hooks/use-tick-tick-toe-context';

function GameResults() {
  const { score } = useTickTickToeContext();
  
  const renderHeaders = () => {
    const headers = Object.keys(score);

    return (
      headers.map((header,i) => {
        return <th key={i} className="item-name">{header.toLocaleUpperCase()}</th>
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