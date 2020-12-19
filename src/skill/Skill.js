import React, { useEffect, useRef } from "react";
import "./Skill.css";
import Svg from "./Svg";

function Skill() {


const skillRef = useRef(null)
const skillInsideRef_1 = useRef(null)
const skillInsideRef_2 = useRef(null)
const skillInsideRef_3 = useRef(null)
const skillInsideRef_4 = useRef(null)
const skillInsideRef_5 = useRef(null)
const skillInsideRef_6 = useRef(null)
const imgRef = useRef(null)



useEffect(() => {
 
  window.addEventListener("scroll", (e) => {
    let skillPosition = skillRef.current.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 5;

    if (skillPosition < screenPosition) {
      skillInsideRef_1.current.style.transform = "scale(1)" ;
      skillInsideRef_2.current.style.transform = "scale(1)";
      skillInsideRef_3.current.style.transform = "scale(1)";
      skillInsideRef_4.current.style.transform = "scale(1)";
      skillInsideRef_5.current.style.transform = "scale(1)";
      skillInsideRef_6.current.style.transform = "scale(1)";
      imgRef.current.style.transform = "scale(1)";
      
      skillInsideRef_1.current.style.opacity = "1" ;
      skillInsideRef_2.current.style.opacity = "1";
      skillInsideRef_3.current.style.opacity = "1";
      skillInsideRef_4.current.style.opacity = "1";
      skillInsideRef_5.current.style.opacity = "1";
      skillInsideRef_6.current.style.opacity = "1";
      imgRef.current.style.opacity = "1";
    }else{
      skillInsideRef_1.current.style.transform = "scale(0)" ;
      skillInsideRef_2.current.style.transform = "scale(0)";
      skillInsideRef_3.current.style.transform = "scale(0)";
      skillInsideRef_4.current.style.transform = "scale(0)";
      skillInsideRef_5.current.style.transform = "scale(0)";
      skillInsideRef_6.current.style.transform = "scale(0)";
      imgRef.current.style.transform = "scale(0)";
      
      skillInsideRef_1.current.style.opacity = "0" ;
      skillInsideRef_2.current.style.opacity = "0";
      skillInsideRef_3.current.style.opacity = "0";
      skillInsideRef_4.current.style.opacity = "0";
      skillInsideRef_5.current.style.opacity = "0";
      skillInsideRef_6.current.style.opacity = "0";
      imgRef.current.style.opacity = "0";


    }
  });

  
}, [])




  return (
    <div id="skill" ref={skillRef}>
      <div className="skill__details">
        <h4 ref={skillInsideRef_6}>This is a tools which I use for crating a website.</h4>
        <div className="skill__tools">
          <div className="skill__toolsTop">
            <div className="skill__inside" ref={skillInsideRef_1}>
              <li>UX/UI Design</li>
              <ul>
                <li>Reseach</li>
                <li>Adobe XD</li>
                <li>SVG</li>
                <li>Photoshop</li>
              </ul>
            </div>
            <div className="skill__inside" ref={skillInsideRef_2}>
              <li>Front End</li>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React Js</li>
                <li>JavaScript</li>
                <li>SCSS</li>
              </ul>
            </div>
          </div>
          <div className="skill__toolsCenter">
            <div className="skill__inside" ref={skillInsideRef_3}>
              <li>Back End</li>
              <ul>
                <li>Node JS</li>
                <li>Firebase</li>
                <li>MongoDB</li>
                <li>APIs</li>
              </ul>
            </div>
            <div className="skill__inside" ref={skillInsideRef_4}>
              <li>SEO</li>
              <ul>
                <li>
                  Make your website smooth and use stander keyword so in market
                  your website get high rank.{" "}
                </li>
              </ul>
            </div>
          </div>

          <div className="skill__bottom" ref={skillInsideRef_5}>
            <li>Responsive Website</li>
            <ul>
              <li>
                I will make sure your website user friendly and work proper in
                any type of screen size. <br/>eg.mobile and desktop both
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div ref={imgRef} className='skill__img'>

      <Svg />
      </div>
    </div>
  );
}

export default Skill;
