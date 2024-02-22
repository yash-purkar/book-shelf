import React from "react";
import { CurrentlyReading } from "../currentlyReading/CurrentlyReading";
import "./home.css";
import { WantToRead } from "../wantToRead/WantToRead";
import { Read } from "../read/Read";
import { useBooksContext } from "../../context/BooksContext";

const Home = () => {
    // Getting data from context.
  const contextData = useBooksContext();
  const { filteredData, moveBookToAnotherCategory } = contextData ?? {};

//   handles - If user moves book from one category to another
  const handleChange = (bookID: number, category: string) => {
    moveBookToAnotherCategory && moveBookToAnotherCategory(bookID, category);
  };

  return (
    <div>
      <div className="container">
        <CurrentlyReading
          handleChange={handleChange}
          books={filteredData?.currentlyReading || []}
        />
        <WantToRead
          handleChange={handleChange}
          books={filteredData?.wantToRead || []}
        />
        <Read handleChange={handleChange} books={filteredData?.read || []} />
      </div>
    </div>
  );
};

export default Home;
