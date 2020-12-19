import React, { useEffect, useRef } from "react";
import Svg from "../about/Svg";
import "./About.css";

function About() {
  const aboutRef = useRef(null);
  const detailRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    // console.log(aboutRef)
    window.addEventListener("scroll", (e) => {
      let aboutPosition = aboutRef.current.getBoundingClientRect().top;
      let screenPosition = window.innerHeight / 1.8;

      if (aboutPosition < screenPosition) {
        detailRef.current.style.transform = "translateX(0)";
        svgRef.current.style.transform = "translateX(0)";
      }
        else{

          detailRef.current.style.transform = "translateX(100vh)";
        svgRef.current.style.transform = "translateX(-100vh)";
        }


    });
  }, []);

  return (
    <div id="about" ref={aboutRef}>
      <div style={{transform: `translateX(-100vw)`, transition : `all 1s ease`}} ref={svgRef}>
        <Svg />
      </div>
      <div className="about__details" ref={detailRef}>
        <h4>I'm mechanical Engineer who Love to Coding.</h4>
        <h4>
          I just like to learn Web development and specially UI design and Font
          End.
        </h4>
        <h4>
          I also create Illustration, All illustration on this site create by
          me.
        </h4>
        <h4>I learn coding by YouTube videos and I'm also quick learned.</h4>
      </div>
    </div>
  );
}

export default About;
