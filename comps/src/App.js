import Button from "./Button";
import './index.css';
import { GoBell} from 'react-icons/go'



function App() {

  const handleClick = () => {
    console.log('clicked');
  }
  
  return (
    <div className="App">
    
      <Button onClick={handleClick}><GoBell />Ok</Button>
    </div>
  );
}

export default App;
