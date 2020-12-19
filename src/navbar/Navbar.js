import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import Svg from "./Svg";

function Navbar() {
  const navRef = useRef(null);
  const navTopRef = useRef(null);

  const btnRef = useRef(null);
  const btnLeftRef = useRef(null);
  const [click, setClick] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const height = navRef.current.offsetHeight;
      const offset = navRef.current.offsetTop;

      if (offset > height) {
        navRef.current.style.transform = "translateY(-56px) ";
        navTopRef.current.style.transform = "translateY(96vh)";
        navTopRef.current.style.opacity = "1";
      } else {
        navRef.current.style.transform = "translateY(0)";
        navTopRef.current.style.transform = "translateY(96vh)";
        navTopRef.current.style.opacity = "0";
      }

      // ////////////////////////////////////////////
    });
  }, []);

  useEffect(() => {
    if (click) {
      document.documentElement.setAttribute("data-theme", "dark");
      btnRef.current.style.background = "#cac3e7";
      btnLeftRef.current.style.transform = `translateX(18px) `
      btnLeftRef.current.style.background = `#08100c`
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      btnRef.current.style.background = " #08100c";
      btnLeftRef.current.style.transform = `translateX(0px)`
      btnLeftRef.current.style.background = `#cac3e7`
    }
  }, [click]);

  return (
    <div className="navbar" ref={navRef}>
      
      <Svg />

      <div
        className="navbar__btn"
        ref={btnRef}
        onClick={(e) => setClick(!click)}
      >
        <div className="navbar__btnLeft" ref={btnLeftRef}>

        </div>
      </div>

      <ul className="navbar__ul">
        <li>
          <a href="#about"> About </a>
        </li>
        <li>
          <a href="#skill"> My skill </a>
        </li>
        <li>
          <a href="#illustration"> Illustration </a>
        </li>
        <li>
          <a href="#contact"> Contact </a>
        </li>
      </ul>

      <div className="navbar__top" ref={navTopRef}>
        <a href="#home">Top</a>
      </div>
    </div>
  );
}

export default Navbar;
