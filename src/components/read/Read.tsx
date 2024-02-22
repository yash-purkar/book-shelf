import React from "react";
import { BookInterface } from "../../types";
import { BookCard } from "../bookCard/BookCard";
import "./read.css";
interface ReadProps {
  books: BookInterface[];
  handleChange: (bookID: number, category: string) => void;
}
export const Read: React.FC<ReadProps> = ({ books ,handleChange}) => {
  return (
    <div>
      <h2 className="category_title">Read</h2>
      <div className="category">
      {
            books.length >0 ? <>
            {books?.map((book: BookInterface) => (
              <BookCard book={book} key={book.id} handleChange={handleChange}/>
            ))}
          </> : <h4 className="no_books_text">No books in this category</h4>
        }
      </div>
    </div>
  );
};
