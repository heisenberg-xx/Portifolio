import React from 'react';
import eye from '../../assets/eye.svg';
import git from '../../assets/git.svg';

export const WorkCard = (work) => {
  return (
    <div className='border border-[rgba(_205,_210,_230,_0.21)] flex flex-col p-3 flex-1 justify-around items-center rounded-xl h-[310px] bg-primary sm:max-w-[15%] max-w-[60%] m-3  gap-[20px] sm:gap-1 shadow-[rgba(_205,_210,_230,_0.21)_0px_3px_8px] animate__animated animate__headShake'>
      <div className='w-[150px] sm:w-[190px] relative'>
        <img className='sm:object-contain object-fill rounded-lg' src={work.logo} alt={work.title} />
        <div className='w-full h-full flex justify-center items-center absolute inset-0 rounded-lg bg-black/60 opacity-0 hover:opacity-100 transition-all duration-500'>
          <a href={work.link} className='flex justify-center items-center w-[19%] m-5'>
            <img className='object-contain' src={eye} alt="View" />
          </a>
          <a href={work.git} className='flex justify-center items-center w-[19%] m-5'>
            <img className='object-contain' src={git} alt="GitHub" />
          </a>
        </div>
      </div>
      <div className='flex flex-col justify-around items-center gap-1'>
        <h1 className='font-bold text-[16px]'>{work.title}</h1>
        <p className='mb-4 font-font1 text-gray-600 text-[13px]'>{work.desc}</p>
      </div>
    </div>
  );
};
