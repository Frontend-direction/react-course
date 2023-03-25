import './index.css';
import {useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks(prev => [...prev, { title, id: Math.round(Math.random() * 999) }]);
  }

  const deleteBook = (id) => {
    const updatedBooks = books.filter(book => {
      return book.id !== id
    });

    setBooks(updatedBooks);
  }

  const editBook = (id, newTitle) => {
    const updatedBooks = books.map(book => {
      if(book.id === id) {
        return { ...book, title: newTitle }
      }

      return book;
    });

    setBooks(updatedBooks);
  }

  return (
    <div className='app'>
      <BookList books={books} onDelete={deleteBook} onEdit={editBook}/>
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App;
