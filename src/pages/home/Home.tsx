import React from "react";
import { BookInterface } from "../../types";
import { CurrentlyReading } from "../../components/currentlyReading/CurrentlyReading";

interface HomePageProps {
  data: BookInterface[];
}

interface ReducerInitialState {
  currentlyReading: BookInterface[];
  wantToRead: BookInterface[];
  read: BookInterface[];
}

export const Home: React.FC<HomePageProps> = ({ data }) => {
  
  const { currentlyReading, read, wantToRead } = data.reduce(
    (acc: ReducerInitialState, curr: BookInterface) => {
      switch (curr.category) {
        case "CurrentlyReading": {
          return { ...acc, currentlyReading: [...acc.currentlyReading, curr] };
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

  return (
    <div>
      <div>
        <CurrentlyReading books={currentlyReading} />
      </div>
    </div>
  );
};
