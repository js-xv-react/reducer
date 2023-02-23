import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { books } = useContext(BookContext);

  return (
    <div>
      {books.map((book) => (
        <BookDetails key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
