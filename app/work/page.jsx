// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { BsArrowUpRight, BsGithub } from "react-icons/bs";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@radix-ui/react-tooltip";
// import Image from "next/image";
// import Link from "next/link";

// const projectData = [
//   {
//     num: "01",
//     category: "frontend",
//     title: "project1",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//     stack: [
//       { name: "HTML5" },
//       { name: "HTML5" },
//       { name: "HTML5" },
//       { name: "HTML5" },
//       { name: "HTML5" },
//     ],
//     image: "/assets/work/thumb1",
//     live: "",
//     github: "",
//   },
// ];

// export default function Work() {
//   const [project, setProject] = useState(projectData[0]);
//   const handleChange = (swiper) => {
//     const currentIndex = swiper.activeIndex;
//     setProject(projectData[currentIndex]);
//   };
//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
//     >
//       <div className="container mx-auto">
//         <div className="flex flex-col xl:flex-row xl:gap-[30px]">
//           <div className="w-full  xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-center order-2 xl:order-none ">
//             <div className="flex flex-col gap-[30px] h-[50%]">
//               <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
//                 {" "}
//                 {project.num}
//               </div>
//               {/* project catagory */}
//               <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">
//                 {project.category} Project
//               </h2>
//               <p className="text-white/60 break-words mx-auto xl:mx-0">
//                 {project.description}{" "}
//               </p>
//               <ul className="flex gap-4">
//                 {project.stack.map((item, index) => {
//                   return (
//                     <li key={index} className="text-xl text-accent">
//                       {item.name}
//                       {index !== project.stack.length - 1 && ","}
//                     </li>
//                   );
//                 })}
//               </ul>
//               <div className="border border-white/20"></div>
//               {/* button */}
//               <div className="flex items-center gap-4">
//                 <TooltipProvider delayDuration={100}>
//                   <Link href={project.live}>
//                     <Tooltip>
//                       <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
//                         <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
//                       </TooltipTrigger>
//                       <TooltipContent className="bg-white text-black text-sm p-2 rounded-md shadow-lg">
//                         <p>Live Project</p>
//                       </TooltipContent>
//                     </Tooltip>
//                   </Link>
//                   {/* github  */}
//                   <Link href={project.github}>
//                     <Tooltip>
//                       <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
//                         <BsGithub className="text-white text-3xl group-hover:text-accent" />
//                       </TooltipTrigger>
//                       <TooltipContent className="bg-white text-black text-sm p-2 rounded-md shadow-lg">
//                         <p>Git HUB </p>
//                       </TooltipContent>
//                     </Tooltip>
//                   </Link>
//                 </TooltipProvider>
//               </div>
//             </div>
//           </div>

//           <div className="w-full xl:w-[50%]">
//             <Swiper
//               spaceBetween={30}
//               slidesPerView={1}
//               className="xl:h-[520px] mb-12"
//               onSlideChange={handleChange}
//             >
//               {projectData.map((project, index) => {
//                 return (
//                   <SwiperSlide key={index} className="w-full">
//                     <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
//                       {/* overlay */}
//                       <div className="relative w-full h-full ">
//                         {/* <Image
//                           src={project.image}
//                           // width={1200} // or a responsive width
//                           // height={460}
//                           // full
//                           className="object-cover"
//                           alt=""
//                         /> */}
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 );
//               })}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// }
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Image from "next/image";
import Link from "next/link";
import WorkSliderButton from "@/components/WorkSliderButton";

const projectData = [
  {
    num: "01",
    category: "frontend",
    title: "project1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Node.js" },
    ],
    image: "/assets/work/thumb1.png", // Added extension
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Devops",
    title: "project2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Node.js" },
    ],
    image: "/assets/work/thumb2.png", // Added extension
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Backend",
    title: "project3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Node.js" },
    ],
    image: "/assets/work/thumb3.png", // Added extension
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "UX",
    title: "project1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Node.js" },
    ],
    image: "/assets/work/thumb3.png", // Added extension
    live: "",
    github: "",
  },
];

export default function Work() {
  const [project, setProject] = useState(projectData[0]);
  const handleChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projectData[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[0vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-center order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              <p className="text-white/60 break-words mx-auto xl:mx-0">
                {project.description}
              </p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4">
                <TooltipProvider delayDuration={100}>
                  <Link href={project.live}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-white text-black text-sm p-2 rounded-md shadow-lg">
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </Link>
                  {/* GitHub button */}
                  <Link href={project.github}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-white text-black text-sm p-2 rounded-md shadow-lg">
                        <p>Git HUB</p>
                      </TooltipContent>
                    </Tooltip>
                  </Link>
                </TooltipProvider>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%] xl:mt-[170px]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleChange}
            >
              {projectData.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[500px] relative group flex justify-center items-center bg-background">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 "></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          width={2000} // Set larger width
                          height={800} // Set larger height
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* work slider button  */}
              <WorkSliderButton
                containerStyles="flex gap-2 absolute  right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                buttonStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
