import React from "react";
import "./style.css";
import LANDING_SECTION_IMAGE from "./hello.png";
import { Link } from "react-router-dom";

function LandingSection() {
  return (
    <section className="home-section align-items-center" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="home-text">
            <p>Hello, I'm</p>
            <h1>Izzedeen Alfarra</h1>
            <h2>
              Backend Web Developer | Technical Inctractor On YouTube Channel
            </h2>
            <Link to="/about" className="btn link-item">
              More About Me
            </Link>
            <a
              href="https://www.youtube.com/channel/UC1hgEmeE-bCt4_MFwQQa7qw"
              className="btn link-item"
            >
              Youtube Channel
            </a>
          </div>
          <div className="home-img">
            <div className="img-box">
              <img src={LANDING_SECTION_IMAGE} alt="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingSection;
