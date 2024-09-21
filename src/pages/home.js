import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const variants = {
    hidden: {
      opacity: 0,
      x: -200,
      transition: {
        duration: 0.4,
        type: "tween",
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        type: "tween",
      },
    },
  };

  return (
    <motion.main
      initial='hidden'
      animate='visible'
      variants={variants}
      className="lg:bg-homebg-desktop md:bg-homebg-tablet bg-homebg-mobile pt-44 text-white bg-no-repeat bg-cover bg-center fixed top-0 bottom-0 w-full"
    >
      home
    </motion.main>
  );
}
