import ReactDOM from "react-dom";
import { useEffect } from "react";
import './GameSetupDialog.css';

function GameSetupDialog({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div id="optionsDlg" className="modal">
        <div className="modal-content">
            <h2>How would you like to play?</h2>
            <h3>Difficulty:</h3>
            {/* <label><input type="radio" name="difficulty" id="r0" value="0" />easy&nbsp;</label>
            <label><input type="radio" name="difficulty" id="r1" value="1" checked />hard</label><br/> */}
            <h3>Play as:</h3>
            {/* <label><input type="radio" name="player" id="rx" value="x" checked />X (go first)&nbsp;</label>
            <label><input type="radio" name="player" id="ro" value="o" />O<br/></label> */}
            <p><button id="okBtn">Play</button></p>
        </div>
      </div>
    </div>,
    document.getElementById('modal-container')
  );
}

export default GameSetupDialog;