import { useRouter } from "next/router";
import Head from "next/head";
import React, { Suspense, useState } from "react";
import { motion } from "framer-motion";

// import Background from "../../components/three/Background";
import MuteButton from "../../components/MuteButton";

import { indexVariants } from "../../components/animation/variants";

import dynamic from "next/dynamic";

const Background = dynamic(
  () => {
    return import("../../components/three/ambient/Background");
  },
  { ssr: false }
);

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
        <meta charSet="UTF-8" />
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
        <Suspense>
          <Background />
        </Suspense>
      </div>
    </>
  );
}

export default Dub;
