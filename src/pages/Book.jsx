import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import books from "../data/books";

export default function Book() {
  const { bookSlug } = useParams();
  const [currentBook, setCurrentBook] = useState(undefined);

  useEffect(() => {
    const foundBook = books.find((book) => book.slug === bookSlug);
    setCurrentBook(foundBook);
  }, [bookSlug]);

  return (
    <section className="Book">
      <h1>{currentBook.title}</h1>
      <p>{currentBook.author}</p>
      <p>{currentBook.description}</p>
    </section>
  );
}
