import React from "react";
import { WorkCard } from "./WorkCard";
import copycode from "../../assets/copy-code.svg";
import rps from "../../assets/rps.png";
import ben10 from "../../assets/ben10.png";
import moody from "../../assets/moody1.png";
import bb from "../../assets/bb.png";
import ComingSoon from "./ComingSoon";

export const Works = () => {
  return (
    <section
      id="works"
      className="reveal container flex flex-col flex-1 justify-evenly gap-5 items-center mx-auto my-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4"
    >
      <h1 className="text-3xl md:text-5xl text-text1 flex justify-center items-center ">
        <span className="bg-custom-gradient border-2 border-white rounded-lg flex justify-center items-center text-white shadow-lg p-2">
          <span>Co</span>
        </span>
        oked in vs code
      </h1>

      <div className="grid md:grid-cols-2 items-start rounded-xl gap-5">
        <WorkCard
          work={{
            logo: rps,
            title: "Rock-Paper-Scissors",
            desc: [
              "Step into the lab where strategy meets chaos—this was my first experiment in web chemistry.",
              "Crafted with pure HTML, CSS, and JavaScript—every click is a reaction, every round a gamble.",
              "Responsive by design, because a true cook serves anywhere, anytime.",
              "Added an unpredictable computer opponent, making every match a high-stakes encounter.",
            ],
            git: "https://github.com/heisenberg-xx/rock-paper-scissors",
            link: "https://rock-paper-scissors-bro.netlify.app/",
            techstack: ["HTML", "CSS", "JS"],
          }}
        />

        <WorkCard
          work={{
            logo: copycode,
            title: "Copy-Code",
            desc: [
              "The ultimate code lab—share snippets across devices without leaving a trace.",
              "Built with React.js and Tailwind CSS for a fast, slick, and untraceable operation.",
              "Cross-device collaboration made simple: one username, infinite access.",
              "Backend powered by Express and MongoDB—safe, reliable, and ready for any hack.",
              "Designed to let devs cook up ideas and share them faster than a meth lab’s chemistry set.",
            ],
            git: "https://github.com/heisenberg-xx/copy-code",
            link: "https://copy-code-bro.vercel.app/",
            techstack: ["React", "Express", "Tailwindcss", "Context"],
          }}
        />

        <WorkCard
          work={{
            logo: ben10,
            title: "Ben-10-Wiki",
            desc: [
              "A full-stack lab for Ben 10 fans—breaking down every alien, every season, with precision.",
              "React, Redux, and Tailwind CSS—smooth as a perfectly cooked batch.",
              "Backend fueled by Express and MongoDB, fetching alien data like chemical reactions in motion.",
              "Interactive and structured, because a true cook leaves nothing to chance.",
              "Full-stack mastery showcased: state, responsiveness, and backend connectivity in one potent concoction.",
            ],
            link: "https://ben-10-wiki.vercel.app/",
            git: "https://github.com/heisenberg-xx/Ben-10",
            techstack: ["React", "Express", "Tailwindcss", "Redux"],
          }}
        />

        <WorkCard
          work={{
            logo: moody,
            title: "Moody",
            desc: [
              "Step into the diary lab: tracking moods, thoughts, and the chaos of the mind.",
              "Built with Next.js, Clerk, and ShadCN—sleek, modern, and bulletproof.",
              "MongoDB stores your mood trends like lab samples ready for analysis.",
              "Clerk authentication ensures only authorized cooks enter the lab.",
              "ArcJect shields against bots, keeping the experiment pure.",
              "Intuitive interface crafted for maximum engagement—every entry a calculated reaction.",
            ],
            link: "https://moody-digital-diary.vercel.app/",
            git: "https://github.com/heisenberg-xx/Moody",
            techstack: ["Next", "Shadcn", "Clerk", "ArcJet"],
          }}
        />

        <WorkCard
          work={{
            logo: bb,
            title: "Blood Bridge",
            desc: [
              "A life-saving operation—connecting donors and recipients with precision and zero contamination.",
              "OTP verification keeps the system clean and reliable—like purity tests in the lab.",
              "MongoDB maps nearby donors, ensuring fast response in critical moments.",
              "Material UI creates an interface as sharp and clean as lab glassware.",
              "Full-stack expertise on display: authentication, user experience, and high-stakes delivery.",
            ],
            link: "https://blood-bridge-app.vercel.app/",
            git: "https://github.com/heisenberg-xx/blood_bridge",
            techstack: ["React", "Material UI", "Express", "MongoDB"],
          }}
        />
        <ComingSoon/>
      </div>
    </section>
  );
};
