import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { indexVariants } from "./animation/variants";
import SocialLinks from "./SocialLinks";
import Link from "next/link";

const randomKey = Math.random()

function Menu({ setMenuOpen }) {
  return (
      <motion.div
        className={`absolute top-0 right-0 h-screen w-full md:w-[50%] px-6 md:px-12 pt-8 pb-32 lowercase bg-midnight`}
        initial={{ opacity: 0, x: "50vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, x: "50vw" }}
      >
        <div className={`relative h-full w-full flex flex-col items-end`}>
          <motion.button
            className={` text-sky `}
            onClick={() => setMenuOpen(false)}
            initial={{ x: 50 }}
            animate={{ rotate: -180, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <svg
              className="hover:scale-110 hover:text-white transition-all duration-300"
              xmlns="http://www.w3.org/2000/svg"
              width="28.819"
              height="28.257"
              viewBox="0 0 28.819 28.257"
            >
              <g
                id="Group_2"
                data-name="Group 2"
                transform="translate(-261.103 -249.069)"
              >
                <line
                  id="Line_1"
                  data-name="Line 1"
                  x2="26"
                  y2="25.395"
                  transform="translate(262.5 250.5)"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <line
                  id="Line_2"
                  data-name="Line 2"
                  x1="25"
                  y2="25.261"
                  transform="translate(263.5 250.5)"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
              </g>
            </svg>
          </motion.button>
          <motion.div
            className="h-full border-r-2 my-8 text-clay origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
          ></motion.div>
          <div className="mb-8">
            <motion.ul
              className="text-right text-3xl uppercase text-sky font-light"
              variants={indexVariants.menuLinksParent}
              initial="initial"
              animate="animate"
            >
              <motion.li
                className="hover:text-white transition-color duration-300"
                variants={indexVariants.menuLinksChildren}
              >
                <Link href="#home" onMouseDown={() => setMenuOpen(false)}>
                  Home
                </Link>
              </motion.li>
              <motion.li
                className="hover:text-white transition-color duration-300"
                variants={indexVariants.menuLinksChildren}
              >
                <Link href="#gallery" onMouseDown={() => setMenuOpen(false)}>
                  Sound Gallery
                </Link>
              </motion.li>
              <motion.li
                className="hover:text-white transition-color duration-300"
                variants={indexVariants.menuLinksChildren}
              >
                <Link href="#about" onMouseDown={() => setMenuOpen(false)}>
                  About Me
                </Link>
              </motion.li>
            </motion.ul>
          </div>
          <SocialLinks />
        </div>
      </motion.div>
  );
}

export default Menu;
