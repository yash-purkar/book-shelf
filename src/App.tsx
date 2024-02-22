import React from "react";
import "./App.css";
import { HomePage } from "./pages/home/HomePage";
import { Navbar } from "./components/navbar/Navbar";
import { Route, Routes } from "react-router";
import { SearchPage } from "./pages/search/SearchPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<SearchPage/>} path="/search" />
      </Routes>
    </>
  );
}

export default App;
