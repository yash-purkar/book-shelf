import React from "react";
import { BookInterface } from "../../types";
import { BookCard } from "../bookCard/BookCard";
import "./wantToRead.css";
interface WantToReadProps {
  books: BookInterface[];
}
export const WantToRead: React.FC<WantToReadProps> = ({
  books,
}) => {
  return (
    <div>
      <h2 className="category_title">Want To Read</h2>
      <div className="category">
        <>
          {books?.map((book: BookInterface) => (
            <BookCard book={book} key={book.id} />
          ))}
        </>
      </div>
    </div>
  );
};
