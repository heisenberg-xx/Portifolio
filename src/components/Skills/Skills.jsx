import React from 'react'
import react from '../../assets/react.svg';
import python from '../../assets/python.svg';
import express from '../../assets/express.svg';
import tailwind from '../../assets/tailwind.svg';
import javascript from '../../assets/javascript.svg';

import { Skillcard } from './skillcard';


export const Skills = () => {
  return (
    <div id='skills'className='flex flex-col flex-1 justify-evenly gap-5 items-center mt-6 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4'>
      <h1 className='text-[30px] text-text1 font-bold'>Skills</h1>
      <div className='flex flex-col sm:flex-wrap justify-evenly items-center  sm:flex-row  p-4 w-full'>
        <Skillcard name="Python" description="Python is a high-level programming language known for its simplicity and readability, favored for web development, data analysis, artificial intelligence, and more." logo={python} />
        <Skillcard name="React Js" description="React is a Famous JavaScript library for building user interfaces, facilitating component-based development and efficient state management." logo={react} />
        <Skillcard name="Express Js" description="Express.js, a minimalist Node.js web framework, streamlines backend development with its modular middleware and routing, ideal for creating scalable APIs and web servers efficiently." logo={express} />
        <Skillcard name="Tailwind Css" description="Tailwind CSS is a utility-first CSS framework simplifying web development through pre-designed utility classes for rapid and customizable styling." logo={tailwind} />
        <Skillcard name="Java Script" description="JavaScript is a versatile programming language commonly used for web development, known for its ability to create dynamic and interactive web experiences." logo={javascript} />
      </div>
    </div>
  )
}
