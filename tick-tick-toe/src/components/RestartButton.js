import { FaRedo } from "react-icons/fa";

function RestartButton() {
  const styles ={
    'fontSize': '3em',
    'width': '1em',
    'height': '1.9em',
    'cursor': 'pointer',
    'margin': '0 auto',
    'overflow': 'hidden',
    'display': 'flex',
    'alignItems': 'center',
  }

  return (
    <div style={styles} title="Start new game">
        <FaRedo />
    </div>
  );
}

export default RestartButton;