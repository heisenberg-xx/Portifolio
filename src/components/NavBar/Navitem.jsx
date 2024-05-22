import React from 'react';
import { Link } from 'react-scroll';

export const NavItem = ({ to, title }) => {
  return (
    <Link
      className='cursor-pointer p-2 m-[5px] hover:text-white/70  rounded transition duration-300'
      to={to}
      spy={true}
      smooth={true}
      offset={-50} 
      duration={500}
    >
      {title}
    </Link>
  );
};
