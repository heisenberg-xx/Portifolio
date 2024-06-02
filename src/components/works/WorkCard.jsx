import React from 'react';
import eye from '../../assets/eye.svg';
import git from '../../assets/git.svg';

export const WorkCard = (work) => {
  return (
    <div className='border border-[rgba(_205,_210,_230,_0.21)] flex flex-col p-3 flex-1 justify-around items-center rounded-xl h-[200px] sm:h-[320px] bg-primary sm:max-w-[17%] max-w-[62%] m-3 gap-[20px] sm:gap-1 shadow-[rgba(_205,_210,_230,_0.21)_0px_3px_8px] animate__animated animate__headShake'>
      <div className='w-[150px] sm:w-[200px] relative'>
        <img className='sm:object-fill object-contain rounded-lg' src={work.logo} alt={work.title} />
        <div className='w-full h-full flex justify-center items-center absolute inset-0 rounded-lg bg-black/60 opacity-0 hover:opacity-100 transition-all duration-500'>
          <a href={work.link} className='flex justify-center items-center w-[19%] m-5 cursor-auto'>
            <img className='object-contain' src={eye} alt="View" />
          </a>
          <a href={work.git} className='flex justify-center items-center w-[19%] m-5 cursor-pointer'>
            <img className='object-contain' src={git} alt="GitHub" />
          </a>
        </div>
      </div>
      <div className='flex flex-col justify-around items-center w-full'>
        <h1 className='font-bold text-[16px] mt-3 mb-1 font-font2 text-white'>{work.title}</h1>
        <p className=' font-font1 text-gray-400 text-[13px] px-2 pb-[20px]'>{work.desc}</p>
      </div>
    </div>
  );
};
