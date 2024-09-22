import React, { useState } from "react";

export default function Destination({ destinationData }) {
  const [activeDest, setActiveDest] = useState("Moon");

  return (
    <main className="lg:bg-destbg-desktop md:bg-destbg-tablet bg-destbg-mobile pb-12 text-white bg-no-repeat bg-cover bg-center h-full overflow-y-auto w-full font-barlowCondensed">
      <section className="pt-48 px-40">
        <h2 className="text-3xl uppercase tracking-widee mb-6">
          <span className="font-bold tracking-[0.295em] text-white/25">01</span>{" "}
          PICK YOUR DESTINATION
        </h2>
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
                  <img
                    src={dest.images.webp}
                    alt="destImg"
                    className="w-full h-full object-scale-down"
                  />
                </div>
              </div>
              <aside className="basis-1/2">
                <ul className="flex flex-row gap-x-8 items-center mb-10">
                  {destinationData &&
                    destinationData.map((links, i) => (
                      <li className="flex flex-col" key={i}>
                        <span
                          className="text-base uppercase tracking-widestt mb-2 inline-block text-secondary inline-block"
                          onClick={() => setActiveDest(links.name)}
                        >
                          {links.name}
                        </span>
                        <div className="w-full h-1 bg-white"></div>
                      </li>
                    ))}
                </ul>
                <h1 className="text-8xl uppercase font-bellefair mb-4">
                  {dest.name}
                </h1>
                <p className="font-barlow lg:text-lg sm:text-base text-sbase tracking-normal sm:leading-9 leading-7 text-secondary mb-10">
                  {dest.description}
                </p>
                <div className="mb-10 w-full h-px bg-white/25"></div>
                <div className="flex flex-row gap-x-6">
                  <div className="flex flex-col gap-y-3 basis-1/2">
                    <p className="uppercase text-secondary text-sm tracking-widestt">
                      AVG. DISTANCE
                    </p>
                    <p className="uppercase text-3xl font-bellefair">
                      {dest.distance}
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-3 basis-1/2">
                    <p className="uppercase text-secondary text-sm tracking-widestt">
                      Est. travel time
                    </p>
                    <p className="uppercase text-3xl font-bellefair">
                      {dest.travel}
                    </p>
                  </div>
                </div>
              </aside>
            </article>
          ))}
      </section>
    </main>
  );
}
