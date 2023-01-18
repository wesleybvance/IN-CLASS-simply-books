/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { booksOnSale } from '../../api/bookData';
import BookCard from '../../components/BookCard';
import { useAuth } from '../../utils/context/authContext';

export default function BooksOnSale() {
  const { user } = useAuth();
  const [books, setBooks] = useState([]);

  const getAllBooksOnSale = () => {
    booksOnSale(user.uid).then(setBooks);
  };

  useEffect(() => {
    getAllBooksOnSale();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/book/new" passHref>
        <Button>Add A Book</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* TODO: map over books here using BookCard component */}
        {books?.map((book) => (
          <BookCard key={book.firebaseKey} bookObj={book} onUpdate={getAllBooksOnSale} />
        ))}
      </div>

    </div>
  );
}
