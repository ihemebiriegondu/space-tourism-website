import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/pageHeader";

export default function Tech({ techData }) {
  const [activeTech, setActiveTech] = useState("Launch vehicle");
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  return (
    <main className="lg:bg-techbg-desktop md:bg-techbg-tablet bg-techbg-mobile pb-12 text-white bg-no-repeat bg-cover lg:bg-center min-h-screen w-full font-barlowCondensed overflow-x-hidden">
      <section className="lg:pt-48 md:pt-36 pt-28 2xl:ps-40 xl:ps-32 lg:ps-10">
        <PageHeader no={"03"} content={"SPACE LAUNCH 101"} />

        {techData &&
          techData.map((tech, i) => (
            <article
              key={i}
              className={`${
                tech.name === activeTech ? "flex" : "hidden"
              } font-bellefair lg:flex-row flex-col-reverse gap-8 w-full`}
            >
              <div className="llg:basis-[55%] lg:w-[55%] sm:w-3/4 w-11/12 lg:mx-0 mx-auto flex lg:flex-row flex-col items-center xl:gap-16 lg:gap-12 gap-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: isFirstRender ? 1.5 : 0,
                  }}
                  className="flex lg:flex-col flex-row lg:gap-8 gap-4 justify-center"
                >
                  {techData &&
                    techData.map((links, i) => (
                      <p
                        key={i}
                        className={`lg:text-3xl sm:text-2xl text-lg inline-block lg:h-20 sm:h-14 h-10 lg:w-20 sm:w-14 w-10 flex flex-col justify-center text-center rounded-full cursor-pointer transition-all duration-300 ease-in border ${
                          links.name === activeTech
                            ? "bg-white text-primary border-white"
                            : "border-white/25 hover:border-white"
                        }`}
                        onClick={() => setActiveTech(links.name)}
                      >
                        <span>{i + 1}</span>
                      </p>
                    ))}
                </motion.div>

                <div
                  key={activeTech}
                  className="w-full flex flex-col lg:gap-y-10 gap-y-6 lg:text-start text-center"
                >
                  <div className="lg:py-48">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.7,
                        delay: isFirstRender ? 0.9 : 0,
                      }}
                      className="uppercase lg:text-3xl sm:text-2xl text-lg text-white/50 sm:mb-4 mb-2"
                    >
                      THE TERMINOLOGY…
                    </motion.h3>
                    <motion.h2
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.7,
                        delay: isFirstRender ? 1.1 : 0.2,
                      }}
                      className="min-[1331px]:text-6xl lg:text-5xl sm:text-4xl text-2xl uppercase mb-6"
                    >
                      {tech.name}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.7,
                        delay: isFirstRender ? 1.6 : 0.5,
                      }}
                      className="font-barlow lg:text-lg sm:text-base text-sbase tracking-normal sm:leading-9 leading-7 text-secondary"
                    >
                      {tech.description}
                    </motion.p>
                  </div>
                </div>
              </div>

              <div className="basis-[45%] h-full lg:text-end text-center relative lg:mt-auto">
                <motion.div
                  key={activeTech}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: isFirstRender ? 1.1 : 0.2,
                  }}
                  className="lg:h-[676px] md:h-[357px] h-64 w-full lg:flex flex-row justify-end"
                >
                  <img
                    src={tech.images.portrait}
                    alt="techimg"
                    className="h-full lg:w-auto w-full lg:object-contain object-cover lg:block sm:hidden block"
                  />
                   <img
                    src={tech.images.landscape}
                    alt="techimg"
                    className="h-full w-full object-cover lg:hidden sm:block hidden"
                  />
                </motion.div>
              </div>
            </article>
          ))}
      </section>
    </main>
  );
}
