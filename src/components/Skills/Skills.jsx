import React from "react";
import react from "../../assets/skillicons/react.svg";
import reactQuery from "../../assets/skillicons/reactQuery.svg";
import express from "../../assets/skillicons/express.svg";
import tailwind from "../../assets/skillicons/tailwind.svg";
import next from "../../assets/skillicons/next.svg";
import javascript from "../../assets/skillicons/javascript.svg";
import ts from "../../assets/skillicons/typescript.svg";
import mongo from "../../assets/skillicons/mongo.svg";
import redux from "../../assets/skillicons/redux.svg";
import zustand from "../../assets/skillicons/zustand.svg";

import { Skillcard } from "./skillcard";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="container w-screen h-screen reveal flex flex-col justify-center items-center m-auto rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-3"
    >
      <h1 className="text-3xl md:text-5xl text-text1 flex justify-center items-center">
        <span className="bg-custom-gradient border-2 border-white rounded-md flex justify-center items-center text-white shadow-lg p-2">
          <span>Sk</span>
        </span>
        illZ
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
        <Skillcard logo={reactQuery} name="React Query" />
        <Skillcard logo={zustand} name="Zustand" />
      </div>
    </section>
  );
};
