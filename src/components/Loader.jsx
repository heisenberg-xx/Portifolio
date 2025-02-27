import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader font-customPD lowercase w-screen h-screen bg">
      <div className="text-3xl md:text-4xl flex text-text1 font-customPD justify-center items-center">
        <span className="bg-custom-gradient border-2 border-white rounded-lg flex justify-between items-center text-white shadow-lg p-2 ">
          <span className="">Lo</span>
        </span>
        ading<span className="dot">.</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
      </div>
      <div className="loading-bar-background">
        <div className="loading-bar">
          <div className="white-bars-container">
            <div className="white-bar"></div>
            <div className="white-bar"></div>
            <div className="white-bar"></div>
            <div className="white-bar"></div>
            <div className="white-bar"></div>
            <div className="white-bar"></div>
            <div className="white-bar"></div>
            <div className="white-bar"></div>
            <div className="white-bar"></div>
            <div className="white-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
