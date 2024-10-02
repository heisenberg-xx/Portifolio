import React from "react";
import react from "../../assets/react.svg";
import python from "../../assets/python.svg";
import express from "../../assets/express.svg";
import tailwind from "../../assets/tailwind.svg";
import javascript from "../../assets/javascript.svg";

import { Skillcard } from "./skillcard";

export const Skills = () => {
  return (
    <div
      id="skills"
      className="reveal flex flex-col flex-1 justify-around gap-4 items-center mt-6 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-3"
    >
      <h1 className="text-[40px] text-text1 ">Skills</h1>
      <div className="flex  justify-around items-center flex-row  px-4 w-full">
        <Skillcard logo={python} />
        <Skillcard logo={react} />
        <Skillcard logo={express} />
        <Skillcard logo={tailwind} />
        <Skillcard logo={javascript} />
      </div>
    </div>
  );
};
