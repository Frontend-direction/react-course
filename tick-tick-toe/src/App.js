import TickTickToePage from './pages/TickTickToePage';
import './App.css';
import { GameProvider } from './context/game-context';

function App() {
  return (
    <div className="wrapper">
      <GameProvider>
        <TickTickToePage />
      </GameProvider>
    </div>
  );
}

export default App;
