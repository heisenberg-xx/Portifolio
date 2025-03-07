import React, { useState } from "react";

export const WorkCard = ({ work }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="reveal flex flex-col justify-around items-center bg-primary w-auto min-h-[195px] md:max-w-96   px-5 py-3  rounded-xl  gap-7 shadow-[rgba(205,210,230,0.21)_0px_3px_8px] border-2 border-white transition-all duration-300 ease-in-out hover:shadow-[rgba(205,210,230,0.5)_0px_5px_15px]"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="flex justify-around items-center gap-5">
        <div className="w-36">
          <img
            className="object-fill rounded-lg"
            src={work.logo}
            alt={work.title}
          />
        </div>
        <div className="flex flex-col justify-around items-center">
          <h1 className="text-[30px] mt-3 mb-1 font-customPD text-white lowercase text-center">
            {work.title}
          </h1>
          <div className="flex justify-around items-center gap-2">
            <button className="text-black font-font2 font-semibold bg-white rounded-lg px-2 py-1 transition-transform transform hover:scale-105">
              <a href={work.link} target="_blank" rel="noopener noreferrer">
                preview
              </a>
            </button>
            <button className="text-white font-semibold font-font2 bg-custom-gradient rounded-lg px-2 py-1 transition-transform transform hover:scale-105">
              <a href={work.git} target="_blank" rel="noopener noreferrer">
                github
              </a>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          open ? "opacity-100 max-h-[400px]" : "opacity-0 max-h-0"
        }`}
      >
        <ul className="font-font2  text-gray-200 text-[13px] pb-2 pl-5">
          {work.desc.map((item, index) => (
            <li key={index} className="list-disc list-outside">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
