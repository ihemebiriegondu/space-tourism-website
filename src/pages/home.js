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
      initial="hidden"
      animate="visible"
      variants={variants}
      className="lg:bg-homebg-desktop md:bg-homebg-tablet bg-homebg-mobile lg:pb-32 text-white bg-no-repeat bg-cover bg-center min-h-screen w-full lg:flex flex-col items-center justify-end"
    >
      <section className="flex lg:flex-row flex-col items-center md:justify-between justify-center h-full lg:gap-y-0 md:gap-y-16 gap-y-32 2xl:ps-32 xl:ps-24 sm:ps-10 ps-7 2xl:pe-20 sm:pe-10 pe-7 lg:pt-44 md:pt-0 sm:pt-32 pt-16 lg:mt-0">
        <div className="lg:basis-1/2 lg:text-start text-center lg:w-1/2 md:w-3/4 w-auto lg:pt-44 sm:pt-56 pt-40 xl:mb-0 sm:mb-6">
          <h3 className="uppercase font-barlowCondensed sm:text-3xl text-base leading-normal tracking-widee sm:mb-0 mb-2.5">
            SO, YOU WANT TO TRAVEL TO
          </h3>
          <h1 className="uppercase font-bellefair sm:text-10xl text-7.5xl leading-normal tracking-normal sm:mb-0 mb-4">
            SPACE
          </h1>
          <p className="font-barlow lg:text-lg sm:text-base text-sbase tracking-normal sm:leading-9 leading-7">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="lg:basis-1/2 flex flex-row justify-end lg:pb-0 sm:pb-28 pb-16 lg:pt-44 sm:pt-12 pt-4 lg:pe-20 pe-0">
          <div className="bg-white sm:h-72 h-36 sm:w-72 w-36 flex flex-col justify-center text-center rounded-full sm:hover:shadow-bigExplore hover:shadow-smallExplore transition-shadow duration-400">
            <p className="uppercase font-bellefair sm:text-[2em] text-lg leading-normal tracking-normal text-primary">
              EXPLORE
            </p>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
