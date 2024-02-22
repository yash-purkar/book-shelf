import React from "react";
import { BookInterface } from "../../types";
import { BookCard } from "../bookCard/BookCard";
import "./currentlyReading.css";
interface CurrentlyReadingProps {
  books: BookInterface[];
  handleChange: (bookID:number,category:string) => void;
}
export const CurrentlyReading: React.FC<CurrentlyReadingProps> = ({
  books,
  handleChange,
}) => {
  return (
    <div>
      <h2 className="category_title">Currently Reading</h2>
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
