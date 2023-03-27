import axios from 'axios';
import './index.css';
import {useEffect, useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => { 
    const { data } = await axios.get('http://localhost:3001/books');

    setBooks(data);
  }

  const createBook = async (title) => {
    // setBooks(prev => [...prev, { title, id: Math.round(Math.random() * 999) }]);
    const { data } = await axios.post('http://localhost:3001/books', {
      title
    });

    setBooks(prev => [...prev, data] );
  }

  const deleteBook = async (id) => {
    await axios.delete('http://localhost:3001/books/' + id);

    const updatedBooks = books.filter(book => {
      return book.id !== id
    });

    setBooks(updatedBooks);
  }

  const editBook = async (id, newTitle) => {
    const {data} = await axios.put('http://localhost:3001/books/' + id, {
      title: newTitle
    });

    const updatedBooks = books.map(book => {
      if(book.id === id) {
        return { ...book, ...data }
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
