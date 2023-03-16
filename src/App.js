import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Carousel from "./components/Carousel";
import React from "react";
import Card from "./components/Card";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div >
      <Navbar />
        <Home/>
        <About/>
      <Carousel/>
        <Skills/>
        <Footer/>
    </div>
  );
}

export default App;