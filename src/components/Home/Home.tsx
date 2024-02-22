import React from "react";
import { useGetFilteredData } from "../../hooks/useGetFilteredData";
import { CurrentlyReading } from "../currentlyReading/CurrentlyReading";
import "./home.css";
import { WantToRead } from "../wantToRead/WantToRead";
import { Read } from "../read/Read";

const Home = () => {
  const { filteredData, moveBookToAnotherCategory } = useGetFilteredData();

  const handleChange = (bookID: number, category: string) => {
    moveBookToAnotherCategory(bookID, category);
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
