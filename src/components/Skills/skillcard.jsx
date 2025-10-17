import React from "react";

export const Skillcard = ({ logo, name }) => {
  return (
    <div className="bg-black flex  justify-center items-center h-[75px] w-[150px] p-2 animate__animated animate__headShake  transition-all duration-500  hover:scale-105  rounded shadow-[rgba(205,210,230,0.21)_0px_3px_8px] border-2 border-white gap-2">
      <img
        className="h-[50%] w-[50%] object-contain animate-loadtwo"
        src={logo}
        alt={name}
      />
      <h1 className="text-white text-lg font-font2 font-bold">{name}</h1>
    </div>
  );
};
