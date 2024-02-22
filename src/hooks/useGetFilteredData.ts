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
  moveBookToAnotherCategory: (bookID: number, category: string) => void;
  data: BookInterface[];
} => {
  // Need data to show all books in search page
  const [data, setData] = useState<BookInterface[]>([...booksData]);
  //   for storing filtered data. Filtering here only don't need to do in component
  const [filteredData, setFilteredData] = useState<ReducerInitialState>();

  const getData = () => {
    // It will store all the books category wise.
    const allDataInObj = data.reduce(
      (acc: ReducerInitialState, curr: BookInterface) => {
        switch (curr.category) {
          case "currentlyReading": {
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
    setFilteredData(allDataInObj);
  };

  //   It will handle the category change.
  const moveBookToAnotherCategory = (bookID: number, category: string) => {
    const updateData = data?.map((book) =>
      book.id === bookID ? { ...book, category } : book
    );
    setData(updateData);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return { getData, filteredData, moveBookToAnotherCategory, data };
};
