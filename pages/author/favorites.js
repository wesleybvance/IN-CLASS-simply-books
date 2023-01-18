/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { favoriteAuthors } from '../../api/authorData';
import AuthorCard from '../../components/AuthorCard';
import { useAuth } from '../../utils/context/authContext';

export default function FavoriteAuthors() {
  const { user } = useAuth();
  const [authors, setAuthors] = useState([]);

  const getAllFavAuthors = () => {
    favoriteAuthors(user.uid).then(setAuthors);
  };

  useEffect(() => {
    getAllFavAuthors();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/author/new" passHref>
        <Button>Add Author</Button>
      </Link>
      <div className="d-flex flex-wrap">{authors?.map((author) => (
        <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getAllFavAuthors} />
      ))}
      </div>
    </div>
  );
}
