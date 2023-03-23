import serachImages from "./api";
import SearchBar from './components/SearchBar';

function App() {

 const imageSearch = (term) => {
  console.log(term);
 }


  return (
    <div className="app">
      <SearchBar search={imageSearch}/>
    </div>
  );
}

export default App;
