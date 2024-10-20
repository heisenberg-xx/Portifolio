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
      <h1 className="text-[40px] text-text1">
        Creative Projects
      </h1>

      <div className="flex flex-1  flex-col justify-around items-center rounded-xl  gap-5">
 <WorkCard
          work={{
            logo: ben10,
            title: "Ben-10-Wiki",
            desc: [
              "A fan site where users explore characters, episodes, and aliens from the Ben 10 universe.",
              "Built With: React.js, Redux, Express.js, MongoDB, Tailwind CSS",
              "What’s Cool: Backend API powers fast data retrieval, and Redux keeps everything smooth.",
              
            ],
            link: "https://ben-10-wiki.vercel.app/",
            git: "https://github.com/raju0005/Ben-10",
          }}
        />
        <WorkCard
          work={{
            logo: rps,
            title: "Rock-Paper-Scissors",
            desc: [
              "A browser game that’s always ready for a quick match.",
              "Built With: HTML, CSS, JavaScript",
              "Why It’s Fun: Face off against a computer opponent with random moves—easy, quick, and responsive.,
              
            ],
            git: "https://github.com/raju0005/rock-paper-scissors",
            link: "https://rajugame.netlify.app/",
          }}
        />

        <WorkCard
          work={{
            logo: volt,
            title: "Volt Music Player",
            desc: [
              "A music app that’s fast and fun to explore tracks.",
              "Built With: React.js, Tailwind CSS, Shazam API",
              "What’s Cool: Real-time song search with smooth navigation on any device.",
            ],
            git: "https://voltmusicplayer.netlify.app/",
            link: "https://voltmusicplayer.netlify.app/",
          }}
        />
        <WorkCard
          work={{
            logo: copycode,
            title: "Copy-Code",
            desc: [
              "A no-login code-sharing tool—share snippets in seconds.",
              "Built With: React.js, Express.js, MongoDB, Tailwind CSS access to shared code with a single username.",
              "Why It Matters: Quick sharing across devices with just a username. No hassle, just code.",
            ],
            git: "https://copy-code-bro.vercel.app/",
            link: "https://copy-code-bro.vercel.app/",
          }}
        />
       
      </div>
    </div>
  );
};
