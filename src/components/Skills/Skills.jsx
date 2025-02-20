import React from "react";
import react from "../../assets/react.svg";
import python from "../../assets/python.svg";
import express from "../../assets/express.svg";
import tailwind from "../../assets/tailwind.svg";
import javascript from "../../assets/javascript.svg";
import typescript from "../../assets/typescript.svg";
import redux from '../../assets/redux.svg'
import lr from '../../assets/lr.svg'

import { Skillcard } from "./skillcard";

export const Skills = () => {
  return (
    <div
      id="skills"
      className="w-screen h-screen reveal flex flex-col justify-center items-center mt-6 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-3"
    >
      <h1 className="text-[40px] text-text1">Skills</h1>
      <div className="mt-10 flex flex-wrap justify-center gap-4 md:max-w-[60%] w-full"> {/* Use gap-4 for spacing */}
        <Skillcard logo={python} name="Python" />
        <Skillcard logo={javascript} name="JavaScript" />
        <Skillcard logo={typescript} name="TypeScript" />
        <Skillcard logo={react} name="React" />
        <Skillcard logo={express} name="Express" />
        <Skillcard logo={tailwind} name="Tailwind CSS" />
        <Skillcard logo={redux} name="Redux" />
        <Skillcard logo={lr} name="Lightroom" />
       
        {/* Add more Skillcard components as needed */}
      </div>
    </div>
  );
};
