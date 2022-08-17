import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { indexVariants } from "./animation/variants";

import SocialLinks from "./SocialLinks";

import footerBg from '../public/images/footerbg.webp'
import me from '../public/images/about_thumbnail.webp'

const AboutMe = () => {
  const headingControls = useAnimation();
  const [headingRef, headingInView] = useInView({ threshold: 0.8 });

  useEffect(() => {
    if (headingInView) {
      headingControls.start("animate");
    }
  }, [headingControls, headingInView]);

  return (
    <section
      id="about"
      className="relative w-full pt-16 px-6 pb-24 flex flex-col justify-between"
    >
      <div className="absolute bottom-0 right-0 w-[80%] lg:w-[50%] xl:w-[45%] h-auto">
        <Image
          src={footerBg}
          alt="Background"
          layout="responsive"
          width="2160"
          height="2160"
          placeholder="blur"
        />
      </div>
      <div>
        <motion.h2
          ref={headingRef}
          aria-label="About Me"
          className="relative text-sky uppercase text-5xl font-light italic"
          variants={indexVariants.headings}
          initial="initial"
          animate={headingControls}
        >
          <motion.span variants={indexVariants.headingSpans}>About</motion.span>
          <motion.span
            className="absolute top-[1.5rem] left-24"
            variants={indexVariants.headingSpans}
          >
            Me
          </motion.span>
        </motion.h2>
        <motion.hr
          className="ml-[-24px] mt-9 w-[66%] md:w-[33%] text-clay border-[1px] origin-left"
          variants={indexVariants.headingRule}
          initial="initial"
          animate={headingControls}
        ></motion.hr>
        <motion.div className="relative flex flex-col w-full md:w-[66%]"
        variants={indexVariants.galleryDescription}
        initial="initial"
        animate={headingControls}
        >
          <p
            className="italic mt-6 md:text-2xl z-10"
            
          >
            I’m a producer, DJ, and synthesist working in deep, reflective sound
            design spanning across multiple electronic music genres. I love
            exploring complex texture, sample mangling, other-worldly harmony,
            and destructive dissonance.
            <br /> <br />I can talk synths for hours, so feel free to reach out
            if you want to nerd with me.
          </p>
          <div className="w-[50%] mt-[-2rem] md:mt-[-4rem] z-0 self-center"
          >
            <Image
              src={me}
              alt="About Me"
              layout="responsive"
              width="1080"
              height="1080"
              placeholder="blur"
            />
          </div>
        </motion.div>
      </div>

      <footer className="flex flex-col mt-20 z-10">
        <SocialLinks />
        <div className="text-sm mt-8">
          <p>Copyright 2022</p>
          <div />
          <p>
            Designed/developed by
            <a
              className="ml-1 text-sky"
              href="https://zacrogers.works"
              target="_blank"
              rel="noreferrer"
            >
              zacrogers.works
            </a>
          </p>
        </div>
      </footer>
    </section>
  );
};

export default AboutMe;
