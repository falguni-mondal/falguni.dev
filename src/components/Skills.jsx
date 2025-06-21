import React from "react";
import SectionHeading from "./SectionHeading";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { MdDataObject } from "react-icons/md";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandHtml5 } from "react-icons/tb";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Skills = () => {
  const screen = window.innerWidth;
  const skills = [
    {
      title: "React.js",
      icon: FaReact,
      color: "text-[#38BCF8]",
      id : "react",
      shadow : "blue"
    },
    {
      title: "Redux Toolkit",
      icon: SiRedux,
      color: "text-[#818CF8]",
      id : "redux",
      shadow : "purple"
    },
    {
      title: "Tailwind CSS",
      icon: RiTailwindCssFill,
      color: "text-[#39BDF7]",
      id: "tailwind",
      shadow : "blue"
    },
    {
      title: "JavaScript",
      icon: FaJsSquare,
      color: "text-[#F9C026]",
      id: "js",
      shadow : "yellow"
    },
    {
      title: "Node.js",
      icon: FaNodeJs,
      color: "text-[#448A43]",
      id: "node",
      shadow : "green"
    },
    {
      title: "Express.js",
      icon: SiExpress,
      color: "text-[#c7c7c7]",
      id: "express",
      shadow : "white"
    },
    {
      title: "MongoDB",
      icon: SiMongodb,
      color: "text-[#086D50]",
      id: "mongo",
      shadow : "deep-green"
    },
    {
      title: "Java",
      icon: FaJava,
      color: "text-[#c7d8e1]",
      id: "java",
      shadow : "blue"
    },
    {
      title: "Data Structures",
      icon: MdDataObject,
      color: "text-[#818CF8]",
      id: "ds",
      shadow : "purple"
    },
    {
      title: "CSS",
      icon: IoLogoCss3,
      color: "text-[#0EA5E9]",
      id: "css",
      shadow : "blue"
    },
    {
      title: "HTML",
      icon: TbBrandHtml5,
      color: "text-[#F97316]",
      id: "html",
      shadow : "orange"
    },
  ];
  
  useGSAP(() => {
    {
      [
        "#react-icon",
        "#redux-icon",
        "#tailwind-icon",
        "#js-icon",
        "#java-icon",
        "#node-icon",
        "#express-icon",
        "#mongo-icon",
        "#ds-icon",
        "#css-icon",
        "#html-icon",
      ].map((item) => {
        gsap.from(item, {
          opacity: 0,
          scale: 0.5,
          scrollTrigger: {
            trigger: item,
            start: `${screen >= 1024 ? "top 60%" : "top 40%"}`,
            end: `${screen >= 1024 ? "top 60%" : "top 40%"}`,
            ease: "power4.inOut",
          },
        });
      });

      skills.map((item) => {
        gsap.from(`#${item.id}-txt`, {
          opacity: 0.1,
          scrollTrigger: {
            trigger: `#${item.id}-txt`,
            start: `${screen >= 1024 ? "top 57.6%" : "top 38.5%"}`,
            end: `${screen >= 1024 ? "top 57.6%" : "top 38.5%"}`,
            ease: "power4.inOut",
          },
        });
      });
    }
  });

  return (
    <section id="skill-section" className="skills-section w-full mt-[15vh] lg:mt-[20vh]">
      <div className="skill-heading">
        <SectionHeading heading={"Skills."} size={"text-[20vw]"} />
        <span className="skill-underline block w-full h-[3px] bg-[#242329] relative top-[-1vh]"></span>
      </div>
      <div className="skill-container mt-[5vh] w-full">
        <ul className="w-full flex flex-col gap-2 lg:gap-1">
          {skills.map(({title, icon : Icon, color, shadow, id}, index) => (
            <li
              key={index}
              className={`w-[95%] lg:text-[3.2vw] text-[7vw] font-semibold tracking-tighter flex justify-between items-center text-[#f8f8f8]`}
            >
              <span id={`${id}-txt`}>{title}</span>
              <span className={`${color} ${index <= 6 ? "text-[2.2rem] lg:text-[3rem]" : "text-[2.5rem] lg:text-[3.2rem]"} ${shadow}`} id={`${id}-icon`}><Icon/></span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
