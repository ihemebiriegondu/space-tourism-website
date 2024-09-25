import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/pageHeader";

export default function Crew({ crewData }) {
  const [activeCrew, setActiveCrew] = useState("Commander");
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  console.log(crewData);
  return (
    <main className="lg:bg-crewbg-desktop md:bg-crewbg-tablet bg-crewbg-mobile lg:pb-12 text-white bg-no-repeat bg-cover lg:bg-center min-h-screen w-full font-barlowCondensed">
      <section className="lg:pt-48 md:pt-36 pt-28 2xl:px-40 xl:px-32 lg:px-16 sm:px-10 px-6">
        <PageHeader no={"02"} content={"MEET YOUR CREW"} />

        {crewData &&
          crewData.map((crew, i) => (
            <article
              key={i}
              className={`font-bellefair flex lg:flex-row flex-col gap-x-8 lg:w-full md:w-3/4 lg:mx-0 mx-auto ${
                activeCrew === crew.role ? "flex" : "hidden"
              }`}
            >
              <div
                key={activeCrew}
                className="lg:basis-1/2 lg:w-1/2 w-full flex flex-col lg:gap-y-10 gap-y-6 lg:text-start text-center"
              >
                <div className="lg:py-48 sm:py-8 py-10">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: isFirstRender ? 0.8 : 0,
                    }}
                    className="uppercase lg:text-3xl sm:text-2xl text-lg text-white/50 sm:mb-4 mb-2"
                  >
                    {crew.role}
                  </motion.h3>
                  <motion.h2
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: isFirstRender ? 1 : 0 }}
                    className="min-[1331px]:text-6xl lg:text-5xl sm:text-4xl text-2xl uppercase mb-6"
                  >
                    {crew.name}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: isFirstRender ? 1.2 : 0,
                    }}
                    className="font-barlow lg:text-lg sm:text-base text-sbase tracking-normal sm:leading-9 leading-7 text-secondary"
                  >
                    {crew.bio}
                  </motion.p>
                </div>
                <div className="pb-12 flex flex-row gap-x-10">
                  {crewData &&
                    crewData.map((links, i) => (
                      <span
                        key={i}
                        className={`inline-block w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ease-in ${
                          links.role === activeCrew
                            ? "bg-white"
                            : "bg-white/20 hover:bg-white/50"
                        }`}
                        onClick={() => setActiveCrew(links.role)}
                      ></span>
                    ))}
                </div>
              </div>
              <div className="lg:basis-1/2 h-full lg:text-end text-center relative lg:mt-auto">
                <motion.div
                  key={activeCrew}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: isFirstRender ? 1 : 0 }}
                  className="lg:h-[676px] md:h-[463px] h-[350px] w-full"
                >
                  <img
                    src={crew.images.png}
                    alt="crewimg"
                    className="h-full w-full object-contain"
                  />
                </motion.div>
                {/* <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-primary from-5% via-primary/5 via-15% to-primary/0 to-80%"></div> */}
              </div>
            </article>
          ))}
      </section>
    </main>
  );
}
