import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import './GameSetupDialog.css';

function GameSetupDialog({ onClose, onSubmit }) {
  const[mode, setMode] = useState('easy');
  const[playerSign, setPlayerSign] = useState('X');

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onSubmit(mode, playerSign);
  }

  const handleModeChange = (e) => {
    setMode(e.target.value);
  }

  const handlePlayerSignChange = (e) => {
    setPlayerSign(e.target.value);
  }

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
          <h2>How would you like to play?</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <h3>Difficulty:</h3>
              <label>
                <input 
                  type="radio" 
                  value="easy" 
                  checked={mode==='easy'} 
                  name="mode" 
                  onChange={handleModeChange}
                />
                  Easy
              </label>
              <label>
                <input 
                  type="radio" 
                  value="hard" 
                  checked={mode==='hard'}  
                  name="mode" 
                  onChange={handleModeChange}
                /> 
                  Hard
              </label>
            </div>
            <div>
              <h3>Play as:</h3>
              <label>
                <input 
                  type="radio" 
                  value="X" 
                  checked={playerSign==='X'} 
                  name="player" 
                  onChange={handlePlayerSignChange}
                /> 
                  X (go first)
              </label>
              <label>
                <input 
                  type="radio" 
                  value="O" 
                  checked={playerSign==='O'} 
                  name="player" 
                  onChange={handlePlayerSignChange}
                />
                  O
              </label>
            </div>
            <button type="submit" className="modal-close" onClick={handleSubmit}>Play</button>
          </form>
      </div>
    </div>,
    document.getElementById('modal-container')
  );
}

export default GameSetupDialog;