import React from "react";
import { Html } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";

const Play = ({ playAudio }) => {
  return (
    <Html prepend center>
        <div
          className={
            "bg-mi font-bold w-full h-full flex flex-col justify-center items-center"
          }
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.button
            className={
              "text-sky text-4xl font-light italic flex flex-col items-center"
            }
            onClick={() => playAudio()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <svg
              className="mb-6 hover:scale-125 transition-transform duration-300"
              xmlns="http://www.w3.org/2000/svg"
              width="25.602"
              height="32"
              viewBox="0 0 25.602 32"
            >
              <path
                id="Icon_ionic-ios-play"
                data-name="Icon ionic-ios-play"
                d="M9,7.579V37.919a.781.781,0,0,0,1.17.72l24.049-15.17a.859.859,0,0,0,0-1.43L10.17,6.869A.774.774,0,0,0,9,7.579Z"
                transform="translate(-9 -6.751)"
                fill="#B28686"
                
              />
            </svg>
            PLAY
          </motion.button>
        </div>
        <div className="w-[66vw] md:w-[33vw] flex">
          <p className="mt-12 text-center">
            <span className="uppercase text-clay mr-2">Note:</span>To hear audio
            on iOS devices, your mute switch must be turned off.
          </p>
        </div>
    </Html>
  );
};

export default Play;
