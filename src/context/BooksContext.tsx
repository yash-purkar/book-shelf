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

export const useBooksContext = () => useContext(BooksContext);
