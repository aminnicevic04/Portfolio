import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { logos, text1, text2, text3 } from "../helpers/helper";
import { FaCode, FaLaptopCode, FaPaintBrush } from "react-icons/fa";
import ScrollTrigger from "react-scroll-trigger";
import "./MainAfter.css";

const MainAfter = () => {
  const [isTriggered, setIsTriggered] = useState(false);

  const onEnterViewport = () => {
    setIsTriggered(true);
  };

  const logoRefs = useRef([]);

  const handleMouseMove = (event, index) => {
    const logo = logoRefs.current[index];
    const logoRect = logo.getBoundingClientRect();
    const logoCenterX = logoRect.left + logoRect.width / 2;
    const logoCenterY = logoRect.top + logoRect.height / 2;
    const dx = event.clientX - logoCenterX;
    const dy = event.clientY - logoCenterY;
    logo.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const handleMouseLeave = (index) => {
    const logo = logoRefs.current[index];
    logo.style.transform = "";
  };

  return (
    <>
      <div className="about_section">
        <div className="about_text">
          <h1 className="animate">Software Developer</h1>
          <p className="animate">
            {text1}
            <br />
            <br />
            {text2}
            <br />
            <br />
            {text3}
          </p>
          <Link to="/contact">Let's craft your ideas</Link>
        </div>
        <div className="logo_list">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.image}
              alt="img"
              className={logo.className}
              ref={(el) => (logoRefs.current[index] = el)}
              onMouseMove={(event) => handleMouseMove(event, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            />
          ))}
        </div>
      </div>

      <div className="whatdo_section">
        <h1>What I Can Do</h1>
        <p>
          Whether you need a sleek, modern website, custom web application, or
          ongoing work on larger projects, I have the skills and experience to
          make it happen and the desire to learn new things.
        </p>

        <ScrollTrigger onEnter={onEnterViewport}>
          <div class="skills_cards">
            <div className={`card ${isTriggered ? "slide-in-bottom" : ""}`}>
              <div class="card_content">
                <FaLaptopCode size={40} />
                <h3>Frontend Development</h3>
                <p>
                  I can create responsive and intuitive user interfaces using
                  modern web technologies like React and NextJS.
                </p>
              </div>
            </div>
            <div className={`card ${isTriggered ? "slide-in-bottom" : ""}`}>
              <div class="card_content">
                <FaCode size={40} />
                <h3>Backend Development</h3>
                <p>
                  I am currently in the process of learning NodeJS, Mongo DB,
                  Mongoose and mySQL, Express and Nest JS.
                </p>
              </div>
            </div>
            <div className={`card ${isTriggered ? "slide-in-bottom" : ""}`}>
              <div class="card_content">
                <FaPaintBrush size={40} />
                <h3>UI Frameworks</h3>
                <p>
                  With extensive experience in using various UI libraries such
                  as SCSS, Tailwind CSS, Ant-Design, Material-UI,
                  Styled-components, ShadCN, Mantin UI and many others UI
                  libraries.
                </p>
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </>
  );
};

export default MainAfter;
