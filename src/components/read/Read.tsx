import React from "react";
import { BookInterface } from "../../types";
import { BookCard } from "../bookCard/BookCard";
import "./read.css";
interface ReadProps {
  books: BookInterface[];
}
export const Read: React.FC<ReadProps> = ({
  books,
}) => {
  return (
    <div>
      <h2 className="category_title">Read</h2>
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
