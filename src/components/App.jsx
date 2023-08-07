import React, { useState, useEffect } from "react";
import "../styles/App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="app">
        <Navbar></Navbar>
        <Header></Header>
        <About></About>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
