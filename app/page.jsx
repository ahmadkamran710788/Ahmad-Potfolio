"use client";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import Photo from "@/components/Photo";
import Image from "next/image";
// import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Stats from "@/components/Stats";

export default function Home() {
  const handleDownload = () => {
    const link = document.createElement("a");

    // Path to the CV file in the public folder
    link.href = "/CV/AhmadCV.pdf"; // Replace with the actual path to your CV
    link.download = "My_CV.pdf"; // The default filename for the download

    // Programmatically trigger the download
    link.click();
  };
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm <br /> <span>Ahmad Kamrans</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm a skilled MERN stack developer who's passionate about Next.js,
              specializing in building modern web applications. My expertise
              lies in using MongoDB, Express.js, React, Node.js and Nest.js to
              create dynamic and responsive apps that deliver exceptional user
              experiences.
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownload}
              >
                <span>Download CV </span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyle="flex gap-6"
                  iconStyle="w-9 h-9 border-2 border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:border-accent hover:text-background transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb:0">
            <Photo />
          </div>
          {/* 
          <div></div> */}
        </div>
      </div>
      <Stats />
    </section>
  );
}
