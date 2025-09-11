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
  const navElements = [
    { to: "home", icon: <IoMdHome />, label: "Home" },
    { to: "about", icon: <FaUserSecret />, label: "About" },
    { to: "skills", icon: <FaBrain />, label: "Skills" },
    { to: "works", icon: <MdWork />, label: "Projects" },
    { to: "contact", icon: <RiMessage2Fill />, label: "Contact" },
  ];
  return (
    <div className="md:min-w-[40%] min-w-[50%] z-30 fixed top-3 border-2 bg-custom-gradient border-white rounded-xl shadow-[rgba(205,210,230,0.21)_0px_3px_8px]">
      <ul className="flex p-2 w-full justify-around items-center md:gap-2 gap-4">
        {navElements.map((item, index) => (
          <li
            key={index}
            className="relative group text-white flex justify-center cursor-pointer items-center p-2 hover:bg-black/50 rounded-lg md:text-2xl text-xl animate__animated animate__headShake"
          >
            <Link
              to={item.to}
              smooth={true}
              duration={1000}
              offset={-50}
              spy={true}
              // activeClass="bg-black/50 rounded-sm  transform p-1 transition-all duration-300 ease-in-out"
            >
              {item.icon}
            </Link>
            <span className="absolute top-full mt-3 px-2 py-1 text-md font-font1 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap tracking-wide lowercase">
              {item.label}
            </span>
          </li>
        ))}

        <li className="relative group text-white flex justify-center cursor-pointer items-center p-2 hover:bg-black/50 rounded-lg md:text-2xl text-xl animate__animated animate__headShake">
          <a
            href="https://www.linkedin.com/in/rajeshande2004/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <span className="absolute top-full mt-3 px-2 py-1 text-md font-font1 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap tracking-wide lowercase">
            LinkedIn
          </span>
        </li>

        <li className="relative group text-white flex justify-center cursor-pointer items-center p-2 hover:bg-black/50 rounded-lg md:text-2xl text-xl animate__animated animate__headShake">
          <a
            href="https://github.com/heisenberg-xx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubAlt />
          </a>
          <span className="absolute top-full mt-3 px-2 py-1 text-md font-font1 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap tracking-wide lowercase">
            GitHub
          </span>
        </li>
      </ul>
    </div>
  );
};
