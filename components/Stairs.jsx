"use client";
import React from "react";
import { motion } from "framer-motion";

const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <div className="h-full w-full relative flex">
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full absolute bg-white"
          style={{
            width: "16.67%", // Each strip is one-sixth of the screen width
            left: `${index * 16.67}%`, // Spread each strip horizontally across the screen
          }}
        />
      ))}
    </div>
  );
};

export default Stairs;
