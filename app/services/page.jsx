// "use client";
// import { Description } from "@radix-ui/react-dialog";
// import Link from "next/link";
// import React from "react";
// import { BsArrowDownRight } from "react-icons/bs";
// import { motion } from "framer-motion";

// const services = [
//   {
//     num: "01",
//     title: "Web Development",
//     Description:
//       "hahhahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
//     href: "",
//   },
//   {
//     num: "02",
//     title: "UX/UI Design",
//     Description: "hahhahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
//     href: "",
//   },
//   {
//     num: "03",
//     title: "Backend Development",
//     Description: "hahhahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
//     href: "",
//   },
//   {
//     num: "04",
//     title: "Logo Design",
//     Description: "hahhahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
//     href: "",
//   },
// ];
// export default function Services() {
//   return (
//     <section className="min-h-[80vh] flex flex-col justify-center  py-12 xl:py-0">
//       <div className="container mx-auto">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{
//             opacity: 1,
//             transition: {
//               delay: 2.4,
//               duration: 0.4,
//               ease: "easeIn",
//             },
//           }}
//           className="grid grid-col-1 md:grid-cols-2 gap-[60px]"
//         >
//           {services.map((services, index) => {
//             return (
//               <div
//                 key={index}
//                 className="flex-1 flex flex-col justify-center gap-6 group"
//               >
//                 {/* top */}
//                 <div className="w-full flex justify-between items-center ">
//                   <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
//                     {services.num}
//                   </div>
//                   <Link
//                     href={services.href}
//                     className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45 transform transition-transform"
//                   >
//                     <BsArrowDownRight className="text-background text-3xl" />
//                   </Link>
//                 </div>
//                 <h2>{services.title}</h2>
//                 <p className="break-words">{services.Description}</p>
//                 <div className="border-b border-white/20 w-full"></div>
//               </div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";
import { Description } from "@radix-ui/react-dialog";
import Link from "next/link";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    Description:
      "hahhahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
    href: "",
  },
  {
    num: "02",
    title: "UX/UI Design",
    Description: "hahhahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
    href: "",
  },
  {
    num: "03",
    title: "Backend Development",
    Description: "hahhahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
    href: "",
  },
  {
    num: "04",
    title: "Logo Design",
    Description: "hahhahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
    href: "",
  },
];

export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] sm:gap-8"
        >
          {services.map((services, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center ">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {services.num}
                  </div>
                  <Link
                    href={services.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 transform transition-transform"
                  >
                    <BsArrowDownRight className="text-background text-3xl" />
                  </Link>
                </div>
                <h2 className="text-xl md:text-2xl">{services.title}</h2>
                <p className="text-sm md:text-base break-words text-white/60">
                  {services.Description}
                </p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
