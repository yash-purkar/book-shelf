import { useEffect, useState } from "react";
import { booksData } from "../data/data";
import { BookInterface } from "../types";

interface ReducerInitialState {
  currentlyReading: BookInterface[];
  wantToRead: BookInterface[];
  read: BookInterface[];
}

export const useGetFilteredData = (): {
  getData: () => void;
  filteredData: ReducerInitialState | undefined;
} => {
  const [filteredData, setFilteredData] = useState<ReducerInitialState>();

  const getData = () => {
    const data = booksData.reduce(
      (acc: ReducerInitialState, curr: BookInterface) => {
        switch (curr.category) {
          case "CurrentlyReading": {
            return {
              ...acc,
              currentlyReading: [...acc.currentlyReading, curr],
            };
          }
          case "wantToRead": {
            return { ...acc, wantToRead: [...acc.wantToRead, curr] };
          }

          case "read": {
            return { ...acc, read: [...acc.read, curr] };
          }

          default: {
            return acc;
          }
        }
      },
      { currentlyReading: [], wantToRead: [], read: [] }
    );
    setFilteredData(data);
  };

  useEffect(() => {getData()},[])
  return { getData, filteredData };
};
