import "./App.css";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import About from "./about/About";
import Illistratin from "./Illistratin/Illistratin";
import Skill from "./skill/Skill";
import Contact from "./contact/Contact";
import { useEffect, useRef, useState } from "react";
import Footer from "./footer/Footer";

const darkTheme = {
  "--fc": "#09a2c8",
  "--bg": "black",
};

const lightTheme = {
  "--fc": "#0a0613",
  "--bg": "#e4e1f1",
};

function App() {
  const appRef = useRef(null);
  


  return (
    <div className="app" ref={appRef}>
     
      <Navbar />
      <Home />
      <About />
      <Illistratin />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
