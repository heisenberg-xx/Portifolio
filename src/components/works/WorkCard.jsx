import React from "react";

export const WorkCard = ({ work }) => {
  return (
    <div className="border border-[rgba(_205,_210,_230,_0.21)] flex flex-row px-5 py-3  flex-1 justify-around items-center rounded-xl bg-primary md:max-w-[62%] w-[90%] gap-7 shadow-[rgba(_205,_210,_230,_0.21)_0px_3px_8px] animate__animated animate__headShake hover:animate-buzz relative md:max-h-[350px]">
      <div className="w-[200px] hidden md:flex">
        <img
          className="object-fill rounded-lg"
          src={work.logo}
          alt={work.title}
        />
      </div>
      <div className="w-[150px] md:hidden flex absolute opacity-65 z-10">
        <img src={work.logo} alt={work.title} className="object-cover" />
      </div>
      <div className="flex flex-col justify-between items-center w-full gap-2 bg-black/30 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 h-full z-20">
        <h1 className=" text-[30px] mt-3 mb-1 font-customPD text-white lowercase">
          {work.title}
        </h1>
        <ul className="font-font2 flex flex-col justify-around items-start text-gray-500 text-[13px]  pb-2">
          {work.desc.map((item, index) => (
            <li key={index} className="list-disc list-outside">
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-row justify-end items-center gap-4 p-2 w-full">
          <button className="text-black  font-font2 font-semibold bg-white rounded-xl px-2 py-1 transition-transform transfrom hover:scale-105">
            <a href={work.link}>preview</a>
          </button>
          <button className="text-black font-semibold font-font2 bg-white rounded-xl px-2 py-1 transition-transform transfrom hover:scale-105">
            <a href={work.git}>github</a>
          </button>
        </div>
      </div>
    </div>
  );
};
