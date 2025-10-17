import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ExperienceCard = ({ experience }) => {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className="md:w-[80%] reveal border bg-black/60 rounded flex flex-col gap-5 px-5 py-2 relative shadow-[rgba(205,210,230,0.21)_0px_3px_8px]">
      <div className="flex gap-5">
        <div className="md:w-48 w-20 flex items-center">
          <img className="object-contain" src={experience.logo} alt="" />
        </div>
        <div className="flex-1">
          <div className="flex md:flex-row flex-col justify-between md:w-[550px]">
            <div className="flex-1">
              <h1 className="md:text-4xl text-3xl font-customPD text-white lowercase text-left">
                {experience.role}
              </h1>
              <h1 className="text-lg font-font2 text-white lowercase text-left">
                {experience.company}
              </h1>
            </div>
            <p className="text-white font-font2 text-md lowercase">
              {experience.timeline}
            </p>
          </div>

          {/* Description with max height */}
          <div
            className={`text-gray-400 md:text-sm text-xs font-font2 mt-2 overflow-hidden transition-all duration-500 ${
              showFull ? "max-h-[1000px]" : "max-h-16"
            }`}
          >
            {experience.description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Arrow toggle */}
      {experience.description.length > 0 && (
        <div
          className="flex justify-center mt-2 cursor-pointer text-white animate-bounce"
          onClick={() => setShowFull(!showFull)}
        >
          {showFull ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
