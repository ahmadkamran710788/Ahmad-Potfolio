"use client";
import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaSkype,
  FaWhatsapp,
} from "react-icons/fa";
import { SiUpwork, SiFiverr, SiWhatsapp } from "react-icons/si";
// import { FaUpwork, FaFiverr } from "react-icons/fa";

const social = [
  { icon: <FaGithub />, path: "https://github.com/ahmadkamran710788" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/ahmad-kamran-13272b205/",
  },
  { icon: <FaSkype />, path: "https://join.skype.com/invite/tL0d4osHYeV3" },
  { icon: <SiWhatsapp />, path: "https://wa.me/923055519806" },
  // { icon: <FaTwitter />, path: "" },
  {
    icon: <SiUpwork />,
    path: "https://www.upwork.com/freelancers/~013bb7a4c009e30283?s=1017484851352698949",
  },
];
export default function Social({ containerStyle, iconStyle }) {
  return (
    <div className={containerStyle}>
      {social.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
