import './GameResults.css';

function GameResults() {
  
  return (
    <>
      <div className='restart' title="Start new game">
        <span style={{ verticalAlign: 'top', position: 'relative', top: '-10px' }}>#</span>
      </div>
      <table className='result__table'>
        <thead>
          <tr>
            <th className="item-name">Computer</th>
            <th className="item-name" style={{ paddingRight: '10px', paddingleft: '10px' }}>Draws</th>
            <th className="item-name">Player</th>
          </tr>
          <tr>
            <td className="item-value">0</td>
            <td className="item-value" style={{ paddingRight: '10px', paddingleft: '10px' }}>0</td>
            <td className="item-value" id="player_score">0</td>
          </tr>
        </thead>
      </table>
    </>
  );
}

export default GameResults;