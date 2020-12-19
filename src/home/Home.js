import React, { useEffect, useRef } from "react";
import "./Home.css";
import Svg from "./Svg";

function Home() {
  const detailRef = useRef(null);
  const homeRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const offset = homeRef.current.getBoundingClientRect().top/ 3.5;
      if ( offset > -90) {
        detailRef.current.style.transform = `rotateX(${
          (offset)}deg)`;
        logoRef.current.style.transform = `rotateX(${(offset) }deg)`;

        detailRef.current.style.opacity = `1`;
        logoRef.current.style.opacity = `1`;
      }


      if (offset < -90) {
        detailRef.current.style.opacity = `0`;
        logoRef.current.style.opacity = `0`;
      }


console.log(offset)


    });
  }, []);

  return (
    <div id="home" ref={homeRef}>
      <div className="home__details" ref={detailRef}>
        <h3>Hello...I'm Dhaval Patel</h3>
        <h1>I Create website for you...</h1>
        <h2>I'm Web Developer...</h2>
        <p>
          You want to grow you business than i will help you. I will make good
          website for you so you can reach far away people and show your
          product.
        </p>
        <a className="home__btn" href="#contact">
          Grow your business
        </a>
      </div>
      <div className="home__logo" ref={logoRef}>
        <Svg />
      </div>
    </div>
  );
}

export default Home;
