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

  //   handles - If user moves book from one category to another
  const handleCategoryChange = (bookID: number, category: string) => {
    moveBookToAnotherCategory && moveBookToAnotherCategory(bookID, category);
  };

//   search value change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    // matches with title of book
    const filteredData = data?.filter((book: BookInterface) =>
      book.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    setBooks(filteredData);
    setSearchValue(value);
  };

//   If user clear using ctrl + backspace.
  useEffect(() => {
    if (!searchValue) {
      setBooks(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

//   If context data chagnes update the books data
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
