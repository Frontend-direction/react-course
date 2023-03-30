import Button from "../components/Button";
import { GoBell} from 'react-icons/go'

function ButtonPage() {

  const handleClick = () => {
    console.log('clicked');
  }
  
  return (
    <div>
      <Button onClick={handleClick}><GoBell />Ok</Button>
    </div>
  );
}

export default ButtonPage;
