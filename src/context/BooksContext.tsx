import React, { createContext, useContext } from "react";
import { useGetFilteredData } from "../hooks/useGetFilteredData";
import { BookInterface } from "../types";

interface BooksContextData {
  data: BookInterface[];
  filteredData: any;
  getData: () => void;
  moveBookToAnotherCategory: (bookId: number, category: string) => void;
}

interface ContextProviderProps {
  children: React.ReactNode;
}

const BooksContext = createContext<BooksContextData | undefined>(undefined);

export const BookContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  // Get data from custom hook
  const { data, filteredData, getData, moveBookToAnotherCategory } =
    useGetFilteredData();

  return (
    <BooksContext.Provider
      value={{ data, filteredData, getData, moveBookToAnotherCategory }}
    >
      {children}
    </BooksContext.Provider>
  );
};

// custom hook to make us of context directly
export const useBooksContext = () => useContext(BooksContext);
