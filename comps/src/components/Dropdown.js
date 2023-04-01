import { useEffect, useRef, useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown ({ options, onChange, value }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (e) => {
      if(!divEl.current) return;
      
      if(!divEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler, true);
    }

  }, []);

  const handleClick = () => {
    setIsOpen(curr => !curr);
  }

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  }

  const optionsToRender = options.map(option => {
    return (
      <option key={option.value} onClick={() => handleOptionClick(option)}>{option.label}</option>
    )
  });

  let content = value?.label || 'Select...';

  return (
    <div className="w-48 relative" ref={divEl}>
    <Panel
      className="flex justify-between items-center cursor-pointer"
      onClick={handleClick}
    >
      {content}
      <GoChevronDown className="text-lg" />
    </Panel>
    {isOpen && (
      <Panel  className="absolute top-full">
         {optionsToRender}
      </Panel>
    )}
  </div>
  )
}


export default Dropdown;