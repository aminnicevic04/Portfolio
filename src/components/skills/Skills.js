import React from "react";
import { Link } from "react-router-dom";
import reactcert from "../assets/ReactCert.png";
import merncert from "../assets/Amin_Nicevic.png";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="skills_section">
        <div className="skill_text">
          <h1>Skills & Certifications</h1>
          <p>
            With over two years of experience in web development, I have
            collaborated with clients to create dynamic, responsive web
            applications utilizing the latest tools and technologies. My journey
            includes working part-time roles at Centar NIT and MysticMash-AI,
            where I gained valuable hands-on experience and honed my skills in a
            professional environment.
          </p>
          <p>
            In addition to my technical expertise, I am a dedicated and
            detail-oriented developer committed to delivering high-quality work.
            I am always eager to expand my skill set and embrace new challenges,
            confident in my ability to craft engaging, high-performance web
            applications that meet the needs of businesses and users alike.
          </p>

          <a href="https://www.linkedin.com/in/amin-nicevic">
            Visit my <span className="lnk">Linkedin</span> profile or
            <Link to="/contact" className="lnk">
              {" "}
              contact me
            </Link>
          </a>
        </div>

        <div className="skills_container">
          <div className="bar">
            <p>Frontend</p>
            <div class="container">
              <div class="skills front"></div>
            </div>

            <p>React Js</p>
            <div class="container">
              <div class="skills react"></div>
            </div>

            <p>Next Js</p>
            <div class="container">
              <div class="skills next"></div>
            </div>

            <p>Backend</p>
            <div class="container">
              <div class="skills back"></div>
            </div>
          </div>

          <div className="flex">
            <div className="certificates">
              <div className="cart_card">
                <div className="card_front">
                  <h3>Front-end 9 months IT-Camp</h3>
                  <span>Dec.31, 2022</span>
                  <p>
                    9 month IT-camp. where we learned html css js and react.
                    After that, we had an internship, where we worked on real
                    projects.
                  </p>
                </div>
                <div className="card_backend">
                  <img src={merncert} alt="react" />
                </div>
              </div>
            </div>{" "}
            <div className="certificates">
              <div className="cart_card">
                <div className="card_front">
                  <h3>React Js, Redux and Hooks</h3>
                  <span>Nov,21, 2023</span>
                  <p>
                    React course from udemy. This course gives me a great
                    introduction to ReactJS.
                  </p>
                </div>
                <div className="card_backend">
                  <img src={reactcert} alt="react" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
