import React from "react";
import { WorkCard } from "./WorkCard";
import copycode from "../../assets/copy-code.svg";
import rps from "../../assets/rps.png";
import ben10 from "../../assets/ben10.png";
import moody from "../../assets/moody1.png";

export const Works = () => {
  return (
    <section
      id="works"
      className="reveal container flex flex-col flex-1 justify-evenly gap-5 items-center mx-auto my-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4"
    >
      <h1 className="text-3xl md:text-5xl text-text1 flex justify-center items-center ">
        <span className="bg-custom-gradient border-2 border-white rounded-lg flex justify-center items-center text-white shadow-lg p-2">
          <span>Cr</span>
        </span>
        eative projects
      </h1>

      <div className="grid md:grid-cols-2  items-start rounded-xl  gap-5">
        <WorkCard
          work={{
            logo: rps,
            title: "Rock-Paper-Scissors",
            desc: [
              "Rock-Paper-Scissor is a fun and interactive game that marked my first step into web development.",
              "Built using HTML, CSS, and JavaScript to create an engaging user experience.",
              "Designed to be responsive across devices, allowing users to play seamlessly on any platform.",
              "Added a computer-generated opponent for unpredictable and exciting gameplay.",
            ],
            git: "https://github.com/raju0005/rock-paper-scissors",
            link: "https://rock-paper-scissors-bro.netlify.app/",
            techstack: ["HTML", "CSS", "JS"],
          }}
        />

        <WorkCard
          work={{
            logo: copycode,
            title: "Copy-Code",
            desc: [
              " Copy-Code is a code-sharing platform that enables users to share snippets across devices without requiring login.",
              "Built using React.js, Tailwind CSS for a fast and seamless experience.",
              "Simplified cross-device collaboration, allowing quick access to shared code with a single username.",
              "Used Express and MongoDB for storing and retrieving shared snippets efficiently.",
              "Designed with a focus on ease of use, ensuring developers can quickly share and collaborate on code.",
            ],
            git: "https://copy-code-bro.vercel.app/",
            link: "https://copy-code-bro.vercel.app/",
            techstack: ["React", "Express", "Tailwindcss", "Context"],
          }}
        />
        <WorkCard
          work={{
            logo: ben10,
            title: "Ben-10-Wiki",
            desc: [
              "Ben 10 Wiki is a full-stack web application designed for Ben 10 fans which contains information about Ben 10 seasons and Aliens.",
              "Built using React.js, Redux and Tailwind CSS for a smooth and responsive experience.",
              "Used Express and MongoDB to fetch and display content from the backend, including season names, aliens, and their powers",
              "Focused on user interactivity, allowing fans to explore information in an engaging and structured way",
              "Showcased expertise in full-stack development, integrating state management, responsive design, and backend connectivity",
            ],
            link: "https://ben-10-wiki.vercel.app/",
            git: "https://github.com/raju0005/Ben-10",
            techstack: ["React", "Express", "Tailwindcss", "Redux"],
          }}
        />
        <WorkCard
          work={{
            logo: moody,
            title: "Moody",
            desc: [
              "Moody is a digital diary designed to help users track their daily moods and thoughts.",
              "Built using Next.js, Clerk, and ShadCN for a modern and seamless journaling experience.",
              "Used MongoDB for persistent storage, allowing users to view and analyze their mood trends over time.",
              "Integrated Clerk authentication to ensure secure and seamless user access.",
              "Implemented ArcJect for rate limiting and bot protection.",
              "Focused on creating an intuitive and engaging interface with ShadCN.",
              "Showcased expertise in full-stack development, authentication, and user experience design.",
            ],
            link: "https://moody-digital-diary.vercel.app/",
            git: "https://github.com/raju0005/Moody",
            techstack: ["Next", "Shadcn", "Clerk", "ArcJet"],
          }}
        />
      </div>
    </section>
  );
};
