import React, { ChangeEvent } from "react";
import "./bookCard.css";
import { MdArrowDropDownCircle } from "react-icons/md";
import { BookInterface } from "../../types";

interface BookCardProps {
  book: BookInterface;
  handleChange: (bookID: number, category: string) => void;
}

export const BookCard: React.FC<BookCardProps> = ({ book, handleChange }) => {
  const categories = ["currentlyReading", "wantToRead", "read"];

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    handleChange(book.id, value);
  };

  return (
    <div className="book_card">
      <img src={book.bookImg} alt={book.title} className="book_img" />
      <h2 className="book_title">{book.title}</h2>
      <p className="book_author">{book.author}</p>
      <div className="custom_dropdown">
        <MdArrowDropDownCircle className="dropdown_icon"/>
        <select name="category" value={book.category} onChange={onSelectChange}>
          <option value="" disabled>
            Move to
          </option>
          {categories?.map((category) => (
            <option value={category} key={category}>
              {category === book.category && <>✔</>}{category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
