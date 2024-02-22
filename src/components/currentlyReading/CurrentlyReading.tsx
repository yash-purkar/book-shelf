import React from "react";
import { BookInterface } from "../../types";
import { BookCard } from "../bookCard/BookCard";
import "./currentlyReading.css";
interface CurrentlyReadingProps {
  books: BookInterface[];
}
export const CurrentlyReading: React.FC<CurrentlyReadingProps> = ({
  books,
}) => {
  return (
    <div>
      <h2 className="category_title">Currently Reading</h2>
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
