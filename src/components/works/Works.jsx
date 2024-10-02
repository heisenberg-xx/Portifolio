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
            logo: rps,
            title: "Rock-Paper-Scissors",
            desc: [
              "Built a fun, interactive Rock Paper Scissors game using HTML, CSS, and JavaScript.",
              "Implemented real-time game mechanics with visually appealing designs for an engaging user experience.",
              "Designed the app to be responsive across devices, allowing users to enjoy the game from any platform.",
              "Added a computer-generated opponent to ensure unpredictable and exciting gameplay.",
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
              "Developed a music web app using Shazam API and React.js for users to explore albums and tracks in real-time.",
              "Designed a responsive, intuitive UI with Tailwind CSS, offering seamless navigation across devices.Integrated a dynamic search feature that enhances user experience by delivering music suggestions instantly.",
              "Focused on user engagement by ensuring a smooth, fast-loading interface, supporting both desktop and mobile users.",
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
              "Created a code-sharing platform using React.js and Tailwind CSS to enable users to share snippets across devices without login.",
              "Simplified cross-device collaboration, offering quick access to shared code with a single username.",
              "Designed the platform with a focus on ease of use, ensuring that developers can quickly share and collaborate on code.",
            ],
            git: "https://copy-code-bro.vercel.app/",
            link: "https://copy-code-bro.vercel.app/",
          }}
        />
        <WorkCard
          work={{
            logo: ben10,
            title: "Ben-10-Wiki",
            desc: [
              "Developed a full-stack web application using React.js, Redux, Express.js, MongoDB, and Tailwind CSS to create an interactive encyclopedia for Ben 10 fans.",
              "Designed and implemented a dynamic database to store and display information on episodes, characters, and aliens from the series.",
              "Built with a focus on user interactivity, allowing fans to explore the world of Ben 10 in a structured and immersive format.",
              "Showcased expertise in full-stack development, combining responsive design with efficient state management and server-side rendering.",
            ],
            link: "https://ben-10-wiki.vercel.app/",
            git: "https://github.com/raju0005/Ben-10",
          }}
        />
      </div>
    </div>
  );
};
