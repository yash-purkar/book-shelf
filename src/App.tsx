import React from 'react';
import './App.css';
import { HomePage } from './pages/home/HomePage';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    </>
    );
}

export default App;
