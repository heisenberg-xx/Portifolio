import React, { useState } from 'react';
import 'animate.css';
import logo from '../../assets/logo.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import profile from '../../assets/2.jpg'

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);


  return (
    <div className=" w-screen z-10 ">
      <ul className='flex p-[2px] w-full justify-around gap-[10px] bg-primary items-center rounded-xl shadow-[rgba(_205,_210,_230,_0.21)_0px_3px_8px]'>
        <div className='max-w-[50%] px-[25px] md:max-w-[80%] md:px-[10px] flex justify-center md:justify-start items-center'>
          <img className='md:max-w-[40%] md:h-[70px] h-[60px] w-[140px] object-contain animate__animated animate__headShake ' src={logo} alt="" />
        </div>
        <div className='flex flex-1 justify-center md:gap-8 gap-4 p-[3px]  sm:max-w-[15%] items-center'>
          <a href="https://www.linkedin.com/in/rajeshande2004/"><img src={linkedin} alt="" className='hover:scale-110 rounded transition-transform transform animate__animated animate__headShake md:w-[40px] md:h-[40px] h-[30px] w-[30px] object-contain' /></a>
          <a href="https://github.com/raju0005"><img src={github} alt="" className='hover:scale-110 rounded transition-transform transform md:w-[40px] md:h-[40px] h-[30px] w-[30px] animate__animated animate__headShake object-contain' /></a>
          <div className='md:w-[40px] md:h-[40px] h-[30px] w-[30px]flex justify-center items-center'><img className='h-full w-full object-fill rounded border-2 border-white' src={profile} /></div>
        </div>
      </ul>
    </div>
  );
};
