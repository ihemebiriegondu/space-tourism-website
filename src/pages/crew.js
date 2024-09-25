import React, { useState } from "react";
import PageHeader from "../components/pageHeader";

export default function Crew({ crewData }) {
  const [activeCrew, setActiveCrew] = useState("Commander");

  console.log(crewData);
  return (
    <main className="lg:bg-crewbg-desktop md:bg-crewbg-tablet bg-crewbg-mobile pb-12 text-white bg-no-repeat bg-cover lg:bg-center min-h-screen w-full font-barlowCondensed">
      <section className="lg:pt-48 md:pt-36 pt-28 2xl:px-40 xl:px-32 lg:px-20 sm:px-10 px-6">
        <PageHeader no={"02"} content={"MEET YOUR CREW"} speed={30} />

        {crewData &&
          crewData.map((crew, i) => (
            <article
              key={i}
              className={`font-bellefair flex lg:flex-row flex-col gap-x-8 ${
                activeCrew === crew.role ? "flex" : "hidden"
              }`}
            >
              <div className="lg:basis-1/2 lg:w-1/2 w-full flex flex-col lg:gap-y-10 gap-y-6 lg:text-start text-center">
                <div className="lg:py-48 sm:py-8 py-10">
                  <h3 className="uppercase lg:text-3xl sm:text-2xl text-lg text-white/50 sm:mb-4 mb-2">
                    {crew.role}
                  </h3>
                  <h2 className="lg:text-6xl sm:text-4xl text-2xl uppercase mb-6">
                    {crew.name}
                  </h2>
                  <p className="font-barlow lg:text-lg sm:text-base text-sbase tracking-normal sm:leading-9 leading-7 text-secondary">
                    {crew.bio}
                  </p>
                </div>
                <div className="pb-12"></div>
              </div>
              <div className="lg:basis-1/2 lg:h-full sm:h-[463px] h-[350px] lg:text-end text-center relative">
                <div className="h-[676px] w-full">
                  <img src={crew.images.png} alt="crewimg" className="h-full w-full" />
                </div>
                <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-primary to-primary/90 shddive"></div>
              </div>
            </article>
          ))}
      </section>
    </main>
  );
}
