import { useState } from 'react';

function SearchBar({ search }) {
  const [term, setTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    search(term);
  }

  const handleChange = (e) => {
    setTerm(e.target.value);
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={handleChange}/>
      </form>
    </div>
  );
}

export default SearchBar;