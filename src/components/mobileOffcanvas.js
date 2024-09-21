import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import closeIcon from "../assets/shared/icon-close.svg";

export default function MobileOffcanvas({ showNavbar, setShowNavbar }) {
  const navs = [
    { path: "/", name: "home" },
    { path: "/destinations", name: "destination" },
    { path: "/crew", name: "crew" },
    { path: "/technology", name: "technology" },
  ];
  const location = useLocation();

  const variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: "tween",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      opacity: 0,
      x: '100vw',
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 40,
      },
    },
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: showNavbar ? "100%" : 0 }}
      className="md:hidden block fixed top-0 bottom-0 z-30 text-white w-full"
    >
      <motion.div
        initial="closed"
        animate={showNavbar ? "open" : "closed"}
        variants={variants}
        className="backdrop-blur-[80px] bg-primary/[.15]  ms-auto h-full ps-8 sm:w-2/3 w-9/12 font-barlowCondensed text-base leading-normal tracking-[.125em]"
      >
        <div className="py-8 pe-6 flex justify-end">
          <img
            src={closeIcon}
            alt="closeIcon"
            className="cursor-pointer"
            onClick={() => {
              setShowNavbar(false);
            }}
          />
        </div>
        <ul className="pt-12 flex flex-col gap-y-8">
          {navs.map((link, i) => (
            <li key={i} className="flex flex-row justify-between">
              <Link
                to={link.path}
                className="flex items-center gap-x-3 uppercase"
                onClick={() => setShowNavbar(false)}
              >
                <span className="font-bold">0{i}</span>
                <span>{link.name}</span>
              </Link>

              <motion.div
                className="bg-white w-0.5"
                initial={{ height: 0 }}
                animate={{
                  height: link.path === location.pathname ? 24 : 0,
                }}
                transition={{ duration: 0.5 }}
              />
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
