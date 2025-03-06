import React from "react";
import { Link } from "react-scroll";
import "animate.css";
import { IoMdHome } from "react-icons/io";
import {
  FaUserSecret,
  FaBrain,
  FaGithubAlt,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";

export const Navbar = () => {
  return (
    <div className="md:min-w-[40%] min-w-[50%] z-30 fixed top-3 border-2 bg-custom-gradient border-white rounded-xl shadow-[rgba(205,210,230,0.21)_0px_3px_8px] ">
      <ul className="flex p-2 w-full justify-around   items-center   md:gap-2 gap-4">
        <li className="text-white flex justify-center cursor-pointer items-center p-2 hover:bg-black/50 rounded-lg md:text-2xl text-xl animate__animated animate__headShake">
          <Link to="home" smooth={true} duration={1000} offset={-50}>
            <IoMdHome />
          </Link>
        </li>
        <li className="text-white flex justify-center cursor-pointer items-center p-2  transorm transistion-transform  hover:bg-black/50  rounded-lg md:text-2xl text-xl animate__animated animate__headShake">
          <Link to="about" smooth={true} duration={1000} offset={-50}>
            <FaUserSecret />
          </Link>
        </li>
        <li className="text-white flex justify-center cursor-pointer items-center p-2 transorm transistion-transform  hover:bg-black/50 rounded-lg md:text-2xl text-xl animate__animated animate__headShake">
          <Link to="skills" smooth={true} duration={1000} offset={-50}>
            <FaBrain />
          </Link>
        </li>
        <li className="text-white flex justify-center cursor-pointer items-center p-2 transorm transistion-transform  hover:bg-black/50 rounded-lg md:text-2xl text-xl animate__animated animate__headShake">
          <Link to="works" smooth={true} duration={1000} offset={-50}>
            <MdWork />
          </Link>
        </li>
        <li className="text-white flex justify-center cursor-pointer items-center p-2 transorm transistion-transform  hover:bg-black/50 rounded-lg md:text-2xl text-xl animate__animated animate__headShake">
          <Link to="contact" smooth={true} duration={1000} offset={-50}>
            <RiMessage2Fill />
          </Link>
        </li>
        <li className="text-white flex justify-center cursor-pointer items-center p-2 transorm transistion-transform  hover:bg-black/50 rounded-lg md:text-2xl text-xl animate__animated animate__headShake">
          <a
            href="https://www.linkedin.com/in/rajeshande2004/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>

        <li className="text-white flex justify-center cursor-pointer items-center p-2 transorm transistion-transform  hover:bg-black/50 rounded-lg md:text-2xl text-xl animate__animated animate__headShake">
          <a
            href="https://github.com/raju0005"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubAlt />
          </a>
        </li>
      </ul>
    </div>
  );
};
