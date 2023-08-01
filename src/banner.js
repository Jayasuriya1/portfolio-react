import React from "react";
import Typewriter from "typewriter-effect";

export default function Banner() {
  return (
    <div className="commen-style banner container">
      <div className="row ">
        <div className="col-sm-12 col-md-12">
          <h2 className="blue-text">Hey!</h2>
          <h1>I'm Jayasuriya </h1>

          <h3 className="red-text">
            I'm a{" "}
            <span>
              <Typewriter
                className="aa"
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Quike Learner",
                    "Web Developer",
                    "Dreamer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h3>

          <p>
          A self-taught developer with an interest in Web Development.
          </p>
          <div className="social-media">
          <a href="https://www.linkedin.com/in/jayasuriya-sudhakar-742bb0168/"  target="_blank"><i class='bx bxl-linkedin'></i></a>
          <a href="https://github.com/Jayasuriya1"  target="_blank"><i class='bx bxl-github' ></i></a>
          <a href="mailto:sudhakar.jayasuriya@gmail.com"  target="_blank"><i class='bx bxl-gmail ' ></i></a>
          </div>
          <div style={{color:"#000000"}} className="btn">
          <a href="https://drive.google.com/file/d/1rIl9N4voaB_YMi11XF312_VAIPt1Ov2L/view?usp=sharing"  target="_blank">View Resume</a>
          </div>
          
          
          
        </div>
      </div>
    </div>
  );
}
