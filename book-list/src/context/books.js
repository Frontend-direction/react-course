import axios from 'axios';
import  { createContext, useState } from 'react';

const BooksContext = createContext ();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => { 
    const { data } = await axios.get('http://localhost:3001/books');

    setBooks(data);
  }

  const createBook = async (title) => {
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

  const share = {
    books,
    fetchBooks,
    createBook,
    deleteBook,
    editBook
  }

  return (
    <BooksContext.Provider value = {share}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };

export default BooksContext;