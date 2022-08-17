import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { indexVariants } from "./animation/variants";

const randomKey = Math.random();

const SoundGallery = () => {
  const headingControls = useAnimation();
  const [headingRef, headingInView] = useInView({ threshold: 0.8 });
  useEffect(() => {
    if (headingInView) {
      headingControls.start("animate");
    }
  }, [headingControls, headingInView]);

  return (
    <motion.section
      id="gallery"
      className="relative w-full pt-16 px-6 pb-24"
      
      variants={indexVariants.gallerySection}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div>
        <motion.h2
          ref={headingRef}
          aria-label="Sound Gallery"
          className="relative text-sky uppercase text-5xl font-light italic"
          variants={indexVariants.headings}
          initial="initial"
          animate={headingControls}
        >
          <motion.span variants={indexVariants.headingSpans}>Sound</motion.span>
          <motion.span
            className="absolute top-[1.5rem] left-24"
            variants={indexVariants.headingSpans}
          >
            Gallery
          </motion.span>
        </motion.h2>
        <motion.hr
          className="ml-[-24px] mt-9 w-[66%] md:w-[33%] text-clay border-[1px] origin-left"
          variants={indexVariants.headingRule}
          initial="initial"
          animate={headingControls}
        ></motion.hr>
      </div>
      <motion.p
        className="italic mt-6 md:text-xl"
        variants={indexVariants.galleryDescription}
        initial="initial"
        animate={headingControls}
      >
        An experiment in creating active artist/listener interaction
        <span className="ml-2 text-sand">(more coming soon)</span>
      </motion.p>
      <motion.div
        variants={indexVariants.galleryTrack}
        initial="initial"
        animate={headingControls}
      >
        <div className="relative mt-8 flex flex-col max-w-4xl">
          <p className="relative text-clay text-4xl font-light italic z-20">
            1.
          </p>
          <p className="relative text-sky uppercase text-5xl font-light ml-5 mt-[-1.5rem] mb-[-1rem] z-20">
            Cashmere
          </p>
          <div className="relative ml-8 hover:cursor-pointer hover:scale-[1.02] transition-transform duration-300 overflow-hidden rounded-md">
            <Link href="/tracks/dub">
              <a>
                <Image
                  src="/images/tracks/ujjjjayi_thumbnail.jpg"
                  alt="Ujjjjayi"
                  layout="responsive"
                  width="1608"
                  height="904"
                  placeholder="blur"
                />
              </a>
            </Link>
          </div>
          <p className="lowercase text-sky text-lg self-end">Dub Techno</p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SoundGallery;
