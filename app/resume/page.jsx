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
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  item: [
    {
      company: "Saluq",
      Position: "Associate Engineer",
      duration: "February 2024- November 2024",
    },
    {
      company: "Saluq",
      Position: "Associate Engineer",
      duration: "February 2024- November 2024",
    },
    {
      company: "Saluq",
      Position: "Associate Engineer",
      duration: "February 2024- November 2024",
    },
    {
      company: "Saluq",
      Position: "Associate Engineer",
      duration: "February 2024- November 2024",
    },
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
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
  item: [
    {
      Institution: "Comsats Univerisity",
      degree: " Bachelor Software Engineering",
      duration: " 2020 - 2024",
    },
    {
      Institution: "Comsats Univerisity",
      degree: " Bachelor Software Engineering",
      duration: " 2020 - 2024",
    },
    {
      Institution: "Comsats Univerisity",
      degree: " Bachelor Software Engineering",
      duration: " 2020 - 2024",
    },
    {
      Institution: "Comsats Univerisity",
      degree: " Bachelor Software Engineering",
      duration: " 2020 - 2024",
    },
    {
      Institution: "Comsats Univerisity",
      degree: " Bachelor Software Engineering",
      duration: " 2020 - 2024",
    },
    {
      Institution: "Comsats Univerisity",
      degree: " Bachelor Software Engineering",
      duration: " 2020 - 2024",
    },
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
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html",
    },
    {
      icon: <FaHtml5 />,
      name: "Html",
    },
    {
      icon: <FaHtml5 />,
      name: "Html",
    },
    {
      icon: <FaHtml5 />,
      name: "Html",
    },
    {
      icon: <FaHtml5 />,
      name: "Html",
    },
    {
      icon: <FaHtml5 />,
      name: "Html",
    },
    {
      icon: <FaHtml5 />,
      name: "Html",
    },
    {
      icon: <FaHtml5 />,
      name: "Html",
    },
  ],
};
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
