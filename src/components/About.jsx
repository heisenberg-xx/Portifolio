import React from 'react';
import { BiLogoMongodb } from "react-icons/bi";
import { FaReact,FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { CgGym } from "react-icons/cg";
import { BiSolidMovie } from "react-icons/bi";

const About = () => {
    return (
        <div
            id="about"
            className="lowercase w-screen h-screen reveal flex flex-col flex-1 justify-center gap-[30px] items-center rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-3"
        >
            <h1 className="text-[40px] text-text1">About Me</h1>

            <p className="p-2 md:max-w-[70%] text-center text-white font-font2 text-lg leading-[45px]">
                I'm a passionate
                <span className="bg-gray-800 px-2 py-1 rounded mx-2 font-semibold">full-stack developer</span>
                with almost 1 year of hands-on experience and a strong foundation in building web applications using technologies like
                <span className="bg-gray-800 px-2  rounded mx-2 font-semibold inline-flex items-center gap-1">
                    <FaReact className="text-blue-400 text-2xl animate-loadtwo" />
                    React
                </span>,
                <span className="bg-gray-800 px-2  rounded mx-2 font-semibold inline-flex items-center gap-1">
                    <FaNodeJs className="text-white text-2xl animate-loadtwo" />
                    NodeJs
                </span>,
                <span className="bg-gray-800 px-2  rounded mx-2 font-semibold inline-flex items-center gap-1">
                    <SiExpress className="text-white text-2xl  animate-loadtwo" />
                    Express Js
                </span>, and
                <span className="bg-gray-800 px-2 rounded mx-2 font-semibold inline-flex items-center gap-1">
                    <BiLogoMongodb className="text-green-400 text-2xl animate-loadtwo" />
                    MongoDB
                </span>.
                I have hands-on experience developing interactive, high-performance applications where I enhanced user experience.
                I enjoy creating efficient, user-friendly solutions and am skilled in both
                <span className="bg-gray-800 px-2 py-1 rounded mx-2 font-semibold">front-end</span>
                and
                <span className="bg-gray-800 px-2 py-1 rounded mx-2 font-semibold">back-end</span>
                development. When I'm not coding, you can often find me enjoying
                <span className="bg-gray-800 px-2 rounded mx-2 font-semibold inline-flex items-center gap-1"> <BiSolidMovie className="text-white text-2xl animate-loadtwo" />Movies</span>.
                or in the
                <span className="bg-gray-800 px-2 rounded mx-2 font-semibold inline-flex items-center gap-1"> <CgGym className="text-white text-2xl animate-loadtwo" />gym</span>.
            </p>
        </div>
    );
};

export default About;
