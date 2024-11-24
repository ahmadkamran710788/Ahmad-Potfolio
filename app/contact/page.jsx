// "use client";
// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

// const info = [
//   {
//     icon: <FaPhoneAlt />,
//     title: "Phone",
//     description: "(+92) 305 551 9806",
//   },
//   {
//     icon: <FaEnvelope />,
//     title: "Email",
//     description: "Ahmadkamran099@gmail.com",
//   },
//   {
//     icon: <FaMapMarkedAlt />,
//     title: "Address",
//     description: "Gulberg greens,Islamabad",
//   },
// ];
// import { motion } from "framer-motion";
// import { SelectLabel } from "@radix-ui/react-select";
// export default function Contact() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{
//         opacity: 1,
//         transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
//       }}
//       className="py-6"
//     >
//       <div className="container mx-auto">
//         <div className="flex flex-col xl:flex-row  gap-[30px]">
//           <div className="xl:w-[54%] order-2 xl:order-none ">
//             <form className="flex flex-col gap-6 p-10  bg-[#27272c] rounded-xl ">
//               <h3 className="text-4xl text-accent">Let's work together</h3>
//               <p className="text-white/60 ">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy
//                 text ever since the 1500s, when an unknown printer took a galley
//                 of type and scrambled it to make a type specimen book. It has
//                 survived not only five centuries, but also the leap into
//                 electronic typesetting, remaining essentially unchanged
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <Input type="firstname" placeholder="First Name" />
//                 <Input type="lastname" placeholder="Last Name" />
//                 <Input type="email" placeholder="Email" />
//                 <Input type="phone" placeholder="Phone number" />
//               </div>
//               <Select>
//                 <SelectTrigger className="w-full">
//                   <SelectValue placeholder="Select a Service" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     <SelectLabel> Select a service</SelectLabel>
//                     <SelectItem value="est">Web Development</SelectItem>
//                     <SelectItem value="cst"> UI/UX Design</SelectItem>
//                     <SelectItem value="msl">Backend Development</SelectItem>
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>
//               <Textarea className="h-[200px]" placeholder="Type the message" />
//               <Button size="md" className="max-w-40">
//                 Send Message
//               </Button>
//             </form>
//           </div>

//           <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8  xl:mb-0">
//             <ul className="flex flex-col gap-10">
//               {info.map((item, index) => {
//                 return (
//                   <li key={index} className="flex items-center gap-6">
//                     <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
//                       <div className="text-[28px]">{item.icon}</div>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-white/60">{item.title}</p>
//                       <h3 className="text-xl">{item.description}</h3>
//                     </div>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

"use client";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SelectLabel } from "@radix-ui/react-select";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+92) 305 551 9806",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "Ahmadkamran099@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Gulberg greens, Islamabad",
  },
];

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_stn3857",
        "template_xdd4rgh",
        form.current,
        "SsuC3IXmlEFXvFz78"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          // Optionally reset the form
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={form}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={sendEmail}
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry...
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="from_name" placeholder="First Name" />
                <Input name="from_lastname" placeholder="Last Name" />
                <Input name="from_email" type="email" placeholder="Email" />
                <Input name="phone" type="phone" placeholder="Phone number" />
              </div>
              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Backend Development">
                      Backend Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type the message"
              />
              <Button size="md" className="max-w-40" type="submit">
                Send Message
              </Button>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
