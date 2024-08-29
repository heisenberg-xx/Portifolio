import React from "react";
export const WorkCard = (work) => {
  return (
    <div className="border border-[rgba(_205,_210,_230,_0.21)] flex flex-row px-3 py-2 flex-1 justify-around items-center rounded-xl h-[200px]  bg-primary md:max-w-[62%] w-[90%]  gap-[20px]  shadow-[rgba(_205,_210,_230,_0.21)_0px_3px_8px] animate__animated animate__headShake hover:animate-buzz">
      <div className="w-[200px] ">
        <img
          className="object-fill  rounded-lg"
          src={work.logo}
          alt={work.title}
        />
      </div>
      <div className="flex flex-col justify-around items-center w-full gap-2">
        <h1 className="font-bold text-[16px] mt-3 mb-1 font-font2 text-white">
          {work.title}
        </h1>
        <p className=" font-font1 text-gray-400 text-[15px] px-2 pb-[20px]">
          {work.desc}
        </p>
        <div className="flex flex-row  justify-end items-center gap-4 p-2 w-full">
          <button className="text-black bg-white rounded-xl px-2 py-1"><a href={work.link}>preview</a></button>
          <button className="text-black bg-white rounded-xl px-2 py-1"><a href={work.git}>github</a></button>
         
        </div>
      </div>
    </div>
  );
};
