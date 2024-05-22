import React from 'react';

export const Skillcard = (card) => {
  return (
  <div className="group  h-[200px] w-[150px] sm:h-[250px] sm:w-[200px] sm:my-[30px] sm:mx-[10px] p-2 [perspective:1000px] m-3 animate__animated animate__headShake">
    <div className="border border-[rgba(_205,_210,_230,_0.21)] bg-primary p-[20px] relative h-full w-full rounded-xl shadow-[rgba(_205,_210,_230,_0.21)_0px_3px_8px] transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div className="absolute inset-0 p-3">
        <img className="h-full w-full  rounded-xl object-contain " src={card.logo} alt={card.name} />
      </div>
      <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-3 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden">
        <div className="flex min-h-full flex-col  items-center justify-center">
          <h1 className="text-xl font-bold mb-2">{card.name}</h1>
          <p className=" font-font1 text-[13px]">{card.description}</p>
        </div>
      </div>
    </div>
  </div>
 

  );
};
