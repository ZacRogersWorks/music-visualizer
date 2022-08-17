import { useRouter } from "next/router";
import Head from "next/head";
import React, { useState } from "react";
import { motion } from "framer-motion";

import Background from "../../components/three/Background";
import MuteButton from "../../components/MuteButton";

import { indexVariants } from "../../components/animation/variants";

function Dub() {
  const [kickPlaying, setKickPlaying] = useState(true);
  const [percPlaying, setPercPlaying] = useState(false);
  const [samplePlaying, setSamplePlaying] = useState(false);
  const [chordsPlaying, setChordsPlaying] = useState(true);
  const [bassPlaying, setBassPlaying] = useState(false);
  const [play, setPlay] = useState(false);

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Shoyei | Audio Artist</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Audio Artist & DJ" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="UTF-8" />
        <meta
          name="keywords"
          content="music, artist, DJ, producer, synthesizers"
        />
        <meta name="author" content="Zac Rogers" />
        <link rel="canonical" href="https://www.shoyei.net/" />

        <meta property="og:title" content="Shoyei" key="ogtitle" />
        <meta
          property="og:description"
          content="Audio Artist & DJ"
          key="ogdesc"
        />
        <meta property="og:url" content="https://www.shoyei.net/" key="ogurl" />
        <meta
          property="og:image"
          content="/images/ogScreenshot.jpg"
          key="ogimage"
        />
        <meta property="og:site_name" content="Shoyei" key="ogsitename" />
      </Head>
      <div className="relative">
        {/* <Stats showPanel={0} className="stats" /> */}
        <Background
          kickPlaying={kickPlaying}
          percPlaying={percPlaying}
          samplePlaying={samplePlaying}
          chordsPlaying={chordsPlaying}
          bassPlaying={bassPlaying}
          play={play}
          setPlay={setPlay}
        />
        <div className="pointer-events-none absolute left-0 top-0 h-screen w-screen px-8 pt-12 pb-16 flex flex-col justify-between items-center z-50">
          <div className="w-full flex justify-between items-center">
            <motion.button
              className="pointer-events-auto text-white hover:cursor-pointer hover:scale-110 transition-transform duration-300"
              onClick={() => router.push("/#gallery")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  id="Icon_ionic-md-arrow-back"
                  data-name="Icon ionic-md-arrow-back"
                  d="M37.977,19.977h-24.3l11.2-11.2-2.9-2.8-16,16,16,16,2.8-2.8-11.1-11.2h24.3Z"
                  transform="translate(-5.977 -5.977)"
                  fill="currentColor"
                />
              </svg>
            </motion.button>
            <motion.h1
              className="uppercase text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Ujjjjayi
            </motion.h1>
          </div>

          {play ? (
            <motion.div
              className="flex justify-center flex-wrap text-clay"
              variants={indexVariants.muteContainer}
              initial="initial"
              animate="animate"
            >
              <MuteButton
                name="chords"
                playing={chordsPlaying}
                setPlaying={setChordsPlaying}
              />
              <MuteButton
                name="kick"
                playing={kickPlaying}
                setPlaying={setKickPlaying}
              />
              <MuteButton
                name="bass"
                playing={bassPlaying}
                setPlaying={setBassPlaying}
              />
              <MuteButton
                name="perc"
                playing={percPlaying}
                setPlaying={setPercPlaying}
              />
              <MuteButton
                name="sample"
                playing={samplePlaying}
                setPlaying={setSamplePlaying}
              />
            </motion.div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Dub;
