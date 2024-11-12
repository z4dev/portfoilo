import React, { useState } from "react";
import "./style.css";

const MainContainer = ({ children }) => {
  const [isAuthorInfoVisible, setAuthorInfoVisible] = useState(false);

  const handleShowClick = () => {
    setAuthorInfoVisible(true);
  };

  const handleCloseClick = () => {
    setAuthorInfoVisible(false);
  };

  const currentCopyRightYear = new Date().getFullYear();

  return (
    <>
      <div className="overlay"></div>
      <div className="bg-circles">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="circle-4"></div>
      </div>
      <div className="main hidden"></div>
      <div className="main container">
        {children}

        <button
          className="author"
          title="Designed By Wesam Abutaima"
          onClick={handleShowClick}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 192 512"
            color="unset"
            aria-hidden="true"
            focusable="false"
            height="22"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"></path>
          </svg>
        </button>

        {isAuthorInfoVisible && (
          <div className="author-info">
            <div className="about-author-info">
              <p>About</p>
              <button className="close-author-info" onClick={handleCloseClick}>
                X
              </button>
            </div>
            <p>
              Designed and crafted by
              <a href="https://its-wesam.netlify.app/" className="author-name">
                Wesam Abutaima
              </a>
              , &copy; {currentCopyRightYear} using the latest web technology
              for a smooth and efficient experience Crafted and improved by me
            </p>
            <p className="explore">
              Discover more about my work and connect with me here:
              <span>
                <a href="https://its-wesam.netlify.app/" className="demo-link">
                  [Demo Link]
                </a>
              </span>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default MainContainer;
