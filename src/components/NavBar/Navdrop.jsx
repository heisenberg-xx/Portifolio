import React from 'react'
import { NavItem } from './Navitem'
export const Navdrop = () => {
  return (
    <div className='flex justify-evenly items-center flex-1 gap-[5px] font-bold '>
            
    <NavItem to="home" title="Home" />
    <NavItem to="skills" title="Skills" />
    <NavItem to="works" title="Works" />
    <NavItem to="contact" title="Contact" />
    </div>
    )

}
