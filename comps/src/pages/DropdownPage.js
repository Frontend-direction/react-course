import { useState } from 'react';
import Dropdown from '../components/Dropdown';

function DropDownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  }

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];

  return <Dropdown options={options} onChange={handleSelect} value={selection}/>;
}

export default DropDownPage;