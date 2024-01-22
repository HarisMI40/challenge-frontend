import React from "react";
import "./app.css";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Posts from "./components/Posts/Posts";



const App = () => {
  return (
    <>
    <Navbar />
    <Header />
    <Posts />
    </>
  );
};

export default App;
