import React, { ChangeEvent, useEffect, useState } from "react";
import { useGetFilteredData } from "../../hooks/useGetFilteredData";
import { BookCard } from "../bookCard/BookCard";
import { BookInterface } from "../../types";
import "./search.css";
export const Search = () => {
  const { data } = useGetFilteredData();

  const [books, setBooks] = useState(data || []);

  const [searchValue, setSearchValue] = useState<string>("");

  const handleCategoryChange = (bookID: number, category: string) => {};

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
        {books.length > 0 ? (
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
