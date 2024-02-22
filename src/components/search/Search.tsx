import React, { ChangeEvent, useEffect, useState } from "react";
import { BookCard } from "../bookCard/BookCard";
import { BookInterface } from "../../types";
import "./search.css";
import { useBooksContext } from "../../context/BooksContext";

export const Search = () => {
  const contextData = useBooksContext();
  const { data, moveBookToAnotherCategory } = contextData ?? {};

  const [books, setBooks] = useState<BookInterface[] | undefined>(data || []);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleCategoryChange = (bookID: number, category: string) => {
    moveBookToAnotherCategory && moveBookToAnotherCategory(bookID, category);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const filteredData = data?.filter((book: BookInterface) =>
      book.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    setBooks(filteredData);
    setSearchValue(value);
  };

  useEffect(() => {
    if (!searchValue) {
      setBooks(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  useEffect(() => {
    setBooks(data);
  }, [data]);

  return (
    <div className="container">
      <input
        type="search"
        className="input"
        placeholder="Start typing book name here..."
        onChange={handleInputChange}
        value={searchValue}
      />
      <div>
        {books && books.length > 0 ? (
          <div className="books_container">
            {" "}
            {books.map((book: BookInterface) => (
              <BookCard
                book={book}
                handleChange={handleCategoryChange}
                key={book.id}
              />
            ))}{" "}
          </div>
        ) : (
          <h4 className="no_books_text">No books found!</h4>
        )}
      </div>
    </div>
  );
};
