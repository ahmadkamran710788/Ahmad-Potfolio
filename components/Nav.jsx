"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export default function Nav() {
  const pathname = usePathname(); // Get current pathname

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        // Ensure the `link.path` is defined before rendering the Link component
        if (!link.path) {
          console.error(`Link path is missing for: ${link.name}`);
          return null; // Don't render this link if path is undefined
        }

        // Check if the link's path matches the current pathname to apply active styles
        const isActive = pathname === link.path;

        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              isActive ? "text-accent border-b-2 border-accent" : ""
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
