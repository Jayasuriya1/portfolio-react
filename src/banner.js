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
          <a href="https://www.linkedin.com/in/jaya-suriya-742bb0168/"  target="_blank"><i class='bx bxl-linkedin'></i></a>
          <a href="https://github.com/Jayasuriya1"  target="_blank"><i class='bx bxl-github' ></i></a>
          <a href="https://www.instagram.com/iam.jayasuriya/"  target="_blank"><i class='bx bxl-instagram' ></i></a>
          </div>
          <div className="btn">
          <a >View Resume</a>
          </div>
          
          {/* <div className="btn">
          <button >View Resume</button>
          </div> */}
          
          
        </div>
      </div>
    </div>
  );
}
