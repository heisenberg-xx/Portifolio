import React from "react";
import "./Loader.css";
import Lottie from "lottie-react";
import loaderAnimation from "../../public/Science loader.json";

const Loader = () => {
  return (
    <div className="loader  font-customPD lowercase w-screen h-screen bg-grid-lines bg-black bg-grid">
      <div className="relative">
        {" "}
        <div className="w-60 h-60 md:w-80 md:h-80 mb-10">
          <Lottie animationData={loaderAnimation} loop={true} />
        </div>
        <div className="absolute left-5 md:left-[3.75rem] -bottom-1 md:bottom-2 space-y-3">
          <div className=" text-3xl md:text-4xl flex text-text1 font-customPD justify-center items-center">
            <span className="bg-custom-gradient border-2 border-white rounded-md flex justify-between items-center text-white shadow-lg p-2 ">
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
      </div>
    </div>
  );
};

export default Loader;
