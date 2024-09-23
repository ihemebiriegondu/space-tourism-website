import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function Destination({ destinationData }) {
  const [activeDest, setActiveDest] = useState("Moon");
  const [hoverDest, setHoverDest] = useState("");
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  return (
    <main className="lg:bg-destbg-desktop md:bg-destbg-tablet bg-destbg-mobile pb-12 text-white bg-no-repeat bg-cover h-full overflow-y-auto w-full font-barlowCondensed">
      <section className="pt-48 px-40">
        <div className="text-3xl uppercase mb-6 flex flex-row w-fit gap-x-4 tracking-widee">
          <span className="font-bold tracking-[0.295em] text-white/25">01</span>{" "}
          <ReactTyped
            strings={["Pick your destination"]}
            typeSpeed={50}
            startDelay={100}
            showCursor={false}
          />
        </div>
        {destinationData &&
          destinationData.map((dest, i) => (
            <article
              className={`${
                dest.name === activeDest ? "flex" : "hidden"
              } flex-row py-32`}
              key={i}
            >
              <div className="basis-1/2">
                <div className="w-[480px] h-[480px]">
                  <motion.img
                    key={activeDest}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: isFirstRender ? 1.6 : 0,
                      duration: 0.7,
                      ease: "easeIn",
                    }}
                    src={dest.images.png}
                    alt="destImg"
                    className="w-full h-full animate-spin-slow shadow-2xl rounded-full"
                  />
                </div>
              </div>
              <aside className="basis-1/2">
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.7, ease: "easeIn" }}
                  className="flex flex-row gap-x-8 items-center mb-10"
                >
                  {destinationData &&
                    destinationData.map((links, i) => (
                      <li className="flex flex-col items-center" key={i}>
                        <span
                          className={`text-base uppercase tracking-widestt mb-2 inline-block ${
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
                          className={`w-full h-1 ${
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
                    delay: isFirstRender ? 1.9 : 0,
                    duration: 0.7,
                    ease: "easeIn",
                  }}
                  className=""
                >
                  <h1 className="text-8xl uppercase font-bellefair mb-4">
                    {dest.name}
                  </h1>
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: isFirstRender ? 2 : 0,
                      duration: 0.7,
                      ease: "easeIn",
                    }}
                  >
                    <p className="font-barlow lg:text-lg sm:text-base text-sbase tracking-normal sm:leading-9 leading-7 text-secondary mb-10">
                      {dest.description}
                    </p>
                    <div className="mb-10 w-full h-px bg-white/25"></div>
                    <div className="flex flex-row gap-x-6">
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
                            suffix={dest.name === 'Moon' ? ' km' : ' mil. km'}
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
