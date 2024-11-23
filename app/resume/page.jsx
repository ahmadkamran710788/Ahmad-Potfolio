"use client";
import { Description } from "@radix-ui/react-dialog";
import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaJava,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiSpringboot,
  SiNestjs,
  SiNextdotjs,
  SiMaterialdesign,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { delay, motion } from "framer-motion";
const about = {
  title: "About me ",
  description: "",
  info: [
    {
      fieldname: "Name",
      fieldvalue: "Ahmad Kamran",
    },
    {
      fieldname: "Phone",
      fieldvalue: "(+92) 305 551 980 6",
    },
    {
      fieldname: "Skype",
      fieldvalue: "Ahmadkamran0999@outlook.com",
    },
    {
      fieldname: "Nationality",
      fieldvalue: "American",
    },
    {
      fieldname: "Email",
      fieldvalue: "Ahmadkamran710788@gmail.com",
    },
    {
      fieldname: "Freelancer",
      fieldvalue: "Available ",
    },
    {
      fieldname: "Language",
      fieldvalue: "English,Urdu ",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience ",
  description:
    " I'm a skilled MERN stack developer who's passionate about Next.js, specializing in building modern web applications. My expertise lies in using MongoDB, Express.js, React, Node.js and Nest.js to create dynamic and responsive apps that deliver exceptional user experiences. I'm particularly adept at backend development, using SQLite and PostgreSQL to build secure and efficient databases. I'm committed to staying updated with the latest technology trends to ensure that every project I work on meets the highest standards of innovation and performance.  ",
  item: [
    {
      company: "Saluq",
      Position: "Associate Engineer",
      duration: "February 2024- November 2024",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education ",
  description:
    "I hold a Bachelor's degree in Software Engineering from COMSATS University, where I developed a strong foundation in software development, project management, and systems analysis. My education equipped me with the skills to tackle complex challenges and create innovative solutions in the tech industry. ",
  item: [
    {
      Institution: "Comsats Univerisity",
      degree: " Bachelor Software Engineering",
      duration: " 2020 - 2024",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I possess a strong skill set in web development, specializing in technologies such as Node.js, Next.js, and React. Proficient in backend frameworks like NestJS and Spring Boot, I excel at building scalable and efficient APIs. Additionally, I have expertise in UX/UI design using Figma and Adobe tools, enabling me to create intuitive user experiences. My analytical problem-solving abilities and teamwork ensure successful project delivery.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html",
    },
    {
      icon: <FaCss3 />,
      name: "Css",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
    },
    {
      icon: <SiExpress />,
      name: "Express",
    },
    {
      icon: <SiSpringboot />,
      name: "SpringBoot",
    },
    {
      icon: <SiNestjs />,
      name: "NestJS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next",
    },
  ],
};

// import {
//   FaHtml5,
//   FaCss3,
//   FaJs,
//   FaJava,
//   FaNodeJs,
//   FaReact,
// } from "react-icons/fa";
// import {
//   SiTailwindcss,
//   SiExpress,
//   SiSpringboot,
//   SiNestjs,
//   SiNextdotjs,
// } from "react-icons/si";
export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.item.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent ">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.Position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.item.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent ">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.Institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full ">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto  xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <h3 className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {about.description}
                </h3>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px ] mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-6 "
                      >
                        <span className="text-white/60">{item.fieldname}</span>
                        <span className="text-xl">{item.fieldvalue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
