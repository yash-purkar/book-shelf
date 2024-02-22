import React from 'react';
import './App.css';
import { booksData } from './data/data';
import { Home } from './pages/home/Home';

function App() {
  return (
    <Home data={booksData}/>
  );
}

export default App;
