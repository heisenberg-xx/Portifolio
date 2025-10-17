import React from "react";
import ryzer from "../../assets/ryzer.png";
import ExperienceCard from "./ExperienceCard";

const Experiences = () => {
  const experiences = [
    {
      role: "Full Stack Intern",
      company: "Ryzer Wealth Corp, Inc",
      timeline: "July 2025 - Present",
      description: [
        "Building and scaling Ryzer, a platform that’s changing the investment game through tokenization of real-world assets.Real world assets turned into digital tokens people can own and trade. No middlemen. No fluff. Just real value.",
        "As a Full Stack Intern, I build clean, fast web experiences , working with the design team on smooth interfaces and the blockchain team to hook up smart contracts.",
        "Every commit, every push — tightening the code, scaling the system, making sure Ryzer runs like a well-oiled machine. Not just an app, a whole new way to invest.",
      ],
      logo: ryzer,
    },
  ];
  return (
    <section className="container w-screen h-screen reveal flex flex-col justify-center items-center m-auto rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-3">
      <h1 className="text-3xl md:text-5xl text-text1 flex justify-center items-center">
        <span className="bg-custom-gradient border-2 border-white rounded-md flex justify-center items-center text-white shadow-lg p-2">
          <span>wo</span>
        </span>
        rk experienZ
      </h1>
      <div className="mt-10 flex flex-col justify-center items-center gap-4 md:max-w-[60%] w-full">
        {experiences.map((experience) => (
          <ExperienceCard experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
