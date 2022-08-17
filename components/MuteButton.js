import React from "react";
import { motion } from "framer-motion";
import { indexVariants } from "./animation/variants";

function MuteButton({ name, playing, setPlaying }) {

  const togglePlay = () => {
    playing ? setPlaying(false) : setPlaying(true);
  };
  return (
    <motion.button
      className={`${
        playing ? "text-white" : null
      } uppercase font-light pointer-events-auto relative h-20 w-24 text-center justify-center
      before:content=["] before:absolute before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:h-20 before:w-20 before:border-solid before:border-4 before:rounded-full hover:scale-105 transition-all duration-200`}
      onClick={togglePlay}
      variants={indexVariants.muteBtns}
    >
      {name}
    </motion.button>
  );
}

export default MuteButton;
