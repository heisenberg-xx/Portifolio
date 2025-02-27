import React from "react";
import { BiLogoMongodb, BiSolidMovie } from "react-icons/bi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { CgGym } from "react-icons/cg";

const About = () => {
  return (
    <section
      id="about"
      className="container w-screen h-screen reveal flex flex-col flex-1 justify-center gap-[30px] items-center rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-5 m-auto"
    >
      <h1 className="text-3xl md:text-5xl text-text1 flex justify-center items-center">
        <span className="bg-custom-gradient border-2 border-white rounded-lg flex justify-center items-center text-white shadow-lg p-2">
          <span>Ab</span>
        </span>
        out me
      </h1>

      <p className="p-2 md:max-w-[70%] text-center text-white font-font2 text-lg leading-[45px]">
        I'm a passionate
        <span className="bg-gray-800 px-2 py-1 rounded mx-2 font-semibold">
          full-stack developer
        </span>
        with almost 1 year of hands-on experience and a strong foundation in
        building web applications using technologies like
        <span className="bg-gray-800 px-2 rounded mx-2 font-semibold inline-flex items-center gap-1">
          <FaReact className="text-blue-400 text-2xl animate-loadtwo" />
          React
        </span>
        ,
        <span className="bg-gray-800 px-2 rounded mx-2 font-semibold inline-flex items-center gap-1">
          <FaNodeJs className="text-white text-2xl animate-loadtwo" />
          Node.js
        </span>
        ,
        <span className="bg-gray-800 px-2 rounded mx-2 font-semibold inline-flex items-center gap-1">
          <SiExpress className="text-white text-2xl animate-loadtwo" />
          Express.js
        </span>
        , and
        <span className="bg-gray-800 px-2 rounded mx-2 font-semibold inline-flex items-center gap-1">
          <BiLogoMongodb className="text-green-400 text-2xl animate-loadtwo" />
          MongoDB
        </span>
        . I have hands-on experience developing interactive, high-performance
        applications where I enhanced user experience. I enjoy creating
        efficient, user-friendly solutions and am skilled in both
        <span className="bg-gray-800 px-2 py-1 rounded mx-2 font-semibold">
          front-end
        </span>
        and
        <span className="bg-gray-800 px-2 py-1 rounded mx-2 font-semibold">
          back-end
        </span>
        development.

        When I'm not coding, you can often find me enjoying
        <span className="bg-gray-800 px-2 rounded mx-2 font-semibold inline-flex items-center gap-1">
          <BiSolidMovie className="text-white text-2xl animate-loadtwo" />
          movies
        </span>
        or in the
        <span className="bg-gray-800 px-2 rounded mx-2 font-semibold inline-flex items-center gap-1">
          <CgGym className="text-white text-2xl animate-loadtwo" />
          gym
        </span>
        .
      </p>
    </section>
  );
};

export default About;
