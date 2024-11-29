import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig.mjs";
import { collection, query, where, getDocs } from "firebase/firestore";

const BookSelection = ({ school, selectedClass, onOrder }) => {
  const [books, setBooks] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState({});

  useEffect(() => {
    const fetchBooks = async () => {
      const bookQuery = query(
        collection(db, "books"),
        where("school", "==", school.id),
        where("class", "==", selectedClass)
      );
      const bookSnapshot = await getDocs(bookQuery);
      const bookData = bookSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBooks(bookData);
      setSelectedBooks(bookData.reduce((acc, book) => ({ ...acc, [book.id]: true }), {}));
    };

    fetchBooks();
  }, [school, selectedClass]);

  const handleCheckboxChange = (bookId) => {
    setSelectedBooks({ ...selectedBooks, [bookId]: !selectedBooks[bookId] });
  };

  const handleOrder = () => {
    const selectedBookDetails = books.filter(book => selectedBooks[book.id]);
    onOrder(selectedBookDetails);
  };

  return (
    <div>
      <h2>Books for {selectedClass}</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedBooks[book.id]}
                onChange={() => handleCheckboxChange(book.id)}
              />
              {book.name} - ${book.price}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleOrder}>Order Now</button>
    </div>
  );
};

export default BookSelection;
