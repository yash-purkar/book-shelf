import React from "react";
import { useGetFilteredData } from "../../hooks/useGetFilteredData";
import { CurrentlyReading } from "../currentlyReading/CurrentlyReading";
import "./home.css";
import { WantToRead } from "../wantToRead/WantToRead";
import { Read } from "../read/Read";

const Home = () => {
  const { filteredData } = useGetFilteredData();

  return (
    <div>
      <div className="container">
        <CurrentlyReading books={filteredData?.currentlyReading || []} />
        <WantToRead books={filteredData?.wantToRead || []} />
        <Read books={filteredData?.read || []} />
      </div>
    </div>
  );
};

export default Home;
