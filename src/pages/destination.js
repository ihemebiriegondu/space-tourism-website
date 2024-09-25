import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import PageHeader from "../components/pageHeader";

export default function Destination({ destinationData }) {
  const [activeDest, setActiveDest] = useState("Moon");
  const [hoverDest, setHoverDest] = useState("");
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  return (
    <main className="lg:bg-destbg-desktop md:bg-destbg-tablet bg-destbg-mobile pb-12 text-white bg-no-repeat bg-cover lg:bg-center min-h-screen w-full font-barlowCondensed">
      <section className="lg:pt-48 md:pt-36 pt-28 2xl:px-40 xl:px-32 lg:px-20 sm:px-10 px-6">
        <PageHeader no="01" content="pick your destination" />
        {destinationData &&
          destinationData.map((dest, i) => (
            <article
              className={`${
                dest.name === activeDest ? "flex" : "hidden"
              } lg:flex-row flex-col lg:py-32 lg:gap-y-0 gap-y-8`}
              key={i}
            >
              <div className="lg:basis-1/2 lg:py-0 sm:py-10 py-7 lg:w-1/2 w-full lg:block flex flex-row justify-center">
                <div className="xl:w-[480px] lg:w-96 sm:w-80 w-40 xl:h-[480px] lg:w-96 sm:w-80 w-40">
                  <motion.img
                    key={activeDest}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: isFirstRender ? 1.4 : 0,
                      duration: 0.7,
                      ease: "easeIn",
                    }}
                    src={dest.images.png}
                    alt="destImg"
                    className="w-full h-full animate-spin-slow shadow-2xl rounded-full"
                  />
                </div>
              </div>
              <aside className="basis-1/2 lg:w-1/2 sm:w-3/4 w-full lg:mx-0 mx-auto">
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.7, ease: "easeIn" }}
                  className="flex flex-row gap-x-8 items-center lg:justify-start justify-center lg:mb-10 mb-6"
                >
                  {destinationData &&
                    destinationData.map((links, i) => (
                      <li className="flex flex-col items-center" key={i}>
                        <span
                          className={`sm:text-base text-sm uppercase tracking-widestt mb-2 inline-block ${
                            activeDest === links.name
                              ? "text-white"
                              : "text-secondary"
                          } cursor-pointer`}
                          onClick={() => setActiveDest(links.name)}
                          onMouseOver={() => setHoverDest(links.name)}
                          onMouseLeave={() => setHoverDest("")}
                        >
                          {links.name}
                        </span>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{
                            width:
                              activeDest === links.name ||
                              hoverDest === links.name
                                ? "100%"
                                : 0,
                          }}
                          transition={{ duration: 0.5 }}
                          className={`w-full lg:h-1 h-0.5 ${
                            activeDest === links.name
                              ? "bg-white"
                              : "bg-white/50"
                          }`}
                        ></motion.div>
                      </li>
                    ))}
                </motion.ul>
                <motion.div
                  key={activeDest}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: isFirstRender ? 1.6 : 0,
                    duration: 0.7,
                    ease: "easeIn",
                  }}
                  className="lg:text-start text-center"
                >
                  <h1 className="lg:text-8xl sm:text-7.5xl text-6xl uppercase font-bellefair lg:mb-4 mb-2">
                    {dest.name}
                  </h1>
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: isFirstRender ? 1.8 : 0,
                      duration: 0.7,
                      ease: "easeIn",
                    }}
                  >
                    <p className="font-barlow lg:text-lg sm:text-base text-sbase tracking-normal sm:leading-9 leading-7 text-secondary lg:mb-10 mb-6">
                      {dest.description}
                    </p>
                    <div className="lg:mb-10 mb-6 w-full h-px bg-white/25"></div>
                    <div className="flex sm:flex-row flex-col items-center gap-6">
                      <div className="flex flex-col gap-y-3 basis-1/2">
                        <p className="uppercase text-secondary text-sm tracking-widestt">
                          AVG. DISTANCE
                        </p>

                        {dest.name === "Titan" ? (
                          <p className="uppercase text-3xl font-bellefair">
                            {dest.distance}
                          </p>
                        ) : (
                          <CountUp
                            className="uppercase text-3xl font-bellefair"
                            start={0}
                            end={parseFloat(dest.distance.replace(/,/g, ""))}
                            suffix={dest.name === "Moon" ? " km" : " mil. km"}
                            duration={3}
                            separator=","
                            decimal=","
                            delay={0.5}
                          ></CountUp>
                        )}
                      </div>
                      <div className="flex flex-col gap-y-3 basis-1/2">
                        <p className="uppercase text-secondary text-sm tracking-widestt">
                          Est. travel time
                        </p>
                        <CountUp
                          className="uppercase text-3xl font-bellefair"
                          start={0}
                          end={parseInt(dest.travel)}
                          suffix=" days"
                          duration={1}
                          delay={0.5}
                        ></CountUp>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </aside>
            </article>
          ))}
      </section>
    </main>
  );
}
