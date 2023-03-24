import { useState } from 'react';
import serachImages from "./api";
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

function App() {
const [images, setImages] = useState([]);

 const imageSearch = async  (term) => {
  const images = await serachImages(term);
  setImages(images);
 }


  return (
    <div className="app">
      <SearchBar search={imageSearch}/>
      <ImageList images={images} />
    </div>
  );
}

export default App;
