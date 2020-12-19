import React, { useEffect, useRef } from "react";
import "./Contact.css";
import Svg from "./Svg";

function Contact() {
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let contactPosition = contactRef.current.getBoundingClientRect().top;
      let screenPosition = window.innerHeight / 5;

      if (contactPosition < screenPosition) {
        formRef.current.style.transform = "translateY(0)";
        imgRef.current.style.transform = "translateY(0)";

        formRef.current.style.opacity = "1";
        imgRef.current.style.opacity = "1";
      }
    });
  }, []);

  return (
    <div id="contact" ref={contactRef}>
      <div className="svg" ref={imgRef}>
        <Svg />
      </div>

      <form action="" ref={formRef}>
        <input type="text" name="" id="" placeholder="Your name" />
        <input type="text" name="" id="" placeholder="Your Email" />
        <input type="text" name="" id="" placeholder="Your Phone" />
        <input type="text" name="" id="" placeholder="Your Message" className='contact__message' />
        {/* <textarea
          type="textarea"
          row="3"
          name=""
          id=""
          placeholder="Your Message"
        /> */}
        <button>Thank you for contact me</button>
      </form>
    </div>
  );
}

export default Contact;
