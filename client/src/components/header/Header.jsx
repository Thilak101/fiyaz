import React from "react";
import "./header.css"
const Header = () => {
  return (
    <>
      <div className="header__profile">
        <small>
          Dribble / Medium / Twitter / facebook / LinkedIn / fiyaskhanf@gmail.com
        </small>
        <h1>
          Fiyas Khan is a Mulitidisciplinary <br /> Product & Full-Stack <br />{" "}
          Developer
        </h1>
        <div className="header__aboutContent">
          <div className="header__about">
            <p className="header__underline">About</p>
            <div>
              <p>
                As both designer and developer of projects that require a <br />
                leser focus on both, I unite form and function to meet both{" "}
                <br />
                user needs and business goals.
              </p>
              <p>
                Currently improving custommer experiences as Senior UX <br />
                Designer at <span>BrightEdge.</span>
              </p>
            </div>
          </div>

          <div className="header__specialize">
            <p className="header__underline">
              Specializing in
            </p>
            <div>
            <p>
              Research <br />
              Prototyping & Testing <br />
              Responsive Web Design
            </p>
            </div>
          </div>

          <div className="header__skills">
            <p>Front-end Development</p>
            <p>Back-end Development</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
