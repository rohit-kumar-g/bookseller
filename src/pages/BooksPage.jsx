import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useParams, useNavigate } from 'react-router-dom';

function BooksPage() {
  const { schoolId, classId } = useParams();
  const [books, setBooks] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      const q = query(collection(db, 'books'), where('school', '==', schoolId), where('class', '==', classId));
      const snapshot = await getDocs(q);
      const fetchedBooks = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setBooks(fetchedBooks);
      setSelectedBooks(Object.fromEntries(fetchedBooks.map((book) => [book.id, true])));
    };
    fetchBooks();
  }, [schoolId, classId]);

  const handleOrderNow = async () => {
    const selected = books.filter((book) => selectedBooks[book.id]);
    const userCart = {
      books: selected,
      total: selected.reduce((acc, book) => acc + book.price, 0),
    };
    navigate('/checkout', { state: userCart });
  };

  return (
    <div className="books-page">
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <input
              type="checkbox"
              checked={selectedBooks[book.id]}
              onChange={(e) => setSelectedBooks({ ...selectedBooks, [book.id]: e.target.checked })}
            />
            {book.name} - ${book.price} ({book.discount}% off)
          </li>
        ))}
      </ul>
      <button onClick={handleOrderNow}>Order Now</button>
    </div>
  );
}

export default BooksPage;
