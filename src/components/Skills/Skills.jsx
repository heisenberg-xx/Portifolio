import React from "react";
import react from "../../assets/react.svg";
import python from "../../assets/python.svg";
import express from "../../assets/express.svg";
import tailwind from "../../assets/tailwind.svg";
import next from "../../assets/next-js.svg";
import javascript from "../../assets/javascript.svg";
import ts from "../../assets/typescript.svg";
import mongo from "../../assets/mongodb.svg";
import redux from "../../assets/redux.svg";
import lr from "../../assets/lr.svg";

import { Skillcard } from "./skillcard";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="container w-screen h-screen reveal flex flex-col justify-center items-center m-auto rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-3"
    >
      <h1 className="text-3xl md:text-5xl text-text1 flex justify-center items-center">
        <span className="bg-custom-gradient border-2 border-white rounded-lg flex justify-center items-center text-white shadow-lg p-2">
          <span>Sk</span>
        </span>
        ills
      </h1>

      <div className="mt-10 flex flex-wrap justify-center gap-4 md:max-w-[60%] w-full">
        <Skillcard logo={javascript} name="JavaScript" />
        <Skillcard logo={react} name="React" />
        <Skillcard logo={next} name="Next" />
        <Skillcard logo={ts} name="TypeScript" />
        <Skillcard logo={express} name="Express" />
        <Skillcard logo={mongo} name="MongoDB" />
        <Skillcard logo={tailwind} name="Tailwind CSS" />
        <Skillcard logo={redux} name="Redux" />
        <Skillcard logo={python} name="Python" />
        <Skillcard logo={lr} name="Lightroom" />
      </div>
    </section>
  );
};
