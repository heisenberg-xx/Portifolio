import React from 'react';

export const Skillcard = (card) => {
  return (
  <div className="h-[60px] w-[60px] sm:h-[100px] sm:w-[100px] sm:my-[30px] sm:mx-[10px] p-2  animate__animated animate__headShake hover:scale-105 transform  transition-transform">
    <div className="border border-[rgba(_205,_210,_230,_0.21)] bg-primary p-[20px] relative h-full w-full rounded-xl shadow-[rgba(_205,_210,_230,_0.21)_0px_3px_8px] ">
      <div className="absolute inset-0 p-3">
        <img className="h-full w-full  rounded-xl object-contain " src={card.logo} alt={card.name} />
      </div>
      
    </div>
  </div>
 

  );
};
