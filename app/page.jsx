"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left">
            <span>Software Developer</span>
            <h1 className="h1">
              Hello I'm <br /> <span>Ahmad Kamran</span>
            </h1>
          </div>
          {/* photo */}
          <div>Photo</div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
