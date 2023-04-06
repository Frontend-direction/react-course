import ReactDOM from "react-dom";

function ResultDialog({ result, onClose }) {
  const content = result?.length ? 'Win' : 'Tie';

  return ReactDOM.createPortal(
    <div className="modal" onClick={onClose}>
      <div className="modal-content">
        <h2 style={{ 'textAlign': 'center' }}>{content}</h2>
      </div>
    </div>,
    document.getElementById('modal-container')
  );
}

export default ResultDialog;