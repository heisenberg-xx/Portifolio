import React from "react";
import { WorkCard } from "./WorkCard";
import copycode from "../../assets/copycode.jpg";
import rps from "../../assets/rps.jpg";
import volt from "../../assets/Volt.svg";
import ben10 from "../../assets/ben10.png";

export const Works = () => {
  return (
    <section
      id="works"
      className="reveal container flex flex-col flex-1 justify-evenly gap-5 items-center m-auto rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4"
    >
      <h1 className="text-3xl md:text-5xl text-text1 flex justify-center items-center ">
        <span className="bg-custom-gradient border-2 border-white rounded-lg flex justify-center items-center text-white shadow-lg p-2">
          <span>Cr</span>
        </span>
        eative projects
      </h1>

      <div className="flex flex-1  flex-col justify-around items-center rounded-xl  gap-5">
 <WorkCard
          work={{
            logo: ben10,
            title: "Ben-10-Wiki",
            desc: [
              "A fan site where users explore seasons, and aliens from the Ben 10 universe.",
              "Built With: React.js, Redux, Express.js, MongoDB, Tailwind CSS",
              "What’s Cool: Backend API powers fast data retrieval, and Redux keeps everything smooth.",
              
            ],
            link: "https://ben-10-wiki.vercel.app/",
            git: "https://github.com/raju0005/Ben-10",
          }}
        />
<<<<<<< HEAD

     
        
=======
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
>>>>>>> 65f06e1dfdc62372e61cb74129a26031d5358925
        <WorkCard
          work={{
            logo: rps,
            title: "Rock-Paper-Scissors",
            desc: [
              "A browser game that’s always ready for a quick match.",
              "Built With: HTML, CSS, JavaScript",
              "Why It’s Fun: Face off against a computer opponent with random moves—easy, quick, and responsive.",
              
            ],
            git: "https://github.com/raju0005/rock-paper-scissors",
            link: "https://rajugame.netlify.app/",
          }}
        />

       
       
       
      </div>
    </section>
  );
};
