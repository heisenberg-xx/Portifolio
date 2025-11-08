import React from "react";

export const Skillcard = ({ logo, name }) => {
  return (
    <div
      className="group flex flex-col justify-center items-center w-[150px] p-2 h-[120px] md:h-[150px]
  animate__animated animate__headShake
  transition-transform duration-300
  transform hover:scale-[1.02]
  rounded gap-2"
    >
      <img
        className="object-contain h-[70%] group-hover:animate-spin"
        src={logo}
        alt={name}
      />
      <h1 className="text-white text-xl font-font2 font-bold lowercase">{name}</h1>
    </div>
  );
};
