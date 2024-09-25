import React from "react";
import { ReactTyped } from "react-typed";

export default function PageHeader({no, content}) {
  return (
    <div className="lg:text-3xl sm:text-xl text-base uppercase mb-6 flex flex-row sm:justify-start justify-center lg:gap-x-4 gap-x-6 tracking-widee">
      <span className="font-bold tracking-[0.295em] text-white/25">{no}</span>{" "}
      <ReactTyped
        strings={[`${content}`]}
        typeSpeed={30}
        startDelay={100}
        showCursor={false}
      />
    </div>
  );
}
