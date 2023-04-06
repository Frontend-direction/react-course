import TickTickToePage from './pages/TickTickToePage';
import './App.css';
import { TickTickToeProvider } from './context/tick-tick-toe-context';

function App() {
  return (
    <div className="wrapper">
      <TickTickToeProvider>
        <TickTickToePage />
      </TickTickToeProvider>
    </div>
  );
}

export default App;
