import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../assets/shared/logo.svg";
import hamburgerIcon from "../assets/shared/icon-hamburger.svg";

export default function Header() {
  const navs = [
    { path: "/", name: "home" },
    { path: "/destinations", name: "destination" },
    { path: "/crew", name: "crew" },
    { path: "/technology", name: "technology" },
  ];
  const location = useLocation();
  console.log(location.pathname)

  return (
    <nav className="flex flex-row justify-between items-center lg:gap-0 md:gap-10 gap-0 lg:pt-10 md:p-0 p-6 text-white">
      <div className="lg:ps-16 md:ps-10 lg:grow flex flex-row items-center gap-x-16">
        <div className="w-12 h-12">
          <img
            src={logo}
            alt="logo"
            className="w-full h-full object-scale-down"
          />
        </div>
        <div className="lg:grow h-px bg-white/25 -me-8 relative z-20 lg:block hidden"></div>
      </div>
      <ul className="md:flex hidden flex-row gap-x-12 lg:flex-none grow justify-end backdrop-blur-[80px] bg-white/[.05] lg:ps-32 lg:pe-16 md:pe-10 pe-6 font-barlowCondensed text-base leading-normal tracking-[.125em] relative z-10">
        {navs.map((link, i) => (
          <li key={i} className="pt-9 flex items-center flex-col">
            <Link
              to={link.path}
              className="flex items-center gap-x-3 uppercase"
            >
              <span
                className={`font-bold ${i === 0 ? "lg:inline hidden" : ""}`}
              >
                0{i}
              </span>
              <span>{link.name}</span>
            </Link>
            <motion.div
              className="mt-9 bg-white h-0.5"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </li>
        ))}
      </ul>
      <img src={hamburgerIcon} alt="hamIcon" className="md:hidden block" />
    </nav>
  );
}
