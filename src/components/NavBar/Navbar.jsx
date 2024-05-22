import React, { useState } from 'react';
import 'animate.css';
import logo from '../../assets/logo.svg';
import menu from '../../assets/down.svg';
import close from '../../assets/up.svg';
import { Navdrop } from './Navdrop';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);


  return (
    <div className="relative z-10">
      <ul className='flex p-2 w-full justify-evenly gap-[60px] bg-primary items-center rounded-xl shadow-[rgba(_205,_210,_230,_0.21)_0px_3px_8px]'>
        <div className='sm:flex hidden m-7 sm:max-w-[40%] sm:px-[25px] max-w-[45%] px-[10px]'>
        </div>
        <div className='sm:max-w-[40%] sm:px-[25px] max-w-[30%] px-[10px] flex justify-center items-center'>
          <img className='sm:max-w-[60%] object-contain animate__animated animate__headShake  h-[85px]' src={logo} alt="" />
        </div>
        <div className='flex flex-1 justify-around p-[10px] gap-[20px] sm:max-w-[15%] items-center'>
          <a  href="https://www.linkedin.com/in/rajeshande2004/"><img src={linkedin} alt="" className='hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(255,255,255,0.3)_0px_3px_7px_-3px] rounded transition duration-300 animate__animated animate__headShake w-[30px] h-[30px]   object-contain' /></a>
          <a href="https://github.com/raju0005"><img src={github} alt="" className='hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded transition duration-300 w-[30px] h-[30px] animate__animated animate__headShake object-contain' /></a>
          <img
            src={toggle ? close : menu}
            alt="Menu"
            className={`animate__animated animate__headShake w-[20px] h-[20px] object-contain cursor-pointer`}
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${toggle ? 'flex animate__animated animate__slideInDown ' : 'hidden '} p-6 shadow-[rgba(_205,_210,_230,_0.21)_0px_3px_8px] bg-primary absolute text-text1 top-[90px] sm:right-[80px] right-[-1px] mx-4 my-3 sm:w-[400px] w-[370px] rounded-xl z-[-2] border border-[rgba(_205,_210,_230,_0.21)]`}
          >
            <Navdrop />
          </div>
        </div>
      </ul>
    </div>
  );
};
