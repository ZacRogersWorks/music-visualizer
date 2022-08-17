import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import SocialLinks from "./SocialLinks";

import { indexVariants } from "./animation/variants";

function HomeContent() {
  const [menuOpen, setMenuOpen] = useState();
  const router = useRouter();

  const menuClose = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    router.events.on("hashChangeStart", menuClose);

    return () => router.events.off("hashChangeStart", menuClose);
  }, [router.events]);

  return (
    <div className="overflow-x-hidden">
      <motion.section
        id="home"
        className="relative h-screen w-full pt-24 px-6 md:px-12 pb-32 bg-[url('/images/bgImg.jpg')] bg-cover bg-center overflow-x-hidden"
        initial={{opacity:.01}}
        animate={{opacity:1}}
        transition={{duration:.5}}
      >
        <div className="absolute bottom-0 left-0 h-[66%] w-full bg-gradient-to-t from-black to-transparent"
        
        ></div>
        <nav className="absolute top-[32px] right-0 w-[50%] md:w-[33%] xl:w-[20%]">
          <motion.button
            className={`w-full flex flex-col items-end text-clay origin-right hover:text-white transition-colors duration-300`}
            onClick={() => setMenuOpen(true)}
            variants={indexVariants.menuBtn}
            initial="initial"
            animate="animate"
            whileHover="hover"
            
          >
            <motion.hr
              className="w-full border-[1px]"
              variants={indexVariants.menuRules}
            ></motion.hr>
            <motion.hr
              className="w-[50%] mt-2 border-[1px]"
              variants={indexVariants.menuRules}
            ></motion.hr>
            <motion.hr
              className="w-[25%] mt-2 border-[1px]"
              variants={indexVariants.menuRules}
            ></motion.hr>
          </motion.button>
        </nav>
        <div className={`relative h-full w-full flex flex-col justify-between`}>
          <motion.h1
            className="text-7xl font-light italic uppercase tracking-[16px] text-sand"
            initial={{ y: 40, opacity: 0.1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .6 }}
          >
            Shoyei
          </motion.h1>
          <div className="flex flex-col items-end">
            <motion.p
              className="text-3xl text-sky lowercase italic font-light tracking-[12px] mb-4 mr-[-12px]"
              initial={{opacity: .01, y: 50}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: .6, delay: .2}}
            >
              Audio Artist
            </motion.p>
            <SocialLinks />
          </div>
        </div>
      </motion.section>
      <AnimatePresence>
      {menuOpen ? <Menu setMenuOpen={setMenuOpen} exit={{opacity: 0, transition:{duration: 1}}}/> : null}

      </AnimatePresence>
    </div>
  );
}

export default HomeContent;
