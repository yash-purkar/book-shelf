import React from "react";
import { BookInterface } from "../../types";
import { BookCard } from "../bookCard/BookCard";
import "./wantToRead.css";
interface WantToReadProps {
  books: BookInterface[];
  handleChange: (bookID:number,category:string) => void;
}
export const WantToRead: React.FC<WantToReadProps> = ({ books,handleChange }) => {
  return (
    <div>
      <h2 className="category_title">Want To Read</h2>
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
