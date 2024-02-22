import React from "react";
import "./bookCard.css";
import { MdArrowDropDownCircle } from "react-icons/md";
import { BookInterface } from "../../types";


interface BookCardProps {
    book : BookInterface
}

export const BookCard:React.FC<BookCardProps> = ({book}) => {
  const categories = ["CurrentlyReading", "wantToRead", "read"];
  return (
    <div className="book_card">
      <img
        src={book.bookImg}
        alt={book.title}
        className="book_img"
      />
      <h2 className="book_title">{book.title}</h2>
      <p className="book_author">{book.author}</p>
      <div className="custom_dropdown">
        <MdArrowDropDownCircle className="dropdown_icon" key={"dropdownIcon"} />
        <select name="category" id="">
            <option value="" disabled>Move to</option>
          {categories?.map((category) => (
            <option value={category} className="option">
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
