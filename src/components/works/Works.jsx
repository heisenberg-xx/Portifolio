import React from "react";
import { WorkCard } from "./WorkCard";
import copycode from "../../assets/copycode.jpg";
import rps from "../../assets/rps.jpg";
import volt from "../../assets/Volt.svg";
import ben10 from "../../assets/ben10.png";

export const Works = () => {
  return (
    <div
      id="works"
      className="reveal flex flex-col flex-1 justify-evenly gap-5 items-center mt-6 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 my-5"
    >
      <h1 className="text-[30px] text-text1 font-bold font-font2">
        Creative Projects
      </h1>

      <div className="flex flex-1  flex-col justify-around items-center rounded-xl  gap-5">
        <WorkCard
          logo={rps}
          title="Rock-Paper-Scissors"
          desc="Developed a Rock-Paper-Scissors game using HTML, CSS, and JavaScript, incorporating layout, styling, and interactive game logic."
          git="https://github.com/raju0005/rock-paper-scissors"
          link="https://rajugame.netlify.app/"
        />
        <WorkCard
          logo={copycode}
          title="Copy-Code"
          desc="Developed Copy-Code, a code-sharing app using React, Express, and MongoDB. Enabled sharing to any device with a single username and no login required."
          link="https://copy-code-bro.vercel.app/"
          git="https://github.com/raju0005/copy-code "
        />
        <WorkCard
          logo={volt}
          title="Volt Music"
          desc="Developed Volt Music, a web music player using React, Tailwind CSS, and the SHAZAM API. Implemented seamless music playback and a responsive design."
          link="https://voltmusicplayer.netlify.app/"
          git="https://github.com/raju0005/Volt-Music-Player  "
        />
        <WorkCard
          logo={ben10}
          title="Ben 10 Wiki"
          desc="
Developed a responsive Ben 10 fan wiki with React, Redux, Express.js, Tailwind CSS, and MongoDB, featuring detailed sections on seasons and aliens."
          link="https://ben-10-wiki.vercel.app/"
          git="https://github.com/raju0005/Ben-10"
        />
      </div>
    </div>
  );
};
