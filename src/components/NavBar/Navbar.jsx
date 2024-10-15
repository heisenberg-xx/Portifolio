import React, { useState } from 'react';
import 'animate.css';
import logo from '../../assets/logo.svg';

import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);


  return (
    <div className="relative z-10">
      <ul className='flex p-2 w-full justify-around gap-[60px] bg-primary items-center rounded-xl shadow-[rgba(_205,_210,_230,_0.21)_0px_3px_8px]'>
        <div className='sm:flex hidden m-7 sm:max-w-[40%] sm:px-[25px] max-w-[45%] px-[10px]'>
        </div>
        <div className='sm:max-w-[50%] sm:px-[25px] max-w-[40%] px-[10px] flex justify-center items-center'>
          <img className='sm:max-w-[40%] object-contain animate__animated animate__headShake  h-[85px]' src={logo} alt="" />
        </div>
        <div className='flex flex-1 justify-center gap-8 p-[10px]  sm:max-w-[15%] items-center'>
          <a href="https://www.linkedin.com/in/rajeshande2004/"><img src={linkedin} alt="" className='hover:scale-110 rounded transition-transform transform animate__animated animate__headShake w-[35px] h-[35px]   object-contain' /></a>
          <a href="https://github.com/raju0005"><img src={github} alt="" className='hover:scale-110 rounded transition-transform transform w-[35px] h-[35px] animate__animated animate__headShake object-contain' /></a>
         
        </div>
      </ul>
    </div>
  );
};
